import type { Metadata } from "next";
import {
  GraduationCap,
  Briefcase,
  Code,
  Scale,
  Globe,
  Award,
  BookOpen,
  Mic,
} from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre M\u00ed",
  description:
    "Luca Martino Acevedo - Abogado con mejor rendimiento acad\u00e9mico U. Mayor y Desarrollador Full Stack. Perfil h\u00edbrido \u00fanico en LegalTech Chile.",
};

const timeline = [
  {
    year: "2026",
    title: "Diplomados Especializados",
    description:
      "Protecci\u00f3n de Datos Personales (PUC) + Cumplimiento Normativo (TOP Compliance M\u00e9xico). Profundizando en las \u00e1reas de mayor demanda futura.",
    icon: GraduationCap,
  },
  {
    year: "2025-2026",
    title: "L\u00edder Legal Ops - Colombara Estrategia Legal",
    description:
      "Lidero la unidad de Legal Operations e innovaci\u00f3n. Automatizo procesos, implemento agentes IA y dise\u00f1o mejoras operacionales para equipos de litigaci\u00f3n.",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "INCUBA UC + Mejor Rendimiento + Ponencias",
    description:
      "Proyecto LegalTech seleccionado para INCUBA UC (Centro de Innovaci\u00f3n UC). Mejor rendimiento acad\u00e9mico en Derecho U. Mayor. Beca Barros y Err\u00e1zuriz. Ponente internacional.",
    icon: Award,
  },
  {
    year: "2023",
    title: "1er Lugar Innova Day + Deusto",
    description:
      "1er lugar en Innova Day, Legal Management Lab (PUCV). Intercambio en Derecho y TIC en la Universidad de Deusto, Espa\u00f1a.",
    icon: Globe,
  },
  {
    year: "2022-2023",
    title: "Desarrollo de Software + Derecho",
    description:
      "Combino ambos mundos: aprendo desarrollo web (React, Next.js, TypeScript, Python) mientras avanzo en la carrera de Derecho con las mejores notas de mi generaci\u00f3n.",
    icon: Code,
  },
];

const skills = {
  legal: [
    "Derecho Civil y Comercial",
    "Protecci\u00f3n de Datos (Ley 21.719)",
    "Compliance y Cumplimiento Normativo",
    "Legal Operations",
    "Propiedad Intelectual",
    "Derecho y Tecnolog\u00eda",
    "Ciberseguridad Legal",
    "Litigaci\u00f3n Civil",
  ],
  tech: [
    "TypeScript / JavaScript",
    "React / Next.js",
    "Python",
    "Node.js",
    "Supabase / PostgreSQL",
    "IA / LLMs / Agentes",
    "Automatizaci\u00f3n de Procesos",
    "APIs REST / Integraciones",
  ],
};

export default function SobreMiPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 grid-bg relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            Sobre M\u00ed
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Abogado que <span className="gradient-text">programa</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            No soy un desarrollador que no entiende el derecho, ni un abogado que
            solo &ldquo;sabe de tecnolog\u00eda&rdquo;. Soy ambos. Dise\u00f1o, construyo e implemento
            soluciones porque vivo en ambos mundos.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-text-primary mb-12 text-center">
            Trayectoria
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="ml-20 md:ml-0">
                    <span className="text-xs font-mono text-primary">{item.year}</span>
                    <h3 className="text-lg font-bold text-text-primary mt-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-bg-dark border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-text-primary mb-12 text-center">
            Doble expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-text-primary">Derecho</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.legal.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-text-secondary hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-bold text-text-primary">Tecnolog\u00eda</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tech.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-text-secondary hover:border-accent/30 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
