"use client";

import { Award, GraduationCap, Mic, BookOpen, Globe, Trophy } from "lucide-react";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const credentials = [
  {
    icon: Trophy,
    title: "Mejor Rendimiento Académico",
    subtitle: "Universidad Mayor - Carrera de Derecho",
    year: "2024",
  },
  {
    icon: Award,
    title: "Beca Barros y Errázuriz",
    subtitle: "Mención Honrosa",
    year: "2024",
  },
  {
    icon: GraduationCap,
    title: "INCUBA UC",
    subtitle: "Proyecto LegalTech seleccionado - Centro de Innovación UC",
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
    subtitle: "IA y ética en formación jurídica - U. de Chile, CIEPE",
    year: "2024",
  },
  {
    icon: BookOpen,
    title: "Artículo en Revista Indexada",
    subtitle: "IA en educación jurídica - Publicación académica",
    year: "2024",
  },
  {
    icon: Globe,
    title: "Intercambio Internacional",
    subtitle: "Derecho y TIC - Universidad de Deusto, España",
    year: "2023",
  },
  {
    icon: Award,
    title: "Diplomados en Curso",
    subtitle: "Protección de Datos (PUC) + Cumplimiento Normativo (TOP Compliance México)",
    year: "2026",
  },
];

export default function CredentialsSection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
            Credenciales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Respaldado por <span className="gradient-text">resultados</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            No solo hablo de innovación legal. La construyo, la publico y la presento
            en los escenarios más exigentes.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
          {credentials.map((cred) => (
            <StaggerItem key={cred.title}>
              <div className="group rounded-xl border border-border bg-bg-card p-6 hover:border-primary/30 hover:bg-bg-card-hover transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.06)] h-full">
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
