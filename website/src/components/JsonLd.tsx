export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luca Martino Acevedo",
    jobTitle: "Abogado & Desarrollador de Software",
    description:
      "Abogado con mejor rendimiento acad\u00e9mico U. Mayor y Desarrollador Full Stack. Especialista en LegalTech, automatizaci\u00f3n legal e IA para abogados.",
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
        name: "Pontificia Universidad Cat\u00f3lica de Chile",
      },
    ],
    knowsAbout: [
      "LegalTech",
      "Legal Operations",
      "Inteligencia Artificial",
      "Automatizaci\u00f3n Legal",
      "Protecci\u00f3n de Datos",
      "Compliance",
      "Desarrollo Web",
      "Next.js",
      "TypeScript",
    ],
    award: [
      "Mejor rendimiento acad\u00e9mico - Carrera de Derecho, U. Mayor",
      "Beca Barros y Err\u00e1zuriz - Menci\u00f3n Honrosa 2024",
      "1er lugar Innova Day - Legal Management Lab, PUCV 2023",
      "Proyecto LegalTech seleccionado INCUBA UC 2024",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Luca Martino - Servicios LegalTech",
    description:
      "Automatizaci\u00f3n legal, IA para abogados, desarrollo web y software a medida para estudios jur\u00eddicos en Chile.",
    url: "https://lucamartino.cl/servicios",
    provider: {
      "@type": "Person",
      name: "Luca Martino Acevedo",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    serviceType: [
      "Automatizaci\u00f3n de Procesos Legales",
      "Inteligencia Artificial para Abogados",
      "Desarrollo Web para Estudios Jur\u00eddicos",
      "Software a Medida Legal",
    ],
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
