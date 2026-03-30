import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Artículos sobre LegalTech, IA y Automatización Legal",
  description:
    "Artículos sobre tecnología legal, inteligencia artificial para abogados, automatización de procesos legales, protección de datos y compliance en Chile.",
  keywords: [
    "blog legaltech",
    "artículos automatización legal",
    "IA abogados chile",
    "protección datos chile",
    "compliance chile",
    "tecnología jurídica",
    "innovación legal chile",
  ],
  alternates: {
    canonical: "https://lucamartino.cl/blog",
  },
  openGraph: {
    title: "Blog LegalTech | Luca Martino",
    description:
      "Artículos sobre IA, automatización y tecnología para abogados en Chile.",
    url: "https://lucamartino.cl/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
