"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-dark/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
            <Scale className="w-4 h-4 text-primary absolute -translate-x-0.5" />
            <Code className="w-4 h-4 text-accent absolute translate-x-1 translate-y-0.5 opacity-60" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-text-primary">
              Luca Martino
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted">
              Abogado & Developer
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          >
            Diagnóstico Gratis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-bg-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors block"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contacto"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white text-center hover:bg-primary-dark transition-colors"
                onClick={() => setOpen(false)}
              >
                Diagnóstico Gratis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
