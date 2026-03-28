import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucamartino.cl"),
  title: {
    default: "Luca Martino | Abogado & Developer - Automatizaci\u00f3n e IA Legal",
    template: "%s | Luca Martino",
  },
  description:
    "Abogado y Desarrollador. Automatizo estudios jur\u00eddicos con IA, construyo software legal y dise\u00f1o embudos de captaci\u00f3n. Mejor rendimiento acad\u00e9mico U. Mayor. Proyecto INCUBA UC.",
  keywords: [
    "abogado chile",
    "legaltech chile",
    "automatizaci\u00f3n legal",
    "IA para abogados",
    "legal ops",
    "innovaci\u00f3n legal",
    "software jur\u00eddico",
    "luca martino",
    "abogado developer",
    "protecci\u00f3n de datos chile",
    "compliance chile",
  ],
  authors: [{ name: "Luca Martino Acevedo" }],
  creator: "Luca Martino Acevedo",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://lucamartino.cl",
    siteName: "Luca Martino | Abogado & Developer",
    title: "Luca Martino | Abogado & Developer - Automatizaci\u00f3n e IA Legal",
    description:
      "Abogado y Desarrollador. Automatizo estudios jur\u00eddicos con IA. Mejor rendimiento acad\u00e9mico U. Mayor. Proyecto INCUBA UC.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luca Martino - Abogado & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Martino | Abogado & Developer",
    description: "Automatizo estudios jur\u00eddicos con IA. Abogado + Programador.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
