"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center grid-bg pt-24">
      <div className="text-center px-6">
        <div className="text-6xl font-bold text-primary mb-4">Error</div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Algo salió mal
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Ocurrió un error inesperado. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-primary hover:border-primary/40 transition-colors"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
