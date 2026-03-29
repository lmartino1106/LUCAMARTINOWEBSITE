import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `Eres el asistente de contenido de Luca Martino, abogado litigante y developer chileno.
Generas contenido para redes sociales sobre LegalTech, automatización legal, IA para abogados.

Tono: profesional pero cercano, desde la trinchera del litigio real.
Audiencia: abogados chilenos, socios de estudios, gerentes legales.
Idioma: español chileno.

Cuando generas un REEL, devuelves JSON con: { title, points: string[], cta }
Cuando generas un CARRUSEL, devuelves JSON con: { slides: [{ title, subtitle }] } (5 slides, primero es cover, último es CTA)
Cuando generas un POST, devuelves JSON con: { text, hashtags: string[] }
Cuando generas una PRESENTACION, devuelves JSON con: { name: "Luca Martino", role: "Abogado & Developer", tagline, credentials: string[], cta }

SIEMPRE responde SOLO con JSON válido, sin markdown ni explicaciones.`;

export async function POST(request: Request) {
  try {
    const { type, prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt requerido" }, { status: 400 });
    }

    const typeInstructions: Record<string, string> = {
      reel: "Genera contenido para un REEL vertical educativo. Devuelve JSON con title (gancho corto), points (5 puntos concisos), cta (llamado a acción).",
      carrusel: "Genera contenido para un CARRUSEL de Instagram de 5 slides. Devuelve JSON con slides array (cada uno con title y subtitle). Slide 1 = cover llamativo, slide 5 = CTA.",
      post: "Genera un POST de LinkedIn de 800-1200 caracteres. Devuelve JSON con text (el post completo) y hashtags (5 hashtags).",
      presentacion: "Genera contenido para un VIDEO de presentación personal. Devuelve JSON con tagline, credentials (3 logros), cta.",
    };

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `${typeInstructions[type] || typeInstructions.post}\n\nTema: ${prompt}` },
      ],
      temperature: 0.8,
      response_format: { type: "json_object" },
    });

    const content = JSON.parse(completion.choices[0].message.content || "{}");

    return NextResponse.json({ content, type });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error generando contenido";
    console.error("Content generation error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
