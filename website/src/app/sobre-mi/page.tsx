"use client";

import Image from "next/image";
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
    title: "Abogado Litigante & Legal Ops Lead - Colombara Estrategia Legal",
    description:
      "Litigo causas complejas (fraude Ley 20.009, responsabilidad civil, consumidor) y lidero Legal Operations. Gestiono +500 causas activas, construyo dashboards internos, implemento agentes IA y automatizo generación de escritos y contratos.",
    icon: Briefcase,
  },
  {
    year: "2024",
    title: "INCUBA UC + Mejor Rendimiento + Ponencias",
    description:
      "Proyecto LegalTech seleccionado para INCUBA UC (Centro de Innovación UC Anacleto Angelini). Mejor rendimiento académico en Derecho U. Mayor. Beca Barros y Errázuriz. Ponente internacional sobre IA y ética en formación jurídica (U. de Chile, CIEPE). Artículo publicado en revista indexada.",
    icon: Award,
  },
  {
    year: "2023-2024",
    title: "1er Lugar Innova Day + Deusto + Moot Court",
    description:
      "1er lugar en Innova Day, Legal Management Lab (PUCV). Intercambio en Derecho y TIC en la Universidad de Deusto, España. Organizador del Primer Moot Court Internacional en Tecnología y Derecho.",
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
    "Litigación Civil Compleja",
    "Fraude (Ley 20.009)",
    "Responsabilidad Civil",
    "Derecho del Consumidor",
    "Protección de Datos (Ley 21.719)",
    "Compliance y Cumplimiento Normativo",
    "Legal Operations",
    "Ciberseguridad Legal",
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
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 text-center md:text-left">
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
                className="text-lg text-text-secondary leading-relaxed"
              >
                No soy un desarrollador que no entiende el derecho, ni un abogado que
                solo "sabe de tecnología". Soy ambos. Diseño, construyo e implemento
                soluciones porque vivo en ambos mundos.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl" />
                <Image
                  src="/luca-photo.jpg"
                  alt="Luca Martino Acevedo"
                  width={280}
                  height={350}
                  className="relative rounded-xl border border-primary/20 object-cover shadow-[0_0_40px_rgba(14,165,233,0.1)]"
                />
              </div>
            </motion.div>
          </div>
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
