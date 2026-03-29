export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luca Martino Acevedo",
    jobTitle: "Abogado & Desarrollador de Software",
    description:
      "Abogado con mejor rendimiento académico U. Mayor y Desarrollador Full Stack. Especialista en LegalTech, automatización legal e IA para abogados.",
    url: "https://lucamartino.cl",
    sameAs: [
      "https://www.linkedin.com/in/lucamartinoacevedo",
      "https://github.com/lmartino1106",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Universidad Mayor",
      },
      {
        "@type": "EducationalOrganization",
        name: "Universidad de Deusto",
      },
      {
        "@type": "EducationalOrganization",
        name: "Pontificia Universidad Católica de Chile",
      },
    ],
    knowsAbout: [
      "LegalTech",
      "Legal Operations",
      "Inteligencia Artificial",
      "Automatización Legal",
      "Protección de Datos",
      "Compliance",
      "Desarrollo Web",
      "Next.js",
      "TypeScript",
    ],
    award: [
      "Mejor rendimiento académico - Carrera de Derecho, U. Mayor",
      "Beca Barros y Errázuriz - Mención Honrosa 2024",
      "1er lugar Innova Day - Legal Management Lab, PUCV 2023",
      "Proyecto LegalTech seleccionado INCUBA UC 2024",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Luca Martino - Abogado & Servicios LegalTech",
    description:
      "Abogado litigante y desarrollador. Automatización legal, IA para abogados, asesoría legal, desarrollo web y software a medida para estudios jurídicos en Chile.",
    url: "https://lucamartino.cl/servicios",
    email: "contacto@lucamartino.cl",
    provider: {
      "@type": "Person",
      name: "Luca Martino Acevedo",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4489,
      longitude: -70.6693,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Santiago",
      },
      {
        "@type": "Country",
        name: "Chile",
      },
    ],
    serviceType: [
      "Asesoría Legal",
      "Litigación Civil",
      "Automatización de Procesos Legales",
      "Inteligencia Artificial para Abogados",
      "Desarrollo Web para Estudios Jurídicos",
      "Software a Medida Legal",
      "Protección de Datos Personales",
      "Compliance",
    ],
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
