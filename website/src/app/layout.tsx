import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucamartino.cl"),
  title: {
    default: "Luca Martino | Abogado & Developer - Automatización e IA Legal",
    template: "%s | Luca Martino",
  },
  description:
    "Abogado y Desarrollador. Automatizo estudios jurídicos con IA, construyo software legal y diseño embudos de captación. Mejor rendimiento académico U. Mayor. Proyecto INCUBA UC.",
  keywords: [
    "abogado chile",
    "abogado santiago",
    "abogado litigante chile",
    "abogado litigante santiago",
    "asesoría legal chile",
    "legaltech chile",
    "automatización legal",
    "IA para abogados",
    "legal ops",
    "innovación legal",
    "software jurídico",
    "luca martino",
    "luca martino abogado",
    "abogado developer",
    "abogado programador",
    "protección de datos chile",
    "compliance chile",
    "abogado tecnología",
    "abogado inteligencia artificial",
    "estudio jurídico santiago",
  ],
  authors: [{ name: "Luca Martino Acevedo" }],
  creator: "Luca Martino Acevedo",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://lucamartino.cl",
    siteName: "Luca Martino | Abogado & Developer",
    title: "Luca Martino | Abogado & Developer - Automatización e IA Legal",
    description:
      "Abogado y Desarrollador. Automatizo estudios jurídicos con IA. Mejor rendimiento académico U. Mayor. Proyecto INCUBA UC.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Martino | Abogado & Developer",
    description: "Automatizo estudios jurídicos con IA. Abogado + Programador.",
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
        <meta name="google-site-verification" content="-rlM85BNQ4CLPjblNWycEjgv6VssvdZyZo4h6x9MnEs" />
        <meta name="google-site-verification" content="-iIoUIYKVfmmZzznwtehVoacKPyu1Hy3vgaTr7xWwYI" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K3BEGNSVF7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-K3BEGNSVF7');`,
          }}
        />
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
