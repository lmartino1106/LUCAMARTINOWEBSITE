import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { password } = await request.json();
  const dashboardPassword = process.env.DASHBOARD_PASSWORD;

  if (!dashboardPassword) {
    return NextResponse.json(
      { error: "Dashboard no configurado" },
      { status: 500 }
    );
  }

  if (password === dashboardPassword) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json(
    { error: "Contraseña incorrecta" },
    { status: 401 }
  );
}
