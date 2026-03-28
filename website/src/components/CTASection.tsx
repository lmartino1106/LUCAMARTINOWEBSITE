import Link from "next/link";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
          <Clock className="w-3 h-3 text-primary" />
          <span className="text-xs font-mono text-primary">30 minutos gratis</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
          \u00bfListo para <span className="gradient-text">transformar</span> tu
          pr\u00e1ctica legal?
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
          Agenda una sesi\u00f3n de diagn\u00f3stico gratuita. En 30 minutos identificaremos
          las oportunidades de automatizaci\u00f3n e IA m\u00e1s impactantes para tu estudio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {["Identificamos procesos automatizables", "Quick wins inmediatos", "Roadmap personalizado"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm text-text-secondary">{item}</span>
            </div>
          ))}
        </div>

        <Link
          href="/contacto"
          className="group inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-all hover:gap-3 glow-blue"
        >
          Agendar Diagn\u00f3stico Gratuito
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
