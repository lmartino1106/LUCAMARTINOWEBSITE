"use client";

import { Award, GraduationCap, Mic, BookOpen, Globe, Trophy } from "lucide-react";

const credentials = [
  {
    icon: Trophy,
    title: "Mejor Rendimiento Acad\u00e9mico",
    subtitle: "Universidad Mayor - Carrera de Derecho",
    year: "2024",
  },
  {
    icon: Award,
    title: "Beca Barros y Err\u00e1zuriz",
    subtitle: "Menci\u00f3n Honrosa",
    year: "2024",
  },
  {
    icon: GraduationCap,
    title: "INCUBA UC",
    subtitle: "Proyecto LegalTech seleccionado - Centro de Innovaci\u00f3n UC",
    year: "2024",
  },
  {
    icon: Trophy,
    title: "1er Lugar Innova Day",
    subtitle: "Legal Management Lab - PUCV",
    year: "2023",
  },
  {
    icon: Mic,
    title: "Ponente Internacional",
    subtitle: "IA y \u00e9tica en formaci\u00f3n jur\u00eddica - U. de Chile, CIEPE",
    year: "2024",
  },
  {
    icon: BookOpen,
    title: "Art\u00edculo en Revista Indexada",
    subtitle: "IA en educaci\u00f3n jur\u00eddica - Publicaci\u00f3n acad\u00e9mica",
    year: "2024",
  },
  {
    icon: Globe,
    title: "Intercambio Internacional",
    subtitle: "Derecho y TIC - Universidad de Deusto, Espa\u00f1a",
    year: "2023",
  },
  {
    icon: Award,
    title: "Diplomados en Curso",
    subtitle: "Protecci\u00f3n de Datos (PUC) + Cumplimiento Normativo (TOP Compliance M\u00e9xico)",
    year: "2026",
  },
];

export default function CredentialsSection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            Credenciales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Respaldado por <span className="gradient-text">resultados</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            No solo hablo de innovaci\u00f3n legal. La construyo, la publico y la presento
            en los escenarios m\u00e1s exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="group rounded-xl border border-border bg-bg-card p-6 hover:border-primary/30 hover:bg-bg-card-hover transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <cred.icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-mono text-text-muted">{cred.year}</span>
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">
                {cred.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {cred.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
