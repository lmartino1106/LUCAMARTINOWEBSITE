import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1b2e",
          borderRadius: 36,
          border: "6px solid #c9a96e",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-end", gap: 0, lineHeight: 1 }}>
            <span style={{ fontSize: 72, fontWeight: 700, color: "#c9a96e", letterSpacing: "-2px" }}>L</span>
            <span style={{ fontSize: 72, fontWeight: 700, color: "#f0f0f0", letterSpacing: "-2px" }}>M</span>
          </div>
          <div
            style={{
              fontSize: 13,
              fontFamily: "system-ui, sans-serif",
              color: "#c9a96e",
              letterSpacing: "4px",
              fontWeight: 400,
            }}
          >
            ABOGADO
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
