import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { compositionId, props } = await request.json();

    if (!compositionId || !props) {
      return NextResponse.json({ error: "compositionId and props required" }, { status: 400 });
    }

    // For now, return instructions - full rendering requires local CLI or Remotion Lambda
    // Vercel serverless functions can't run ffmpeg
    return NextResponse.json({
      message: "Para renderizar, usa el CLI local:",
      command: `npx remotion render ${compositionId} out/${compositionId.toLowerCase()}.mp4 --props='${JSON.stringify(props)}'`,
      compositionId,
      props,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
