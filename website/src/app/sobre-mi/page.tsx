"use client";

import {
  GraduationCap,
  Briefcase,
  Code,
  Scale,
  Globe,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";

const timeline = [
  {
    year: "2026",
    title: "Diplomados Especializados",
    description:
      "Protección de Datos Personales (PUC) + Cumplimiento Normativo (TOP Compliance México). Profundizando en las áreas de mayor demanda futura.",
    icon: GraduationCap,
  },
  {
    year: "2025-2026",
    title: "Líder Legal Ops - Colombara Estrategia Legal",
    description:
      "Lidero la unidad de Legal Operations e innovación. Automatizo procesos, implemento agentes IA y diseño mejoras operacionales para equipos de litigación.",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "INCUBA UC + Mejor Rendimiento + Ponencias",
    description:
      "Proyecto LegalTech seleccionado para INCUBA UC (Centro de Innovación UC). Mejor rendimiento académico en Derecho U. Mayor. Beca Barros y Errázuriz. Ponente internacional.",
    icon: Award,
  },
  {
    year: "2023",
    title: "1er Lugar Innova Day + Deusto",
    description:
      "1er lugar en Innova Day, Legal Management Lab (PUCV). Intercambio en Derecho y TIC en la Universidad de Deusto, España.",
    icon: Globe,
  },
  {
    year: "2022-2023",
    title: "Desarrollo de Software + Derecho",
    description:
      "Combino ambos mundos: aprendo desarrollo web (React, Next.js, TypeScript, Python) mientras avanzo en la carrera de Derecho con las mejores notas de mi generación.",
    icon: Code,
  },
];

const skills = {
  legal: [
    "Derecho Civil y Comercial",
    "Protección de Datos (Ley 21.719)",
    "Compliance y Cumplimiento Normativo",
    "Legal Operations",
    "Propiedad Intelectual",
    "Derecho y Tecnología",
    "Ciberseguridad Legal",
    "Litigación Civil",
  ],
  tech: [
    "TypeScript / JavaScript",
    "React / Next.js",
    "Python",
    "Node.js",
    "Supabase / PostgreSQL",
    "IA / LLMs / Agentes",
    "Automatización de Procesos",
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
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block"
          >
            Sobre Mí
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
          >
            Abogado que <span className="gradient-text">programa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
          >
            No soy un desarrollador que no entiende el derecho, ni un abogado que
            solo "sabe de tecnología". Soy ambos. Diseño, construyo e implemento
            soluciones porque vivo en ambos mundos.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-text-primary mb-12 text-center">
              Trayectoria
            </h2>
          </AnimateOnScroll>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />
            {timeline.map((item, i) => (
              <AnimateOnScroll
                key={item.year}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.1}
              >
                <div
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
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-text-primary mb-12 text-center">
              Doble expertise
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll direction="left">
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
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <div className="rounded-2xl border border-border bg-bg-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-text-primary">Tecnología</h3>
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
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
