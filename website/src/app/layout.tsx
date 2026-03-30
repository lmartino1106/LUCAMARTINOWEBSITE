import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import PageViewTracker from "@/components/PageViewTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
  alternates: {
    canonical: "https://lucamartino.cl",
  },
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
    <html lang="es-CL" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="-rlM85BNQ4CLPjblNWycEjgv6VssvdZyZo4h6x9MnEs" />
        <meta name="google-site-verification" content="-iIoUIYKVfmmZzznwtehVoacKPyu1Hy3vgaTr7xWwYI" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="min-h-screen antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K3BEGNSVF7"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-K3BEGNSVF7');`}
        </Script>
        <JsonLd />
        <PageViewTracker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
