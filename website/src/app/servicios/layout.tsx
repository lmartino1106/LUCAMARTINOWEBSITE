import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios LegalTech - Automatización, IA y Software para Abogados",
  description:
    "Servicios de automatización legal, inteligencia artificial para abogados, desarrollo web y software a medida para estudios jurídicos en Chile. Diagnóstico digital gratis.",
  keywords: [
    "servicios legaltech chile",
    "automatización legal",
    "IA para abogados",
    "software jurídico chile",
    "web para abogados",
    "embudo comercial abogados",
    "diagnóstico digital estudio jurídico",
  ],
  openGraph: {
    title: "Servicios LegalTech | Luca Martino",
    description:
      "Automatización, IA y software para estudios jurídicos. Diagnóstico digital gratis.",
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
