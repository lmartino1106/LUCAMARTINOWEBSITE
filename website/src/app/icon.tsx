import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
          border: "1.5px solid #c9a96e",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 0, lineHeight: 1 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#c9a96e", letterSpacing: "-0.5px" }}>L</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#e8e8e8", letterSpacing: "-0.5px" }}>M</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
