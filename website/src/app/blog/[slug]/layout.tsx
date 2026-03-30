import type { Metadata } from "next";
import { posts } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "legaltech chile",
      "IA para abogados",
      "automatización legal",
      post.pillar.toLowerCase(),
      "luca martino",
    ],
    alternates: {
      canonical: `https://lucamartino.cl/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://lucamartino.cl/blog/${slug}`,
      publishedTime: post.date,
      authors: ["Luca Martino"],
      tags: [post.pillar, "LegalTech", "Chile"],
    },
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
