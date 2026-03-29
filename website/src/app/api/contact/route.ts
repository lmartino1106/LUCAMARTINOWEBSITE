import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

    // Send email notification
    if (resend) {
      try {
        await resend.emails.send({
          from: "Formulario Web <onboarding@resend.dev>",
          to: "lucamartinoacevedo@gmail.com",
          subject: `Nuevo contacto: ${name} - ${service || "Sin servicio especificado"}`,
          html: `
            <h2>Nuevo mensaje desde tu web</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
            <p><strong>Empresa:</strong> ${company || "No proporcionada"}</p>
            <p><strong>Servicio:</strong> ${service || "No especificado"}</p>
            <hr />
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
          `,
        });
      } catch (emailErr) {
        console.error("Email error:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
