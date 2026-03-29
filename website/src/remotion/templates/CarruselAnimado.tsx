import React from "react";
import {
  AbsoluteFill,
  Sequence,
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

const FRAMES_PER_SLIDE = 90;
const TRANSITION_FRAMES = 15;

export interface CarruselSlide {
  title: string;
  subtitle: string;
}

export interface CarruselAnimadoProps {
  slides: CarruselSlide[];
}

const Slide: React.FC<{
  slide: CarruselSlide;
  index: number;
  total: number;
  isCover: boolean;
  isCta: boolean;
}> = ({ slide, index, total, isCover, isCta }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in
  const fadeIn = interpolate(frame, [0, TRANSITION_FRAMES], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out
  const fadeOut = interpolate(
    frame,
    [FRAMES_PER_SLIDE - TRANSITION_FRAMES, FRAMES_PER_SLIDE],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = Math.min(fadeIn, fadeOut);

  // Scale transition
  const scaleIn = interpolate(frame, [0, TRANSITION_FRAMES], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scaleOut = interpolate(
    frame,
    [FRAMES_PER_SLIDE - TRANSITION_FRAMES, FRAMES_PER_SLIDE],
    [1, 1.05],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scale = frame < FRAMES_PER_SLIDE / 2 ? scaleIn : scaleOut;

  // Title spring
  const titleSpring = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const titleY = interpolate(titleSpring, [0, 1], [40, 0]);

  // Subtitle spring
  const subtitleSpring = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  const subtitleY = interpolate(subtitleSpring, [0, 1], [30, 0]);
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bg,
        fontFamily: "Inter, system-ui, sans-serif",
        opacity,
        transform: `scale(${scale})`,
        overflow: "hidden",
      }}
    >
      {/* Gradient accents */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.primary}20 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accent}18 0%, transparent 70%)`,
        }}
      />

      {/* Slide number top-right */}
      {!isCover && !isCta && (
        <div
          style={{
            position: "absolute",
            top: 50,
            right: 60,
            fontSize: 36,
            fontWeight: 700,
            color: COLORS.muted,
          }}
        >
          {index + 1}/{total}
        </div>
      )}

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "80px 70px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            fontSize: isCover ? 80 : isCta ? 72 : 68,
            fontWeight: 800,
            color: COLORS.text,
            lineHeight: 1.2,
            marginBottom: 30,
          }}
        >
          {slide.title}
        </div>

        <div
          style={{
            transform: `translateY(${subtitleY}px)`,
            opacity: subtitleOpacity,
            fontSize: isCover ? 44 : 40,
            fontWeight: 400,
            color: isCta ? COLORS.accent : COLORS.muted,
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          {slide.subtitle}
        </div>

        {/* Decorative line for cover */}
        {isCover && (
          <div
            style={{
              marginTop: 40,
              width: 120,
              height: 4,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
              opacity: subtitleOpacity,
            }}
          />
        )}
      </div>

      {/* Dot indicators at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? 32 : 12,
              height: 12,
              borderRadius: 6,
              backgroundColor:
                i === index ? COLORS.accent : `${COLORS.border}`,
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

export const CarruselAnimado: React.FC<CarruselAnimadoProps> = ({
  slides,
}) => {
  return (
    <AbsoluteFill>
      {slides.map((slide, index) => (
        <Sequence
          key={index}
          from={index * FRAMES_PER_SLIDE}
          durationInFrames={FRAMES_PER_SLIDE}
        >
          <Slide
            slide={slide}
            index={index}
            total={slides.length}
            isCover={index === 0}
            isCta={index === slides.length - 1}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
