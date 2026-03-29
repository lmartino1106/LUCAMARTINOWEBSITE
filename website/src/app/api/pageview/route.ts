import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { page, referrer, userAgent } = await request.json();

    if (!page) {
      return NextResponse.json({ error: "page is required" }, { status: 400 });
    }

    const supabase = createServiceClient();

    const { error } = await supabase.from("page_views").insert({
      page,
      referrer: referrer || null,
      user_agent: userAgent || null,
    });

    if (error) {
      console.error("Failed to insert page view:", error.message);
      return NextResponse.json({ error: "insert failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
