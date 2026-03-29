import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Luca Martino - Abogado & Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            zIndex: 10,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Luca Martino
          </div>

          {/* Divider line */}
          <div
            style={{
              width: 120,
              height: 3,
              background: "linear-gradient(90deg, #0ea5e9, #22d3ee)",
              borderRadius: 2,
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#94a3b8",
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <span style={{ color: "#0ea5e9" }}>Abogado</span>
            <span style={{ color: "#64748b" }}>&</span>
            <span style={{ color: "#22d3ee" }}>Developer</span>
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: "#64748b",
              marginTop: 8,
              display: "flex",
              textAlign: "center",
              maxWidth: 700,
            }}
          >
            Automatización e IA Legal para Estudios Jurídicos
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 16,
              color: "#0ea5e9",
              marginTop: 16,
              fontWeight: 600,
              letterSpacing: "0.05em",
              display: "flex",
            }}
          >
            lucamartino.cl
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
