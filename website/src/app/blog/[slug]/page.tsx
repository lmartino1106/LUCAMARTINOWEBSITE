import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, posts } from "@/lib/blog-data";
import BlogPostClient from "./BlogPostClient";

const pillarColors: Record<string, string> = {
  Tutorial: "text-accent border-accent/30 bg-accent/5",
  Educativo: "text-primary border-primary/30 bg-primary/5",
  "Opinión": "text-warning border-warning/30 bg-warning/5",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <div className="pt-24">
      <article className="py-20 grid-bg relative">
        <div className="absolute top-1/4 right-0 w-[400px] h-[300px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <BlogPostClient>
            <nav className="flex items-center gap-2 text-sm text-text-muted mb-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-text-secondary truncate">{post.title}</span>
            </nav>
          </BlogPostClient>

          {/* Header */}
          <BlogPostClient>
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    pillarColors[post.pillar] || "text-text-muted border-border"
                  }`}
                >
                  {post.pillar.toUpperCase()}
                </span>
                <span className="text-sm text-text-muted flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("es-CL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-sm text-text-muted flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-text-secondary">{post.excerpt}</p>
            </header>
          </BlogPostClient>

          {/* Content */}
          <BlogPostClient delay={0.1}>
            <div className="prose-blog">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </BlogPostClient>

          {/* Author */}
          <BlogPostClient delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  LM
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Luca Martino</p>
                  <p className="text-sm text-text-secondary">
                    Abogado & Developer — Automatización e IA Legal
                  </p>
                </div>
              </div>
            </div>
          </BlogPostClient>

          {/* Navigation */}
          <BlogPostClient delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="flex-1 group rounded-xl border border-border bg-bg-card p-4 hover:border-primary/30 transition-all"
                >
                  <span className="text-xs text-text-muted">← Anterior</span>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors mt-1">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="flex-1 group rounded-xl border border-border bg-bg-card p-4 hover:border-primary/30 transition-all text-right"
                >
                  <span className="text-xs text-text-muted">Siguiente →</span>
                  <p className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors mt-1">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </BlogPostClient>

          {/* Back to blog */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Ver todos los artículos
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
