import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos" },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      service: service || null,
      message,
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Error al guardar el mensaje" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
