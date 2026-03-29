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
  PenTool,
  RefreshCw,
  Plus,
  Save,
  X,
  Edit3,
  Trash2,
  Sparkles,
} from "lucide-react";
import DashboardAuth from "@/components/DashboardAuth";

interface BrandMetrics {
  id?: string;
  linkedin_followers: number;
  linkedin_impressions: number;
  linkedin_engagement_rate: number;
  website_visits: number;
  contact_form_submissions: number;
  diagnostics_scheduled: number;
  new_connections: number;
  direct_messages: number;
  week_start?: string;
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
  { id: "demo-1", title: "Soy abogado y programo. Esta es mi historia.", pillar: "opinion", status: "draft", scheduled_date: "2026-03-31", impressions: 0, likes: 0, comments: 0 },
  { id: "demo-2", title: "5 tareas que todo abogado debería automatizar hoy", pillar: "tutorial", status: "idea", scheduled_date: "2026-04-02", impressions: 0, likes: 0, comments: 0 },
  { id: "demo-3", title: "El abogado del futuro no compite contra la IA, la usa", pillar: "opinion", status: "idea", scheduled_date: "2026-04-04", impressions: 0, likes: 0, comments: 0 },
];

const demoPrompts: DailyPrompt[] = [
  { id: "demo-1", date: "2026-03-31", day_of_week: "Lunes", prompt_type: "educativo", prompt_text: "Escribe un post educativo sobre una norma o ley relevante.", topic_suggestion: "Ley 21.719 - Protección de Datos: ¿qué deben preparar los estudios?", completed: false },
  { id: "demo-2", date: "2026-04-02", day_of_week: "Miércoles", prompt_type: "tutorial", prompt_text: "Comparte un tutorial práctico o caso de uso real de automatización/IA en el derecho.", topic_suggestion: "5 tareas que todo abogado debería automatizar hoy", completed: false },
  { id: "demo-3", date: "2026-04-04", day_of_week: "Viernes", prompt_type: "opinion", prompt_text: "Comparte una opinión provocadora o storytelling sobre derecho y tecnología.", topic_suggestion: "El abogado del futuro no compite contra la IA, la usa", completed: false },
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

const statusFlow = ["idea", "draft", "review", "published"];

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<BrandMetrics>(demoMetrics);
  const [posts, setPosts] = useState<ContentPost[]>(demoPosts);
  const [prompts, setPrompts] = useState<DailyPrompt[]>(demoPrompts);
  const [activeTab, setActiveTab] = useState<"overview" | "content" | "prompts" | "seo" | "crear">("overview");
  const [loading, setLoading] = useState(true);
  const [editingMetrics, setEditingMetrics] = useState(false);
  const [metricsForm, setMetricsForm] = useState<BrandMetrics>(demoMetrics);
  const [savingMetrics, setSavingMetrics] = useState(false);
  const [newPostForm, setNewPostForm] = useState({ title: "", pillar: "educativo", scheduled_date: "" });
  const [showNewPost, setShowNewPost] = useState(false);
  const [contacts, setContacts] = useState<{ id: string; name: string; email: string; service: string; created_at: string }[]>([]);
  const [contentType, setContentType] = useState<"reel" | "carrusel" | "post" | "presentacion">("post");
  const [contentPrompt, setContentPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState<Record<string, unknown> | null>(null);
  const [generating, setGenerating] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/dashboard/data");
      if (res.ok) {
        const data = await res.json();
        if (data.metrics) {
          setMetrics(data.metrics);
          setMetricsForm(data.metrics);
        }
        if (data.posts.length > 0) setPosts(data.posts);
        if (data.prompts.length > 0) setPrompts(data.prompts);
        if (data.contacts) setContacts(data.contacts);
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function saveMetrics() {
    setSavingMetrics(true);
    try {
      await fetch("/api/dashboard/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save_metrics",
          payload: {
            id: metrics.id,
            linkedin_followers: metricsForm.linkedin_followers,
            linkedin_impressions: metricsForm.linkedin_impressions,
            linkedin_engagement_rate: metricsForm.linkedin_engagement_rate,
            website_visits: metricsForm.website_visits,
            contact_form_submissions: metricsForm.contact_form_submissions,
            diagnostics_scheduled: metricsForm.diagnostics_scheduled,
            new_connections: metricsForm.new_connections,
            direct_messages: metricsForm.direct_messages,
          },
        }),
      });
      setMetrics({ ...metricsForm });
      setEditingMetrics(false);
    } catch (err) {
      console.error("Error saving metrics:", err);
    }
    setSavingMetrics(false);
  }

  async function updatePostStatus(postId: string, newStatus: string) {
    const updated = posts.map((p) => p.id === postId ? { ...p, status: newStatus } : p);
    setPosts(updated);
    if (!postId.startsWith("demo-")) {
      await fetch("/api/dashboard/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_post_status", payload: { id: postId, status: newStatus } }),
      });
    }
  }

  async function togglePromptCompleted(promptId: string, completed: boolean) {
    const updated = prompts.map((p) => p.id === promptId ? { ...p, completed } : p);
    setPrompts(updated);
    if (!promptId.startsWith("demo-")) {
      await fetch("/api/dashboard/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "toggle_prompt", payload: { id: promptId, completed } }),
      });
    }
  }

  async function addPost() {
    if (!newPostForm.title || !newPostForm.scheduled_date) return;
    const newPost: ContentPost = {
      id: `temp-${Date.now()}`,
      title: newPostForm.title,
      pillar: newPostForm.pillar,
      status: "idea",
      scheduled_date: newPostForm.scheduled_date,
      impressions: 0,
      likes: 0,
      comments: 0,
    };

    const res = await fetch("/api/dashboard/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "add_post",
        payload: {
          title: newPost.title,
          pillar: newPost.pillar,
          status: "idea",
          scheduled_date: newPost.scheduled_date,
          impressions: 0,
          likes: 0,
          comments: 0,
        },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, data.post || newPost]);
    } else {
      setPosts([...posts, newPost]);
    }
    setNewPostForm({ title: "", pillar: "educativo", scheduled_date: "" });
    setShowNewPost(false);
  }

  async function deletePost(postId: string) {
    setPosts(posts.filter((p) => p.id !== postId));
    if (!postId.startsWith("demo-") && !postId.startsWith("temp-")) {
      await fetch("/api/dashboard/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_post", payload: { id: postId } }),
      });
    }
  }

  async function generateContent() {
    if (!contentPrompt) return;
    setGenerating(true);
    setGeneratedContent(null);
    try {
      const res = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: contentType, prompt: contentPrompt }),
      });
      if (res.ok) {
        const data = await res.json();
        setGeneratedContent(data.content);
      }
    } catch (err) {
      console.error("Error generating:", err);
    }
    setGenerating(false);
  }

  const metricFields: { key: keyof BrandMetrics; label: string; icon: typeof Users }[] = [
    { key: "linkedin_followers", label: "Seguidores LinkedIn", icon: Users },
    { key: "linkedin_impressions", label: "Impresiones Semanales", icon: Eye },
    { key: "linkedin_engagement_rate", label: "Engagement Rate %", icon: TrendingUp },
    { key: "website_visits", label: "Visitas Web", icon: BarChart3 },
    { key: "contact_form_submissions", label: "Formularios Recibidos", icon: MessageSquare },
    { key: "diagnostics_scheduled", label: "Diagnósticos Agendados", icon: Calendar },
    { key: "new_connections", label: "Nuevas Conexiones", icon: Users },
    { key: "direct_messages", label: "Mensajes Directos", icon: MessageSquare },
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
        <div className="flex gap-1 mb-8 p-1 rounded-xl bg-bg-card border border-border w-fit overflow-x-auto">
          {[
            { key: "overview", label: "Resumen", icon: BarChart3 },
            { key: "content", label: "Contenido", icon: FileText },
            { key: "prompts", label: "Prompts", icon: PenTool },
            { key: "seo", label: "SEO", icon: Target },
            { key: "crear", label: "Crear", icon: Sparkles },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
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
            {/* Metrics Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-text-primary">Métricas</h3>
              {!editingMetrics ? (
                <button
                  onClick={() => { setMetricsForm({ ...metrics }); setEditingMetrics(true); }}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
                >
                  <Edit3 className="w-4 h-4" /> Editar
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingMetrics(false)}
                    className="flex items-center gap-1 text-sm text-text-muted hover:text-red-400 transition-colors"
                  >
                    <X className="w-4 h-4" /> Cancelar
                  </button>
                  <button
                    onClick={saveMetrics}
                    disabled={savingMetrics}
                    className="flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" /> {savingMetrics ? "Guardando..." : "Guardar"}
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {metricFields.map((field) => (
                <div
                  key={field.key}
                  className="rounded-xl border border-border bg-bg-card p-6 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <field.icon className="w-5 h-5 text-text-muted" />
                  </div>
                  {editingMetrics ? (
                    <input
                      type="number"
                      step={field.key === "linkedin_engagement_rate" ? "0.1" : "1"}
                      value={metricsForm[field.key] as number}
                      onChange={(e) => setMetricsForm({ ...metricsForm, [field.key]: parseFloat(e.target.value) || 0 })}
                      className="w-full text-2xl font-bold text-text-primary bg-transparent border-b border-primary/40 focus:outline-none focus:border-primary pb-1 mb-1"
                    />
                  ) : (
                    <p className="text-2xl font-bold text-text-primary">
                      {field.key === "linkedin_engagement_rate" ? `${metrics[field.key]}%` : metrics[field.key]}
                    </p>
                  )}
                  <p className="text-xs text-text-muted mt-1">{field.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Contacts */}
            {contacts.length > 0 && (
              <div className="rounded-xl border border-border bg-bg-card p-8 mb-8">
                <h3 className="text-lg font-bold text-text-primary mb-4">Últimos Contactos</h3>
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <div key={c.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <div>
                        <span className="text-sm text-text-primary font-medium">{c.name}</span>
                        <span className="text-xs text-text-muted ml-3">{c.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">{c.service || "Sin especificar"}</span>
                        <span className="text-xs text-text-muted">{new Date(c.created_at).toLocaleDateString("es-CL")}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* KPI Targets */}
            <div className="rounded-xl border border-border bg-bg-card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-6">
                KPIs del Mes - Objetivos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { label: "Posts publicados", current: posts.filter(p => p.status === "published").length, target: 12 },
                  { label: "Impresiones/post", current: Math.round(metrics.linkedin_impressions / Math.max(posts.filter(p => p.status === "published").length, 1)), target: 500 },
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
              <button
                onClick={() => setShowNewPost(!showNewPost)}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                <Plus className="w-4 h-4" /> Nuevo Post
              </button>
            </div>

            {/* New Post Form */}
            {showNewPost && (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 space-y-4">
                <input
                  type="text"
                  placeholder="Título del post"
                  value={newPostForm.title}
                  onChange={(e) => setNewPostForm({ ...newPostForm, title: e.target.value })}
                  className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={newPostForm.pillar}
                    onChange={(e) => setNewPostForm({ ...newPostForm, pillar: e.target.value })}
                    className="rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary focus:border-primary focus:outline-none"
                  >
                    <option value="educativo">Educativo</option>
                    <option value="tutorial">Tutorial</option>
                    <option value="opinion">Opinión</option>
                  </select>
                  <input
                    type="date"
                    value={newPostForm.scheduled_date}
                    onChange={(e) => setNewPostForm({ ...newPostForm, scheduled_date: e.target.value })}
                    className="rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={addPost}
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                  >
                    <Save className="w-4 h-4" /> Guardar
                  </button>
                  <button
                    onClick={() => setShowNewPost(false)}
                    className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

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
                      {/* Status selector */}
                      <select
                        value={post.status}
                        onChange={(e) => updatePostStatus(post.id, e.target.value)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border-none cursor-pointer focus:outline-none ${statusColors[post.status] || ""}`}
                      >
                        {statusFlow.map((s) => (
                          <option key={s} value={s}>{s.toUpperCase()}</option>
                        ))}
                      </select>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.scheduled_date}
                      </span>
                    </div>
                    <h4 className="text-text-primary font-semibold">{post.title}</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-6 text-xs text-text-muted">
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.impressions}</span>
                      <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" /> {post.likes}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.comments}</span>
                    </div>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="text-text-muted hover:text-red-400 transition-colors"
                      title="Eliminar post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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
                y sugerencia de tema. Tú decides qué escribir cada día. Haz clic en el icono para marcar como completado.
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
                  <button
                    onClick={() => togglePromptCompleted(prompt.id, !prompt.completed)}
                    className="ml-4 hover:scale-110 transition-transform"
                    title={prompt.completed ? "Marcar como pendiente" : "Marcar como completado"}
                  >
                    {prompt.completed ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <Clock className="w-6 h-6 text-text-muted hover:text-primary transition-colors" />
                    )}
                  </button>
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
                  { task: "Google Search Console conectado", done: true },
                  { task: "Google Analytics instalado", done: true },
                  { task: "Google Business Profile creado", done: false },
                  { task: "Registrar dominio lucamartino.cl", done: true },
                  { task: "Certificado SSL activo", done: true },
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

        {/* Crear Tab */}
        {activeTab === "crear" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h3 className="text-lg font-bold text-text-primary mb-2">Generador de Contenido con IA</h3>
              <p className="text-sm text-text-secondary mb-6">
                Selecciona el tipo de contenido, escribe un tema y deja que la IA genere el texto.
              </p>

              {/* Type selector */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { key: "post", label: "Post LinkedIn" },
                  { key: "reel", label: "Reel/Short" },
                  { key: "carrusel", label: "Carrusel IG" },
                  { key: "presentacion", label: "Presentacion" },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setContentType(t.key as typeof contentType)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      contentType === t.key
                        ? "bg-primary text-white"
                        : "bg-bg-card border border-border text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Prompt */}
              <textarea
                value={contentPrompt}
                onChange={(e) => setContentPrompt(e.target.value)}
                placeholder="Ej: 5 razones por las que un abogado necesita automatizar su estudio..."
                rows={3}
                className="w-full rounded-lg border border-border bg-bg-dark px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors resize-none mb-4"
              />

              <button
                onClick={generateContent}
                disabled={generating || !contentPrompt}
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {generating ? (
                  <><RefreshCw className="w-4 h-4 animate-spin" /> Generando...</>
                ) : (
                  <><Sparkles className="w-4 h-4" /> Generar con IA</>
                )}
              </button>
            </div>

            {/* Results */}
            {generatedContent && (
              <div className="rounded-xl border border-border bg-bg-card p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-primary">Contenido Generado</h3>
                  <button
                    onClick={() => navigator.clipboard.writeText(JSON.stringify(generatedContent, null, 2))}
                    className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <FileText className="w-4 h-4" /> Copiar
                  </button>
                </div>

                {contentType === "post" && (
                  <div>
                    <p className="text-text-secondary whitespace-pre-wrap leading-relaxed text-sm">
                      {(generatedContent as { text?: string }).text}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {((generatedContent as { hashtags?: string[] }).hashtags || []).map((tag: string) => (
                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {contentType === "reel" && (
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-4">
                      {(generatedContent as { title?: string }).title}
                    </h4>
                    <ul className="space-y-2">
                      {((generatedContent as { points?: string[] }).points || []).map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-accent mt-0.5">●</span> {point}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-primary mt-4 font-semibold">
                      {(generatedContent as { cta?: string }).cta}
                    </p>
                  </div>
                )}

                {contentType === "carrusel" && (
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                    {((generatedContent as { slides?: { title: string; subtitle: string }[] }).slides || []).map((slide: { title: string; subtitle: string }, i: number) => (
                      <div key={i} className="rounded-lg border border-border bg-bg-dark p-4 text-center">
                        <span className="text-[10px] font-mono text-text-muted">Slide {i + 1}</span>
                        <p className="text-sm font-bold text-text-primary mt-1">{slide.title}</p>
                        <p className="text-xs text-text-secondary mt-1">{slide.subtitle}</p>
                      </div>
                    ))}
                  </div>
                )}

                {contentType === "presentacion" && (
                  <div>
                    <p className="text-lg text-text-primary font-semibold mb-3">
                      {(generatedContent as { tagline?: string }).tagline}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {((generatedContent as { credentials?: string[] }).credentials || []).map((cred: string, i: number) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-success" /> {cred}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-primary font-semibold">
                      {(generatedContent as { cta?: string }).cta}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </DashboardAuth>
  );
}
