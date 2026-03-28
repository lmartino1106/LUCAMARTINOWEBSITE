import Link from "next/link";
import { Scale, Code, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                <Scale className="w-3 h-3 text-primary absolute -translate-x-0.5" />
                <Code className="w-3 h-3 text-accent absolute translate-x-0.5 translate-y-0.5 opacity-60" />
              </div>
              <span className="font-bold text-text-primary">Luca Martino</span>
            </div>
            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              Abogado & Developer. Automatizo estudios jur\u00eddicos con IA,
              construyo software legal y dise\u00f1o embudos de captaci\u00f3n para abogados.
              Perfil h\u00edbrido \u00fanico en el mercado legal chileno.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/lucamartinoacevedo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="mailto:contacto@lucamartino.cl"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/lmartino1106"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Navegaci\u00f3n
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/sobre-mi" className="text-sm text-text-secondary hover:text-primary transition-colors">Sobre M\u00ed</Link>
              <Link href="/servicios" className="text-sm text-text-secondary hover:text-primary transition-colors">Servicios</Link>
              <Link href="/blog" className="text-sm text-text-secondary hover:text-primary transition-colors">Blog</Link>
              <Link href="/contacto" className="text-sm text-text-secondary hover:text-primary transition-colors">Contacto</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Servicios
            </h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-text-secondary">Automatizaci\u00f3n Legal</span>
              <span className="text-sm text-text-secondary">IA para Abogados</span>
              <span className="text-sm text-text-secondary">Web + Embudo Comercial</span>
              <span className="text-sm text-text-secondary">Software a Medida</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Luca Martino Acevedo. Todos los derechos reservados.
          </p>
          <p className="text-xs text-text-muted font-mono">
            Dise\u00f1ado y desarrollado por Luca Martino
          </p>
        </div>
      </div>
    </footer>
  );
}
