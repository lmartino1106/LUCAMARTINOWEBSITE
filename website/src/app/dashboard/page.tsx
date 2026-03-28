"use client";

import { useEffect, useState, useCallback } from "react";
import {
  BarChart3,
  Users,
  Eye,
  MessageSquare,
  TrendingUp,
  Calendar,
  FileText,
  Target,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown,
  Minus,
  PenTool,
  RefreshCw,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import DashboardAuth from "@/components/DashboardAuth";

interface BrandMetrics {
  linkedin_followers: number;
  linkedin_impressions: number;
  linkedin_engagement_rate: number;
  website_visits: number;
  contact_form_submissions: number;
  diagnostics_scheduled: number;
  new_connections: number;
  direct_messages: number;
}

interface ContentPost {
  id: string;
  title: string;
  pillar: string;
  status: string;
  scheduled_date: string;
  impressions: number;
  likes: number;
  comments: number;
}

interface DailyPrompt {
  id: string;
  date: string;
  day_of_week: string;
  prompt_type: string;
  prompt_text: string;
  topic_suggestion: string;
  completed: boolean;
}

// Demo data for initial display
const demoMetrics: BrandMetrics = {
  linkedin_followers: 0,
  linkedin_impressions: 0,
  linkedin_engagement_rate: 0,
  website_visits: 0,
  contact_form_submissions: 0,
  diagnostics_scheduled: 0,
  new_connections: 0,
  direct_messages: 0,
};

const demoPosts: ContentPost[] = [
  { id: "1", title: "Soy abogado y programo. Esta es mi historia.", pillar: "opinion", status: "draft", scheduled_date: "2026-03-31", impressions: 0, likes: 0, comments: 0 },
  { id: "2", title: "5 tareas que todo abogado debería automatizar hoy", pillar: "tutorial", status: "idea", scheduled_date: "2026-04-02", impressions: 0, likes: 0, comments: 0 },
  { id: "3", title: "El abogado del futuro no compite contra la IA, la usa", pillar: "opinion", status: "idea", scheduled_date: "2026-04-04", impressions: 0, likes: 0, comments: 0 },
];

const demoPrompts: DailyPrompt[] = [
  { id: "1", date: "2026-03-31", day_of_week: "Lunes", prompt_type: "educativo", prompt_text: "Escribe un post educativo sobre una norma o ley relevante. Valida con Magnar AI.", topic_suggestion: "Ley 21.719 - Protección de Datos: \u00bfqué deben preparar los estudios?", completed: false },
  { id: "2", date: "2026-04-02", day_of_week: "Miércoles", prompt_type: "tutorial", prompt_text: "Comparte un tutorial práctico o caso de uso real de automatización/IA en el derecho.", topic_suggestion: "5 tareas que todo abogado debería automatizar hoy", completed: false },
  { id: "3", date: "2026-04-04", day_of_week: "Viernes", prompt_type: "opinion", prompt_text: "Comparte una opinión provocadora o storytelling sobre derecho y tecnología.", topic_suggestion: "El abogado del futuro no compite contra la IA, la usa", completed: false },
];

const pillarColors: Record<string, string> = {
  educativo: "bg-primary/10 text-primary border-primary/20",
  tutorial: "bg-accent/10 text-accent border-accent/20",
  opinion: "bg-warning/10 text-warning border-warning/20",
};

const statusColors: Record<string, string> = {
  idea: "bg-text-muted/10 text-text-muted",
  draft: "bg-warning/10 text-warning",
  review: "bg-primary/10 text-primary",
  published: "bg-success/10 text-success",
};

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<BrandMetrics>(demoMetrics);
  const [posts, setPosts] = useState<ContentPost[]>(demoPosts);
  const [prompts, setPrompts] = useState<DailyPrompt[]>(demoPrompts);
  const [activeTab, setActiveTab] = useState<"overview" | "content" | "prompts" | "seo">("overview");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [metricsRes, postsRes, promptsRes] = await Promise.all([
        supabase.from("brand_metrics").select("*").order("week_start", { ascending: false }).limit(1),
        supabase.from("content_posts").select("*").order("scheduled_date", { ascending: true }),
        supabase.from("daily_prompts").select("*").order("date", { ascending: true }),
      ]);

      if (metricsRes.data && metricsRes.data.length > 0) {
        setMetrics(metricsRes.data[0]);
      }
      if (postsRes.data && postsRes.data.length > 0) {
        setPosts(postsRes.data);
      }
      if (promptsRes.data && promptsRes.data.length > 0) {
        setPrompts(promptsRes.data);
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const metricCards = [
    { label: "Seguidores LinkedIn", value: metrics.linkedin_followers, icon: Users, change: 0 },
    { label: "Impresiones Semanales", value: metrics.linkedin_impressions, icon: Eye, change: 0 },
    { label: "Engagement Rate", value: `${metrics.linkedin_engagement_rate}%`, icon: TrendingUp, change: 0 },
    { label: "Visitas Web", value: metrics.website_visits, icon: BarChart3, change: 0 },
    { label: "Formularios Recibidos", value: metrics.contact_form_submissions, icon: MessageSquare, change: 0 },
    { label: "Diagnósticos Agendados", value: metrics.diagnostics_scheduled, icon: Calendar, change: 0 },
    { label: "Nuevas Conexiones", value: metrics.new_connections, icon: Users, change: 0 },
    { label: "Mensajes Directos", value: metrics.direct_messages, icon: MessageSquare, change: 0 },
  ];

  return (
    <DashboardAuth>
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Dashboard de Marca Personal
            </h1>
            <p className="text-text-secondary">
              Métricas, contenido y prompts diarios para tu estrategia de posicionamiento.
            </p>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-text-secondary hover:text-primary hover:border-primary/40 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Cargando..." : "Actualizar"}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 p-1 rounded-xl bg-bg-card border border-border w-fit">
          {[
            { key: "overview", label: "Resumen", icon: BarChart3 },
            { key: "content", label: "Contenido", icon: FileText },
            { key: "prompts", label: "Prompts Diarios", icon: PenTool },
            { key: "seo", label: "SEO", icon: Target },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-primary text-white"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {metricCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-border bg-bg-card p-6 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <card.icon className="w-5 h-5 text-text-muted" />
                    <div className="flex items-center gap-1 text-xs">
                      {card.change > 0 ? (
                        <><ArrowUp className="w-3 h-3 text-success" /><span className="text-success">+{card.change}%</span></>
                      ) : card.change < 0 ? (
                        <><ArrowDown className="w-3 h-3 text-red-400" /><span className="text-red-400">{card.change}%</span></>
                      ) : (
                        <><Minus className="w-3 h-3 text-text-muted" /><span className="text-text-muted">--</span></>
                      )}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-text-primary">{card.value}</p>
                  <p className="text-xs text-text-muted mt-1">{card.label}</p>
                </div>
              ))}
            </div>

            {/* KPI Targets */}
            <div className="rounded-xl border border-border bg-bg-card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-6">
                KPIs del Mes - Objetivos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { label: "Posts publicados", current: posts.filter(p => p.status === "published").length, target: 12 },
                  { label: "Impresiones/post", current: 0, target: 500 },
                  { label: "Nuevas conexiones", current: metrics.new_connections, target: 200 },
                  { label: "Mensajes directos", current: metrics.direct_messages, target: 10 },
                  { label: "Diagnósticos", current: metrics.diagnostics_scheduled, target: 3 },
                ].map((kpi) => {
                  const pct = kpi.target > 0 ? Math.min((kpi.current / kpi.target) * 100, 100) : 0;
                  return (
                    <div key={kpi.label}>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-text-muted">{kpi.label}</span>
                        <span className="text-text-secondary font-mono">{kpi.current}/{kpi.target}</span>
                      </div>
                      <div className="h-2 rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === "content" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-text-primary">Pipeline de Contenido</h3>
            </div>
            {posts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl border border-border bg-bg-card p-6 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${pillarColors[post.pillar] || ""}`}>
                        {post.pillar.toUpperCase()}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${statusColors[post.status] || ""}`}>
                        {post.status.toUpperCase()}
                      </span>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.scheduled_date}
                      </span>
                    </div>
                    <h4 className="text-text-primary font-semibold">{post.title}</h4>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-text-muted">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.impressions}</span>
                    <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Prompts Tab */}
        {activeTab === "prompts" && (
          <div className="space-y-4">
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-6">
              <h3 className="text-lg font-bold text-text-primary mb-2">Sistema de Prompts Diarios</h3>
              <p className="text-sm text-text-secondary">
                Cada día de publicación (Lun, Mié, Vie) tienes un prompt con el tipo de contenido
                y sugerencia de tema. T\u00fa decides qué escribir cada día.
              </p>
            </div>
            {prompts.map((prompt) => (
              <div
                key={prompt.id}
                className={`rounded-xl border p-6 transition-colors ${
                  prompt.completed
                    ? "border-success/30 bg-success/5"
                    : "border-border bg-bg-card hover:border-primary/20"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-text-muted">{prompt.date}</span>
                      <span className="text-xs font-bold text-text-primary">{prompt.day_of_week}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${pillarColors[prompt.prompt_type] || ""}`}>
                        {prompt.prompt_type.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-text-primary font-medium mb-2">{prompt.prompt_text}</p>
                    <p className="text-sm text-text-secondary">
                      <span className="text-primary font-mono text-xs">Sugerencia:</span> {prompt.topic_suggestion}
                    </p>
                  </div>
                  <div className="ml-4">
                    {prompt.completed ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <Clock className="w-6 h-6 text-text-muted" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEO Tab */}
        {activeTab === "seo" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-bg-card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-6">Keywords Target</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-xs font-mono uppercase text-text-muted">Keyword</th>
                      <th className="text-center py-3 text-xs font-mono uppercase text-text-muted">Posición</th>
                      <th className="text-center py-3 text-xs font-mono uppercase text-text-muted">Volumen</th>
                      <th className="text-center py-3 text-xs font-mono uppercase text-text-muted">Dificultad</th>
                      <th className="text-left py-3 text-xs font-mono uppercase text-text-muted">Página</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { keyword: "abogado legaltech chile", position: "--", volume: "110", difficulty: "low", page: "/" },
                      { keyword: "automatización legal chile", position: "--", volume: "90", difficulty: "low", page: "/servicios" },
                      { keyword: "ia para abogados", position: "--", volume: "320", difficulty: "medium", page: "/blog" },
                      { keyword: "legal ops chile", position: "--", volume: "50", difficulty: "low", page: "/sobre-mi" },
                      { keyword: "software jurídico chile", position: "--", volume: "210", difficulty: "medium", page: "/servicios" },
                      { keyword: "abogado y programador", position: "--", volume: "70", difficulty: "low", page: "/" },
                      { keyword: "protección datos personales chile", position: "--", volume: "480", difficulty: "high", page: "/blog" },
                      { keyword: "luca martino abogado", position: "--", volume: "10", difficulty: "low", page: "/" },
                    ].map((kw) => (
                      <tr key={kw.keyword} className="border-b border-border/50 hover:bg-bg-card-hover">
                        <td className="py-3 text-text-primary">{kw.keyword}</td>
                        <td className="py-3 text-center text-text-muted font-mono">{kw.position}</td>
                        <td className="py-3 text-center text-text-secondary font-mono">{kw.volume}</td>
                        <td className="py-3 text-center">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            kw.difficulty === "low" ? "bg-success/10 text-success" :
                            kw.difficulty === "medium" ? "bg-warning/10 text-warning" :
                            "bg-red-400/10 text-red-400"
                          }`}>
                            {kw.difficulty.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 text-text-muted font-mono text-xs">{kw.page}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-bg-card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Checklist SEO</h3>
              <div className="space-y-3">
                {[
                  { task: "Meta tags optimizados en todas las páginas", done: true },
                  { task: "Schema.org (Person + ProfessionalService) implementado", done: true },
                  { task: "Sitemap.xml generado", done: true },
                  { task: "Robots.txt configurado", done: true },
                  { task: "Open Graph y Twitter cards", done: true },
                  { task: "Google Search Console conectado", done: false },
                  { task: "Google Analytics instalado", done: false },
                  { task: "Google Business Profile creado", done: false },
                  { task: "Registrar dominio lucamartino.cl", done: false },
                  { task: "Certificado SSL activo", done: false },
                ].map((item) => (
                  <div key={item.task} className="flex items-center gap-3">
                    <CheckCircle className={`w-4 h-4 ${item.done ? "text-success" : "text-text-muted"}`} />
                    <span className={`text-sm ${item.done ? "text-text-secondary line-through" : "text-text-primary"}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </DashboardAuth>
  );
}
