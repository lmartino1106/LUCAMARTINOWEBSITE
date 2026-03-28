"use client";

import {
  Bot,
  Wrench,
  Globe,
  FileCode,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import AnimateOnScroll, {
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimateOnScroll";

const services = [
  {
    icon: Sparkles,
    badge: "GRATIS",
    title: "Diagnóstico Digital",
    description:
      "Sesión de 30 minutos donde identificamos procesos automatizables en tu estudio y te entregamos un informe con quick wins y roadmap.",
    includes: [
      "Análisis de procesos actuales",
      "Identificación de quick wins",
      "Roadmap de automatización",
      "Informe personalizado",
    ],
    cta: "Agendar Diagnóstico",
    highlight: true,
  },
  {
    icon: Bot,
    badge: "IA",
    title: "IA para Abogados",
    description:
      "Implementación de asistentes IA personalizados que entienden tu práctica legal y multiplican la capacidad de tu equipo.",
    includes: [
      "Asistentes IA personalizados",
      "Análisis automatizado de documentos",
      "Redacción asistida de escritos",
      "Búsqueda inteligente de jurisprudencia",
    ],
    cta: "Solicitar Cotización",
    highlight: false,
  },
  {
    icon: Wrench,
    badge: "AUTOMATIZACIÓN",
    title: "Automatización de Procesos Legales",
    description:
      "Elimino las tareas repetitivas que le roban horas a tu equipo. Flujos automatizados que funcionan 24/7.",
    includes: [
      "Generación automática de documentos",
      "Gestión de plazos y alertas",
      "Flujos de trabajo automatizados",
      "Estandarización de procesos",
    ],
    cta: "Solicitar Cotización",
    highlight: false,
  },
  {
    icon: Globe,
    badge: "COMERCIAL",
    title: "Web + Embudo Comercial",
    description:
      "Tu estudio jurídico necesita una presencia web profesional y un sistema que convierta visitantes en clientes.",
    includes: [
      "Sitio web profesional",
      "Landing pages de captación",
      "SEO local para abogados",
      "Integración con CRM",
    ],
    cta: "Solicitar Cotización",
    highlight: false,
  },
  {
    icon: FileCode,
    badge: "DESARROLLO",
    title: "Software a Medida",
    description:
      "Herramientas específicas para las necesidades únicas de tu estudio, construidas por alguien que entiende el derecho.",
    includes: [
      "Dashboards de gestión de causas",
      "Portales de cliente",
      "Integraciones con sistemas existentes",
      "Desarrollo de herramientas internas",
    ],
    cta: "Solicitar Cotización",
    highlight: false,
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 grid-bg relative">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
        <AnimateOnScroll>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
              Servicios
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Tecnología que <span className="gradient-text">potencia</span> tu estudio
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Soluciones diseñadas por un abogado que programa. Entiendo tus problemas
              desde adentro y construyo las herramientas que los resuelven.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Services */}
      <section className="py-20">
        <StaggerContainer className="mx-auto max-w-5xl px-6 space-y-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div
                className={`rounded-2xl border p-8 md:p-10 transition-all ${
                  service.highlight
                    ? "border-primary/40 bg-primary/5 glow-blue"
                    : "border-border bg-bg-card hover:border-primary/20"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          service.highlight
                            ? "bg-primary/20 text-primary"
                            : "bg-bg-card-hover text-primary"
                        }`}
                      >
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded ${
                          service.highlight
                            ? "bg-primary/20 text-primary"
                            : "bg-border text-text-muted"
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
                      Incluye
                    </h4>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contacto"
                      className={`group inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-colors ${
                        service.highlight
                          ? "text-primary hover:text-accent"
                          : "text-text-secondary hover:text-primary"
                      }`}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
