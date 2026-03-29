import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí - Abogado Litigante & Desarrollador Full Stack",
  description:
    "Luca Martino Acevedo: abogado litigante en Colombara Estrategia Legal, mejor rendimiento académico U. Mayor, proyecto INCUBA UC. Especialista en litigación civil, fraude Ley 20.009 y LegalTech.",
  keywords: [
    "luca martino abogado",
    "abogado litigante santiago",
    "abogado developer chile",
    "legaltech chile",
    "colombara estrategia legal",
    "abogado innovación",
    "mejor rendimiento derecho u mayor",
  ],
  openGraph: {
    title: "Luca Martino | Abogado & Developer",
    description:
      "Abogado litigante y desarrollador full stack. Mejor rendimiento académico U. Mayor. Proyecto INCUBA UC.",
  },
};

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
