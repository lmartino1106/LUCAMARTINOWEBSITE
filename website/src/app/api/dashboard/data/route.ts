import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export async function GET() {
  const supabase = createServiceClient();

  const [metricsRes, postsRes, promptsRes, contactsRes] = await Promise.all([
    supabase.from("brand_metrics").select("*").order("week_start", { ascending: false }).limit(1),
    supabase.from("content_posts").select("*").order("scheduled_date", { ascending: true }),
    supabase.from("daily_prompts").select("*").order("date", { ascending: true }),
    supabase.from("contacts").select("*").order("created_at", { ascending: false }).limit(10),
  ]);

  return NextResponse.json({
    metrics: metricsRes.data?.[0] || null,
    posts: postsRes.data || [],
    prompts: promptsRes.data || [],
    contacts: contactsRes.data || [],
  });
}

export async function POST(request: Request) {
  const supabase = createServiceClient();
  const { action, payload } = await request.json();

  switch (action) {
    case "save_metrics": {
      if (payload.id) {
        const { id, ...data } = payload;
        const { error } = await supabase.from("brand_metrics").update(data).eq("id", id);
        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      } else {
        const { error } = await supabase.from("brand_metrics").insert({
          ...payload,
          week_start: new Date().toISOString().split("T")[0],
        });
        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true });
    }

    case "update_post_status": {
      const { error } = await supabase
        .from("content_posts")
        .update({ status: payload.status })
        .eq("id", payload.id);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ success: true });
    }

    case "add_post": {
      const { data, error } = await supabase
        .from("content_posts")
        .insert(payload)
        .select()
        .single();
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ post: data });
    }

    case "delete_post": {
      const { error } = await supabase
        .from("content_posts")
        .delete()
        .eq("id", payload.id);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ success: true });
    }

    case "toggle_prompt": {
      const { error } = await supabase
        .from("daily_prompts")
        .update({ completed: payload.completed })
        .eq("id", payload.id);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ success: true });
    }

    default:
      return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }
}
