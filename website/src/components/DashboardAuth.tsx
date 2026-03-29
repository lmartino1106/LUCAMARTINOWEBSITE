"use client";

import { useState, useEffect } from "react";
import { Lock, ArrowRight } from "lucide-react";

export default function DashboardAuth({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("dashboard_auth");
    if (stored === "true") setAuthenticated(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/dashboard/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setAuthenticated(true);
        sessionStorage.setItem("dashboard_auth", "true");
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  if (authenticated) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="w-full max-w-sm mx-auto px-6">
        <div className="rounded-2xl border border-border bg-bg-card p-8 text-center">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold text-text-primary mb-2">Dashboard Privado</h1>
          <p className="text-sm text-text-secondary mb-6">
            Ingresa tu contraseña para acceder al panel de marca personal.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Contraseña"
              className={`w-full rounded-lg border px-4 py-3 text-sm bg-bg-dark text-text-primary placeholder:text-text-muted focus:outline-none transition-colors ${
                error ? "border-red-400 focus:border-red-400" : "border-border focus:border-primary"
              }`}
              autoFocus
            />
            {error && (
              <p className="text-xs text-red-400">Contraseña incorrecta</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Verificando..." : <>Entrar <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
