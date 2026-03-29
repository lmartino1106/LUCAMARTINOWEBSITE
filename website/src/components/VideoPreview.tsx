"use client";

import { Player } from "@remotion/player";
import { ReelEducativo, type ReelEducativoProps } from "@/remotion/templates/ReelEducativo";
import { CarruselAnimado, type CarruselAnimadoProps } from "@/remotion/templates/CarruselAnimado";
import { VideoPresentacion, type VideoPresentacionProps } from "@/remotion/templates/VideoPresentacion";
import { useState } from "react";
import { Download, Play, RefreshCw } from "lucide-react";

type ContentType = "reel" | "carrusel" | "post" | "presentacion";

interface VideoPreviewProps {
  type: ContentType;
  content: Record<string, unknown>;
}

function mapContentToProps(type: ContentType, content: Record<string, unknown>) {
  switch (type) {
    case "reel":
      return {
        component: ReelEducativo,
        props: {
          title: (content.title as string) || "",
          points: (content.points as string[]) || [],
          authorName: "Luca Martino",
          authorTitle: "Abogado & Developer",
        } as ReelEducativoProps,
        width: 1080,
        height: 1920,
        durationInFrames: 300,
        compositionId: "ReelEducativo",
      };
    case "carrusel":
      return {
        component: CarruselAnimado,
        props: {
          slides: (content.slides as { title: string; subtitle: string }[]) || [],
        } as CarruselAnimadoProps,
        width: 1080,
        height: 1080,
        durationInFrames: 450,
        compositionId: "CarruselAnimado",
      };
    case "presentacion":
      return {
        component: VideoPresentacion,
        props: {
          name: "Luca Martino",
          role: "Abogado & Developer",
          tagline: (content.tagline as string) || "",
          credentials: (content.credentials as string[]) || [],
          cta: (content.cta as string) || "lucamartino.cl",
        } as VideoPresentacionProps,
        width: 1080,
        height: 1920,
        durationInFrames: 360,
        compositionId: "VideoPresentacion",
      };
    default:
      return null;
  }
}

export default function VideoPreview({ type, content }: VideoPreviewProps) {
  const [rendering, setRendering] = useState(false);
  const [renderUrl, setRenderUrl] = useState<string | null>(null);

  const config = mapContentToProps(type, content);

  if (!config || type === "post") return null;

  const isVertical = config.height > config.width;
  const previewHeight = isVertical ? 500 : 300;
  const previewWidth = isVertical ? Math.round(500 * (config.width / config.height)) : 300;

  async function handleRender() {
    setRendering(true);
    setRenderUrl(null);
    try {
      const res = await fetch("/api/content/render", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          compositionId: config!.compositionId,
          props: config!.props,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setRenderUrl(data.url);
      }
    } catch (err) {
      console.error("Render error:", err);
    }
    setRendering(false);
  }

  return (
    <div className="rounded-xl border border-border bg-bg-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <Play className="w-5 h-5 text-primary" /> Preview del Video
        </h3>
        <div className="flex gap-2">
          <button
            onClick={handleRender}
            disabled={rendering}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {rendering ? (
              <><RefreshCw className="w-4 h-4 animate-spin" /> Renderizando...</>
            ) : (
              <><Download className="w-4 h-4" /> Exportar MP4</>
            )}
          </button>
        </div>
      </div>

      {/* Player */}
      <div className="flex justify-center bg-bg-dark rounded-lg p-4">
        <Player
          component={config.component as unknown as React.ComponentType<Record<string, unknown>>}
          inputProps={config.props as unknown as Record<string, unknown>}
          durationInFrames={config.durationInFrames}
          fps={30}
          compositionWidth={config.width}
          compositionHeight={config.height}
          style={{ width: previewWidth, height: previewHeight }}
          controls
          autoPlay
          loop
        />
      </div>

      {/* Download link */}
      {renderUrl && (
        <div className="flex items-center justify-center gap-2 p-3 rounded-lg border border-success/30 bg-success/5">
          <a
            href={renderUrl}
            download
            className="text-sm text-success font-semibold hover:text-accent transition-colors"
          >
            Descargar video renderizado
          </a>
        </div>
      )}
    </div>
  );
}
