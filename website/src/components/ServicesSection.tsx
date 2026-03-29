"use client";

import { Bot, FileCode, Globe, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const services = [
  {
    icon: Bot,
    title: "IA para Abogados",
    description:
      "Asistentes IA personalizados, análisis automatizado de documentos, redacción asistida de escritos y búsqueda inteligente de jurisprudencia.",
    features: ["Agentes IA personalizados", "Análisis de contratos", "Búsqueda jurisprudencial"],
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Automatización Legal",
    description:
      "Flujos de trabajo automatizados, generación de documentos, gestión de plazos y estandarización de procesos operativos.",
    features: ["Generación de documentos", "Alertas de plazos", "Flujos automatizados"],
    color: "accent",
  },
  {
    icon: Globe,
    title: "Web + Embudo Comercial",
    description:
      "Sitios web profesionales, landing pages, SEO local para abogados, formularios y sistemas de captación de clientes.",
    features: ["Sitio web profesional", "SEO para abogados", "Sistema de captación"],
    color: "primary",
  },
  {
    icon: FileCode,
    title: "Software a Medida",
    description:
      "Herramientas específicas para tu estudio: dashboards de causas, portales de cliente e integraciones con sistemas existentes.",
    features: ["Dashboard de causas", "Portal de clientes", "Integraciones"],
    color: "accent",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Soluciones que <span className="gradient-text">transforman</span> tu práctica
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            No soy un developer que no entiende el derecho. Soy abogado y programador.
            Diseño, construyo e implemento porque vivo en ambos mundos.
          </p>
        </AnimateOnScroll>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative rounded-2xl border border-border bg-bg-card p-8 hover:border-primary/30 hover:bg-bg-card-hover transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.08)] h-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    service.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-border text-text-muted group-hover:border-primary/20 group-hover:text-text-secondary transition-colors"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimateOnScroll className="text-center mt-12" delay={0.3}>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
          >
            Agenda un diagnóstico gratuito de 30 minutos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
