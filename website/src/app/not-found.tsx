import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen grid-bg relative flex items-center justify-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-secondary-foreground max-w-md mx-auto mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
