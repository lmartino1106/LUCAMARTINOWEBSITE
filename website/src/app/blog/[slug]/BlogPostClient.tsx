"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPostClient({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <AnimateOnScroll delay={delay}>{children}</AnimateOnScroll>;
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <AnimateOnScroll delay={0.1}>
      <div className="prose-blog">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </AnimateOnScroll>
  );
}
