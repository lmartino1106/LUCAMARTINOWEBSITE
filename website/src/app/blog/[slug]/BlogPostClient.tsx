"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function BlogPostClient({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <AnimateOnScroll delay={delay}>{children}</AnimateOnScroll>;
}
