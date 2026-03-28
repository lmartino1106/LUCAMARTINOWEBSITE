"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";

const roles = [
  "Automatizo estudios jurídicos con IA",
  "Construyo software legal a medida",
  "Implemento agentes de IA para abogados",
  "Diseño embudos de captación legal",
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
      {/* Full tech animated background */}
      <TechBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-success pulse-ring" />
            <span className="text-xs font-mono text-primary">
              Disponible para nuevos proyectos
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-text-primary">Luca Martino</span>
            <br />
            <span className="gradient-text">Abogado & Developer</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="h-8 flex items-center mb-8"
          >
            <Terminal className="w-4 h-4 text-primary mr-2" />
            <span className="font-mono text-text-secondary">
              {displayed}
              <span className="text-primary animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-2xl text-lg text-text-secondary leading-relaxed mb-10"
          >
            Mejor rendimiento académico en Derecho, U. Mayor. Proyecto LegalTech
            seleccionado para INCUBA UC. Ponente internacional sobre IA y Derecho.
            <span className="text-text-primary font-medium"> Combino derecho y código para
            transformar la práctica legal.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-all hover:gap-3 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              Agenda tu Diagnóstico Gratis
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              Ver Servicios
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border"
          >
            {[
              { icon: Shield, value: "N°1", label: "Rendimiento Académico", color: "text-primary" },
              { icon: Zap, value: "INCUBA UC", label: "Proyecto Seleccionado", color: "text-accent" },
              { icon: Terminal, value: "Full Stack", label: "Abogado + Developer", color: "text-primary" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
                <span className="text-2xl md:text-3xl font-bold text-text-primary">{stat.value}</span>
                <span className="text-xs text-text-muted mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
