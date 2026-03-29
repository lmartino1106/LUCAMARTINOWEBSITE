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

export interface VideoPresentacionProps {
  name: string;
  role: string;
  tagline: string;
  credentials: string[];
  cta: string;
}

/**
 * Simulates a typing effect by revealing characters over time.
 */
const useTypingText = (
  text: string,
  startFrame: number,
  charsPerFrame: number = 0.8
): string => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const charsToShow = Math.floor(elapsed * charsPerFrame);
  return text.slice(0, Math.min(charsToShow, text.length));
};

/**
 * Blinking cursor that appears during typing.
 */
const Cursor: React.FC<{ visible: boolean }> = ({ visible }) => {
  const frame = useCurrentFrame();
  const blink = Math.floor(frame / 8) % 2 === 0;

  if (!visible) return null;

  return (
    <span
      style={{
        display: "inline-block",
        width: 3,
        height: "1em",
        backgroundColor: COLORS.accent,
        marginLeft: 4,
        opacity: blink ? 1 : 0,
        verticalAlign: "text-bottom",
      }}
    />
  );
};

export const VideoPresentacion: React.FC<VideoPresentacionProps> = ({
  name,
  role,
  tagline,
  credentials,
  cta,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timeline
  const NAME_START = 10;
  const NAME_DONE = NAME_START + Math.ceil(name.length / 0.8);
  const ROLE_START = NAME_DONE + 15;
  const TAGLINE_START = ROLE_START + 30;
  const TAGLINE_DONE = TAGLINE_START + Math.ceil(tagline.length / 0.8);
  const CREDENTIALS_START = TAGLINE_DONE + 20;
  const CREDENTIAL_STAGGER = 35;
  const CTA_START =
    CREDENTIALS_START + credentials.length * CREDENTIAL_STAGGER + 15;

  // Typing texts
  const typedName = useTypingText(name, NAME_START, 0.8);
  const nameIsTyping = frame >= NAME_START && typedName.length < name.length;

  const typedTagline = useTypingText(tagline, TAGLINE_START, 0.8);
  const taglineIsTyping =
    frame >= TAGLINE_START && typedTagline.length < tagline.length;

  // Role fade in
  const roleOpacity = interpolate(frame, [ROLE_START, ROLE_START + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const roleY = interpolate(frame, [ROLE_START, ROLE_START + 20], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA animation
  const ctaProgress = spring({
    frame: Math.max(0, frame - CTA_START),
    fps,
    config: { damping: 10, stiffness: 60 },
  });
  const ctaOpacity = interpolate(ctaProgress, [0, 1], [0, 1]);
  const ctaScale = interpolate(ctaProgress, [0, 1], [0.8, 1]);

  // Neon glow pulse for CTA
  const glowPulse =
    frame > CTA_START
      ? interpolate(
          Math.sin(((frame - CTA_START) / fps) * Math.PI * 3),
          [-1, 1],
          [0.4, 1]
        )
      : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${COLORS.border}44 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.border}44 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.3,
        }}
      />

      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: 300,
          left: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.primary}12 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 200,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accent}10 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          padding: "100px 70px",
        }}
      >
        {/* Name with typing effect */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: COLORS.text,
            lineHeight: 1.1,
            marginBottom: 16,
            minHeight: 100,
          }}
        >
          {typedName}
          <Cursor visible={nameIsTyping} />
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: COLORS.primary,
            opacity: roleOpacity,
            transform: `translateY(${roleY}px)`,
            marginBottom: 50,
          }}
        >
          {role}
        </div>

        {/* Tagline with typing */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: COLORS.muted,
            lineHeight: 1.3,
            marginBottom: 70,
            minHeight: 140,
            maxWidth: 850,
          }}
        >
          {typedTagline}
          <Cursor visible={taglineIsTyping} />
        </div>

        {/* Credentials */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            marginBottom: 80,
          }}
        >
          {credentials.map((credential, index) => {
            const credStart = CREDENTIALS_START + index * CREDENTIAL_STAGGER;
            const credProgress = spring({
              frame: Math.max(0, frame - credStart),
              fps,
              config: { damping: 14, stiffness: 100 },
            });

            const credX = interpolate(credProgress, [0, 1], [60, 0]);
            const credOpacity = interpolate(credProgress, [0, 1], [0, 1]);

            // Check mark scale
            const checkScale = spring({
              frame: Math.max(0, frame - credStart - 5),
              fps,
              config: { damping: 8, stiffness: 150 },
            });

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  transform: `translateX(${credX}px)`,
                  opacity: credOpacity,
                }}
              >
                {/* Check mark */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: `${COLORS.accent}20`,
                    border: `2px solid ${COLORS.accent}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `scale(${checkScale})`,
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={COLORS.accent}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 500,
                    color: COLORS.text,
                  }}
                >
                  {credential}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA with neon glow */}
        <div
          style={{
            alignSelf: "center",
            opacity: ctaOpacity,
            transform: `scale(${ctaScale})`,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: COLORS.accent,
              textAlign: "center",
              padding: "24px 60px",
              borderRadius: 20,
              border: `3px solid ${COLORS.accent}`,
              background: `${COLORS.accent}10`,
              boxShadow: `
                0 0 ${20 + glowPulse * 30}px ${COLORS.accent}${Math.round(glowPulse * 60).toString(16).padStart(2, "0")},
                0 0 ${40 + glowPulse * 60}px ${COLORS.accent}${Math.round(glowPulse * 30).toString(16).padStart(2, "0")},
                inset 0 0 ${10 + glowPulse * 20}px ${COLORS.accent}${Math.round(glowPulse * 20).toString(16).padStart(2, "0")}
              `,
            }}
          >
            {cta}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
