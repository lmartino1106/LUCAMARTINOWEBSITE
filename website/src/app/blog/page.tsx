import type { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Art\u00edculos sobre LegalTech, automatizaci\u00f3n legal, IA para abogados y transformaci\u00f3n digital de estudios jur\u00eddicos.",
};

const posts = [
  {
    slug: "5-tareas-que-todo-abogado-deberia-automatizar",
    title: "5 tareas que todo abogado deber\u00eda automatizar hoy",
    excerpt:
      "Los abogados pierden hasta un 40% de su tiempo en tareas repetitivas. Aqu\u00ed te muestro cu\u00e1les puedes eliminar ahora mismo.",
    pillar: "Tutorial",
    date: "2026-03-28",
    readTime: "5 min",
  },
  {
    slug: "ley-21719-proteccion-datos-que-preparar",
    title: "Ley 21.719 de Datos Personales: lo que tu estudio debe preparar",
    excerpt:
      "La nueva ley de protecci\u00f3n de datos entra en vigencia en diciembre 2026. Esto es lo que necesitas saber y hacer.",
    pillar: "Educativo",
    date: "2026-03-31",
    readTime: "7 min",
  },
  {
    slug: "ia-para-redactar-escritos-judiciales",
    title: "C\u00f3mo usar IA para redactar el primer borrador de un escrito judicial",
    excerpt:
      "Gu\u00eda paso a paso para utilizar inteligencia artificial como herramienta de apoyo en la redacci\u00f3n legal.",
    pillar: "Tutorial",
    date: "2026-04-02",
    readTime: "8 min",
  },
  {
    slug: "abogado-del-futuro-usa-ia",
    title: "El abogado del futuro no compite contra la IA, la usa",
    excerpt:
      "Opini\u00f3n sobre el estado actual del mercado legal chileno y por qu\u00e9 la tecnolog\u00eda es una ventaja competitiva, no una amenaza.",
    pillar: "Opini\u00f3n",
    date: "2026-04-04",
    readTime: "4 min",
  },
];

const pillarColors: Record<string, string> = {
  Tutorial: "text-accent border-accent/30 bg-accent/5",
  Educativo: "text-primary border-primary/30 bg-primary/5",
  "Opini\u00f3n": "text-warning border-warning/30 bg-warning/5",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="py-20 grid-bg relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
              Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Derecho + <span className="gradient-text">Tecnolog\u00eda</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Art\u00edculos sobre LegalTech, automatizaci\u00f3n legal, IA para abogados
              y transformaci\u00f3n digital de estudios jur\u00eddicos.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-bg-card p-8 hover:border-primary/30 hover:bg-bg-card-hover transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      pillarColors[post.pillar] || "text-text-muted border-border"
                    }`}
                  >
                    {post.pillar.toUpperCase()}
                  </span>
                  <span className="text-xs text-text-muted">{post.date}</span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold group-hover:gap-2 transition-all">
                  Leer art\u00edculo <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
