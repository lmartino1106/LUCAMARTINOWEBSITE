import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const COLORS = {
  bg: "#0a0a0f",
  primary: "#0ea5e9",
  accent: "#22d3ee",
  text: "#f1f5f9",
  muted: "#94a3b8",
  border: "#1e293b",
};

export interface ReelEducativoProps {
  title: string;
  points: string[];
  authorName: string;
  authorTitle: string;
}

export const ReelEducativo: React.FC<ReelEducativoProps> = ({
  title,
  points,
  authorName,
  authorTitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation - spring from top
  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const titleY = interpolate(titleProgress, [0, 1], [-120, 0]);
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);

  // Author animation - appears near the end
  const authorStart = 30 + points.length * 40 + 20;
  const authorOpacity = interpolate(
    frame,
    [authorStart, authorStart + 20],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const authorY = interpolate(
    frame,
    [authorStart, authorStart + 20],
    [30, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${COLORS.border}44 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.border}44 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
        }}
      />

      {/* Gradient glow top */}
      <div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.primary}15 0%, transparent 70%)`,
        }}
      />

      {/* Content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "80px 60px",
        }}
      >
        {/* Title */}
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
            fontSize: 72,
            fontWeight: 800,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 80,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Points */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 40,
            width: "100%",
            maxWidth: 850,
          }}
        >
          {points.map((point, index) => {
            const pointStart = 30 + index * 40;
            const pointProgress = spring({
              frame: Math.max(0, frame - pointStart),
              fps,
              config: { damping: 14, stiffness: 100 },
            });

            const pointX = interpolate(pointProgress, [0, 1], [80, 0]);
            const pointOpacity = interpolate(pointProgress, [0, 1], [0, 1]);

            // Bullet pulse
            const pulsePhase = Math.sin(
              ((frame - pointStart) / fps) * Math.PI * 2
            );
            const bulletScale =
              frame > pointStart
                ? interpolate(pulsePhase, [-1, 1], [0.8, 1.2])
                : 0;

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  transform: `translateX(${pointX}px)`,
                  opacity: pointOpacity,
                }}
              >
                {/* Cyan bullet dot */}
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: COLORS.accent,
                    transform: `scale(${bulletScale})`,
                    boxShadow: `0 0 20px ${COLORS.accent}88, 0 0 40px ${COLORS.accent}44`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 500,
                    color: COLORS.text,
                  }}
                >
                  {point}
                </span>
              </div>
            );
          })}
        </div>

        {/* Author */}
        <div
          style={{
            position: "absolute",
            bottom: 120,
            opacity: authorOpacity,
            transform: `translateY(${authorY}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: COLORS.text,
            }}
          >
            {authorName}
          </span>
          {/* Sky blue gradient underline */}
          <div
            style={{
              width: 200,
              height: 4,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
            }}
          />
          <span
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: COLORS.muted,
              marginTop: 4,
            }}
          >
            {authorTitle}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
