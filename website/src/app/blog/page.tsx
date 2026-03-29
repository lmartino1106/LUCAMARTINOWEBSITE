"use client";

import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";
import { posts } from "@/lib/blog-data";

const pillarColors: Record<string, string> = {
  Tutorial: "text-accent border-accent/30 bg-accent/5",
  Educativo: "text-primary border-primary/30 bg-primary/5",
  "Opinión": "text-warning border-warning/30 bg-warning/5",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="py-20 grid-bg relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4 block">
                Blog
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Derecho + <span className="gradient-text">Tecnología</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Artículos sobre LegalTech, automatización legal, IA para abogados
                y transformación digital de estudios jurídicos.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerContainer className="space-y-6">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <article
                    className="group rounded-2xl border border-border bg-bg-card p-8 hover:border-primary/30 hover:bg-bg-card-hover transition-all cursor-pointer"
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
                      Leer artículo <ArrowRight className="w-4 h-4" />
                    </span>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
