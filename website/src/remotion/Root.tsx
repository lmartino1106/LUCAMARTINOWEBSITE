/* eslint-disable @typescript-eslint/no-explicit-any */
import { Composition } from "remotion";
import { ReelEducativo } from "./templates/ReelEducativo";
import { CarruselAnimado } from "./templates/CarruselAnimado";
import { VideoPresentacion } from "./templates/VideoPresentacion";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ReelEducativo"
        component={ReelEducativo as any}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "5 tareas que todo abogado debería automatizar",
          points: [
            "Seguimiento de plazos",
            "Redacción de escritos",
            "Búsqueda de jurisprudencia",
            "Reportes a clientes",
            "Gestión de documentos",
          ],
          authorName: "Luca Martino",
          authorTitle: "Abogado & Developer",
        }}
      />
      <Composition
        id="CarruselAnimado"
        component={CarruselAnimado as any}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          slides: [
            { title: "3 Herramientas de IA", subtitle: "que uso todos los días en mis litigios" },
            { title: "Claude AI", subtitle: "Análisis de expedientes completos con 200K tokens de contexto" },
            { title: "Magnar AI", subtitle: "Validación de normas y jurisprudencia chilena actualizada" },
            { title: "Sistema RAG propio", subtitle: "Búsqueda semántica sobre mi base de normas" },
            { title: "¿Cuál vas a probar?", subtitle: "lucamartino.cl | @lucamartino" },
          ],
        }}
      />
      <Composition
        id="VideoPresentacion"
        component={VideoPresentacion as any}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          name: "Luca Martino",
          role: "Abogado & Developer",
          tagline: "Automatizo estudios jurídicos con IA",
          credentials: [
            "Mejor rendimiento académico U. Mayor",
            "Proyecto INCUBA UC",
            "Ponente internacional IA y Derecho",
          ],
          cta: "lucamartino.cl",
        }}
      />
    </>
  );
};
