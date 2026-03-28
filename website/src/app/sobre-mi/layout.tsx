import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Luca Martino Acevedo - Abogado con mejor rendimiento académico U. Mayor y Desarrollador Full Stack. Perfil híbrido único en LegalTech Chile.",
};

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
