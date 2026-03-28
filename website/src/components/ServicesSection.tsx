"use client";

import { Bot, FileCode, Globe, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Bot,
    title: "IA para Abogados",
    description:
      "Asistentes IA personalizados, an\u00e1lisis automatizado de documentos, redacci\u00f3n asistida de escritos y b\u00fasqueda inteligente de jurisprudencia.",
    features: ["Agentes IA personalizados", "An\u00e1lisis de contratos", "B\u00fasqueda jurisprudencial"],
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Automatizaci\u00f3n Legal",
    description:
      "Flujos de trabajo automatizados, generaci\u00f3n de documentos, gesti\u00f3n de plazos y estandarizaci\u00f3n de procesos operativos.",
    features: ["Generaci\u00f3n de documentos", "Alertas de plazos", "Flujos automatizados"],
    color: "accent",
  },
  {
    icon: Globe,
    title: "Web + Embudo Comercial",
    description:
      "Sitios web profesionales, landing pages, SEO local para abogados, formularios y sistemas de captaci\u00f3n de clientes.",
    features: ["Sitio web profesional", "SEO para abogados", "Sistema de captaci\u00f3n"],
    color: "primary",
  },
  {
    icon: FileCode,
    title: "Software a Medida",
    description:
      "Herramientas espec\u00edficas para tu estudio: dashboards de causas, portales de cliente e integraciones con sistemas existentes.",
    features: ["Dashboard de causas", "Portal de clientes", "Integraciones"],
    color: "accent",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Soluciones que <span className="gradient-text">transforman</span> tu pr\u00e1ctica
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            No soy un developer que no entiende el derecho. Soy abogado y programador.
            Dise\u00f1o, construyo e implemento porque vivo en ambos mundos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-bg-card p-8 hover:border-primary/30 hover:bg-bg-card-hover transition-all duration-300"
            >
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
                    className="text-xs font-mono px-3 py-1 rounded-full border border-border text-text-muted"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
          >
            Agenda un diagn\u00f3stico gratuito de 30 minutos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
