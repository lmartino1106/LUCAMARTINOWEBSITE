import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Agenda tu Diagnóstico Digital Gratis",
  description:
    "Contacta a Luca Martino para automatizar tu estudio jurídico. Diagnóstico digital gratis de 30 minutos. Asesoría legal, IA para abogados y desarrollo de software.",
  keywords: [
    "contacto abogado legaltech",
    "diagnóstico digital abogados",
    "asesoría legal chile",
    "consulta automatización legal",
    "contactar abogado developer",
  ],
  openGraph: {
    title: "Contacto | Luca Martino",
    description:
      "Agenda tu diagnóstico digital gratis. Automatización e IA para tu estudio jurídico.",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
