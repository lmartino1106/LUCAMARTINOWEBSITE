"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Automatizo estudios jur\u00eddicos con IA",
  "Construyo software legal a medida",
  "Implemento agentes de IA para abogados",
  "Dise\u00f1o embudos de captaci\u00f3n legal",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-success pulse-ring" />
            <span className="text-xs font-mono text-primary">
              Disponible para nuevos proyectos
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-text-primary">Luca Martino</span>
            <br />
            <span className="gradient-text">Abogado & Developer</span>
          </h1>

          {/* Typing effect */}
          <div className="h-8 flex items-center mb-8">
            <Terminal className="w-4 h-4 text-primary mr-2" />
            <span className="font-mono text-text-secondary">
              {displayed}
              <span className="text-primary animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-lg text-text-secondary leading-relaxed mb-10">
            Mejor rendimiento acad\u00e9mico en Derecho, U. Mayor. Proyecto LegalTech
            seleccionado para INCUBA UC. Ponente internacional sobre IA y Derecho.
            <span className="text-text-primary font-medium"> Combino derecho y c\u00f3digo para
            transformar la pr\u00e1ctica legal.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-all hover:gap-3"
            >
              Agenda tu Diagn\u00f3stico Gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="flex flex-col items-center">
              <Shield className="w-5 h-5 text-primary mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-text-primary">N\u00b01</span>
              <span className="text-xs text-text-muted mt-1">Rendimiento Acad\u00e9mico</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-5 h-5 text-accent mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-text-primary">INCUBA UC</span>
              <span className="text-xs text-text-muted mt-1">Proyecto Seleccionado</span>
            </div>
            <div className="flex flex-col items-center">
              <Terminal className="w-5 h-5 text-primary mb-2" />
              <span className="text-2xl md:text-3xl font-bold text-text-primary">Full Stack</span>
              <span className="text-xs text-text-muted mt-1">Abogado + Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
