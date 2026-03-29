"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// FLOATING CODE BLOCKS - Código escribiéndose en el fondo
// ============================================================
const codeSnippets = [
  {
    lines: [
      "const automatizarEstudio = async () => {",
      "  const documentos = await db.query(",
      '    "SELECT * FROM causas WHERE estado = $1",',
      '    ["pendiente"]',
      "  );",
      "  return documentos.map(generarEscrito);",
      "};",
    ],
    color: "#0ea5e9",
  },
  {
    lines: [
      "class AsistenteIA {",
      "  async analizarContrato(pdf: File) {",
      "    const texto = await this.ocr(pdf);",
      "    const riesgos = await this.detectar(",
      "      texto, clausulasProhibidas",
      "    );",
      "    return { riesgos, score: 0.94 };",
      "  }",
      "}",
    ],
    color: "#22d3ee",
  },
  {
    lines: [
      "// Automatización de plazos",
      "cron.schedule('0 8 * * 1-5', () => {",
      "  const vencimientos = getPlazos({",
      "    dias: 3,",
      "    tipo: 'judicial'",
      "  });",
      "  vencimientos.forEach(notificar);",
      "});",
    ],
    color: "#0ea5e9",
  },
  {
    lines: [
      "interface Causa {",
      "  rol: string;",
      "  tribunal: string;",
      "  cliente: Cliente;",
      "  estado: EstadoCausa;",
      "  plazos: Plazo[];",
      "  documentos: Documento[];",
      "}",
    ],
    color: "#94a3b8",
  },
];

function FloatingCode({
  snippet,
  style,
}: {
  snippet: (typeof codeSnippets)[0];
  style: React.CSSProperties;
}) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const totalLines = snippet.lines.length;
    if (visibleLines >= totalLines) {
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentLine = snippet.lines[visibleLines];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 30 + Math.random() * 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCharIndex(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, charIndex, snippet.lines]);

  return (
    <div
      className="absolute font-mono text-[10px] leading-relaxed opacity-[0.07] pointer-events-none select-none"
      style={style}
    >
      {snippet.lines.slice(0, visibleLines).map((line, i) => (
        <div key={i} style={{ color: snippet.color }}>
          {line}
        </div>
      ))}
      {visibleLines < snippet.lines.length && (
        <div style={{ color: snippet.color }}>
          {snippet.lines[visibleLines].slice(0, charIndex)}
          <span className="animate-pulse">|</span>
        </div>
      )}
    </div>
  );
}

// ============================================================
// PARTICLES - Partículas flotantes
// ============================================================
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function initParticles() {
      if (!canvas) return;
      particles = [];
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.05,
          color: Math.random() > 0.7 ? "#0ea5e9" : "#64748b",
        });
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color === "#0ea5e9"
            ? `rgba(14, 165, 233, ${p.opacity})`
            : `rgba(100, 116, 139, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ============================================================
// FLOATING TECH ICONS - Íconos tech flotando
// ============================================================
const techIcons = [
  // Balanza
  <svg key="scale" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18m-7-4l7-14 7 14M5 17h14"/></svg>,
  // Código
  <svg key="code" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Documento
  <svg key="doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  // Database
  <svg key="db" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  // Shield
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  // Terminal
  <svg key="term" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
  // AI Brain
  <svg key="ai" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/><line x1="9" y1="21" x2="15" y2="21"/></svg>,
];

function FloatingIcons() {
  return (
    <>
      {techIcons.map((icon, i) => {
        const top = 10 + ((i * 13) % 80);
        const left = 5 + ((i * 17 + 7) % 90);
        const duration = 15 + (i % 5) * 4;
        const delay = i * 1.5;

        return (
          <motion.div
            key={i}
            className="absolute w-6 h-6 text-primary/[0.06] pointer-events-none"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{
              y: [0, -20, 0, 15, 0],
              x: [0, 10, -5, 8, 0],
              rotate: [0, 5, -3, 4, 0],
              opacity: [0.04, 0.08, 0.04, 0.07, 0.04],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        );
      })}
    </>
  );
}

// ============================================================
// CIRCUIT LINES - Líneas de circuito animadas
// ============================================================
function CircuitLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Horizontal lines with traveling dots */}
      {[150, 300, 500, 650].map((y, i) => (
        <g key={`h-${i}`}>
          <line
            x1="0"
            y1={y}
            x2="1200"
            y2={y}
            stroke="#0ea5e9"
            strokeWidth="0.5"
            strokeDasharray="8 12"
          />
          <circle r="3" fill="#0ea5e9">
            <animateMotion
              dur={`${8 + i * 2}s`}
              repeatCount="indefinite"
              path={`M0,${y} L1200,${y}`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${8 + i * 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Vertical lines with traveling dots */}
      {[200, 450, 750, 1000].map((x, i) => (
        <g key={`v-${i}`}>
          <line
            x1={x}
            y1="0"
            x2={x}
            y2="800"
            stroke="#0ea5e9"
            strokeWidth="0.5"
            strokeDasharray="8 12"
          />
          <circle r="3" fill="#0ea5e9">
            <animateMotion
              dur={`${10 + i * 2}s`}
              repeatCount="indefinite"
              path={`M${x},0 L${x},800`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${10 + i * 2}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Junction nodes */}
      {[
        [200, 150],
        [450, 300],
        [750, 150],
        [200, 500],
        [1000, 500],
        [750, 650],
        [450, 650],
        [1000, 300],
      ].map(([cx, cy], i) => (
        <g key={`node-${i}`}>
          <circle cx={cx} cy={cy} r="4" fill="none" stroke="#0ea5e9" strokeWidth="1">
            <animate
              attributeName="r"
              values="3;6;3"
              dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={cx} cy={cy} r="1.5" fill="#0ea5e9" opacity="0.6" />
        </g>
      ))}
    </svg>
  );
}

// ============================================================
// SCANNING LINE - Línea de escaneo vertical
// ============================================================
function ScanLine() {
  return (
    <motion.div
      className="absolute top-0 w-px h-full pointer-events-none"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(14,165,233,0.15) 50%, transparent 100%)",
      }}
      animate={{ left: ["0%", "100%"] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[150px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[200px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Canvas particles with connections */}
      <Particles />

      {/* Circuit board lines */}
      <CircuitLines />

      {/* Scanning line */}
      <ScanLine />

      {/* Floating code blocks */}
      <FloatingCode
        snippet={codeSnippets[0]}
        style={{ top: "8%", left: "3%", transform: "rotate(-2deg)" }}
      />
      <FloatingCode
        snippet={codeSnippets[1]}
        style={{ top: "15%", right: "5%", transform: "rotate(1deg)" }}
      />
      <FloatingCode
        snippet={codeSnippets[2]}
        style={{ bottom: "20%", left: "8%", transform: "rotate(1deg)" }}
      />
      <FloatingCode
        snippet={codeSnippets[3]}
        style={{ bottom: "10%", right: "3%", transform: "rotate(-1deg)" }}
      />

      {/* Floating tech icons */}
      <FloatingIcons />
    </div>
  );
}
