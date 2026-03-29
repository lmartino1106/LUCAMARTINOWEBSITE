"use client";

import Link from "next/link";
import Image from "next/image";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col items-start text-left">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
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
              className="max-w-xl text-lg text-text-secondary leading-relaxed mb-10"
            >
              Abogado litigante en Colombara Estrategia Legal. Mejor rendimiento académico
              en Derecho, U. Mayor. Proyecto LegalTech seleccionado para INCUBA UC.
              Ponente internacional sobre IA y Derecho.
              <span className="text-text-primary font-medium"> Litigo causas complejas y construyo
              las herramientas que transforman la práctica legal.</span>
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
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-all hover:gap-3 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
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
          </div>

          {/* Right: Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative group">
              {/* Animated neon glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] opacity-75 blur-lg" />
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl animate-pulse" />

              {/* Neon border frame */}
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] animate-[shimmer_3s_linear_infinite]">
                <div className="rounded-2xl overflow-hidden bg-bg-dark">
                  <Image
                    src="/luca-photo.jpg"
                    alt="Luca Martino Acevedo - Abogado & Developer"
                    width={450}
                    height={550}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg" />

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-bg-dark/90 border border-primary/40 rounded-xl px-4 py-2 backdrop-blur-sm shadow-[0_0_20px_rgba(14,165,233,0.2)]">
                <span className="text-xs font-mono text-primary">Abogado + Full Stack Dev</span>
              </div>
            </div>
          </motion.div>
        </div>

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
    </section>
  );
}
