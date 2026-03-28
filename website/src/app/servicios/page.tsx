import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Automatizaci\u00f3n legal, IA para abogados, desarrollo web y software a medida para estudios jur\u00eddicos en Chile.",
};

const services = [
  {
    icon: Sparkles,
    badge: "GRATIS",
    title: "Diagn\u00f3stico Digital",
    description:
      "Sesi\u00f3n de 30 minutos donde identificamos procesos automatizables en tu estudio y te entregamos un informe con quick wins y roadmap.",
    includes: [
      "An\u00e1lisis de procesos actuales",
      "Identificaci\u00f3n de quick wins",
      "Roadmap de automatizaci\u00f3n",
      "Informe personalizado",
    ],
    cta: "Agendar Diagn\u00f3stico",
    highlight: true,
  },
  {
    icon: Bot,
    badge: "IA",
    title: "IA para Abogados",
    description:
      "Implementaci\u00f3n de asistentes IA personalizados que entienden tu pr\u00e1ctica legal y multiplican la capacidad de tu equipo.",
    includes: [
      "Asistentes IA personalizados",
      "An\u00e1lisis automatizado de documentos",
      "Redacci\u00f3n asistida de escritos",
      "B\u00fasqueda inteligente de jurisprudencia",
    ],
    cta: "Solicitar Cotizaci\u00f3n",
    highlight: false,
  },
  {
    icon: Wrench,
    badge: "AUTOMATIZACI\u00d3N",
    title: "Automatizaci\u00f3n de Procesos Legales",
    description:
      "Elimino las tareas repetitivas que le roban horas a tu equipo. Flujos automatizados que funcionan 24/7.",
    includes: [
      "Generaci\u00f3n autom\u00e1tica de documentos",
      "Gesti\u00f3n de plazos y alertas",
      "Flujos de trabajo automatizados",
      "Estandarizaci\u00f3n de procesos",
    ],
    cta: "Solicitar Cotizaci\u00f3n",
    highlight: false,
  },
  {
    icon: Globe,
    badge: "COMERCIAL",
    title: "Web + Embudo Comercial",
    description:
      "Tu estudio jur\u00eddico necesita una presencia web profesional y un sistema que convierta visitantes en clientes.",
    includes: [
      "Sitio web profesional",
      "Landing pages de captaci\u00f3n",
      "SEO local para abogados",
      "Integraci\u00f3n con CRM",
    ],
    cta: "Solicitar Cotizaci\u00f3n",
    highlight: false,
  },
  {
    icon: FileCode,
    badge: "DESARROLLO",
    title: "Software a Medida",
    description:
      "Herramientas espec\u00edficas para las necesidades \u00fanicas de tu estudio, construidas por alguien que entiende el derecho.",
    includes: [
      "Dashboards de gesti\u00f3n de causas",
      "Portales de cliente",
      "Integraciones con sistemas existentes",
      "Desarrollo de herramientas internas",
    ],
    cta: "Solicitar Cotizaci\u00f3n",
    highlight: false,
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 grid-bg relative">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            Servicios
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Tecnolog\u00eda que <span className="gradient-text">potencia</span> tu estudio
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Soluciones dise\u00f1adas por un abogado que programa. Entiendo tus problemas
            desde adentro y construyo las herramientas que los resuelven.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          {services.map((service) => (
            <div
              key={service.title}
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
          ))}
        </div>
      </section>
    </div>
  );
}
