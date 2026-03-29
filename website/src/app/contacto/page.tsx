"use client";

import { useState } from "react";
import { Send, Mail, Clock, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const serviceOptions = [
  "Diagnóstico Digital (Gratis)",
  "Asesoría Legal",
  "IA para Abogados",
  "Automatización de Procesos Legales",
  "Web + Embudo Comercial",
  "Software a Medida",
  "Otro",
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-24">
      <section className="py-20 grid-bg relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
                Contacto
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Hablemos de tu <span className="gradient-text">proyecto</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Agenda un diagnóstico gratuito de 30 minutos o cuéntame sobre tu
                proyecto. Respondo en menos de 24 horas.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimateOnScroll direction="left" className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-bg-card p-8 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="+56 9 XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                      Estudio / Empresa
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="Nombre del estudio"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                    Servicio de interés
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Seleccionar servicio</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto o qué necesitas automatizar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    "Enviando..."
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Mensaje enviado
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Enviar Mensaje
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    Error al enviar. Inténtalo de nuevo o escríbeme directamente.
                  </p>
                )}
              </form>
            </AnimateOnScroll>

            {/* Sidebar */}
            <AnimateOnScroll direction="right" delay={0.2} className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  Diagnóstico Gratuito
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  30 minutos donde analizamos tu estudio, identificamos 2-3 quick wins
                  y diseñamos un roadmap de mejora.
                </p>
                <ul className="space-y-2">
                  {[
                    "Análisis de procesos actuales",
                    "Quick wins inmediatos",
                    "Roadmap personalizado",
                    "Sin compromiso",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-3 h-3 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-bg-card p-8">
                <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wider">
                  Contacto directo
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contacto@lucamartino.cl"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    contacto@lucamartino.cl
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lucamartinoacevedo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    linkedin.com/in/lucamartinoacevedo
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
