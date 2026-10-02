import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/portal")({
  head: () => ({
    meta: [
      { title: "Your Projects — EP Studio Client Portal" },
      { name: "description", content: "View project progress and request changes from EP Studio." },
      { property: "og:title", content: "EP Studio Client Portal" },
      { property: "og:description", content: "Private project dashboard for EP Studio clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Portal,
});

type Project = {
  id: string; client_email: string; client_name: string; name: string; summary: string | null;
  status: string; progress: number; live_url: string | null; updated_at: string;
};
type Req = { id: string; project_id: string; title: string; details: string; status: string; created_at: string };

const input = "w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-accent";

function Portal() {
  const { user } = Route.useRouteContext();
  const qc = useQueryClient();
  const navigate = useNavigate();

  const { data: isAdmin } = useQuery({
    queryKey: ["is-admin", user.id],
    queryFn: async () => {
      const { data } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      return !!data;
    },
  });
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase.from("client_projects").select("*").order("updated_at", { ascending: false });
      if (error) throw error;
      return data as Project[];
    },
  });
  const { data: requests = [] } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const { data, error } = await supabase.from("change_requests").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data as Req[];
    },
  });

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold tracking-tight">EP <span className="text-accent">Studio</span></Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline text-muted-foreground">{user.email}</span>
            <button onClick={signOut} className="font-mono text-[10px] uppercase tracking-widest hover:text-accent">Sign out</button>
          </div>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{isAdmin ? "Studio admin" : "Client portal"}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Your projects</h1>

        {isAdmin && <AdminAddProject onDone={() => qc.invalidateQueries({ queryKey: ["projects"] })} />}

        {isLoading ? (
          <p className="mt-10 text-muted-foreground">Loading…</p>
        ) : projects.length === 0 ? (
          <p className="mt-10 text-muted-foreground">
            No projects linked to {user.email} yet. EP Studio will add yours shortly — or{" "}
            <a className="text-accent underline" href="https://wa.me/2348085381296" target="_blank" rel="noreferrer">message us on WhatsApp</a>.
          </p>
        ) : (
          <div className="mt-10 space-y-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} p={p} isAdmin={!!isAdmin} userId={user.id}
                requests={requests.filter((r) => r.project_id === p.id)}
                onChange={() => { qc.invalidateQueries({ queryKey: ["requests"] }); qc.invalidateQueries({ queryKey: ["projects"] }); }} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

const reqSchema = z.object({
  title: z.string().trim().min(1, "Add a short title").max(120),
  details: z.string().trim().min(1, "Describe the change").max(2000),
});

function ProjectCard({ p, requests, isAdmin, userId, onChange }: {
  p: Project; requests: Req[]; isAdmin: boolean; userId: string; onChange: () => void;
}) {
  const [msg, setMsg] = useState<string | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = reqSchema.safeParse({ title: fd.get("title"), details: fd.get("details") });
    if (!parsed.success) return setMsg(parsed.error.issues[0]?.message ?? "Invalid");
    const { error } = await supabase.from("change_requests").insert({ ...parsed.data, project_id: p.id, user_id: userId });
    if (error) return setMsg(error.message);
    form.reset();
    setMsg("Request sent — EP Studio will follow up.");
    onChange();
  }

  async function setReqStatus(id: string, status: string) {
    await supabase.from("change_requests").update({ status }).eq("id", id);
    onChange();
  }
  async function setProgress(progress: number, status: string) {
    await supabase.from("client_projects").update({ progress, status, updated_at: new Date().toISOString() }).eq("id", p.id);
    onChange();
  }

  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {isAdmin && <p className="text-xs text-muted-foreground">{p.client_name} · {p.client_email}</p>}
          <h2 className="text-2xl font-bold">{p.name}</h2>
          {p.summary && <p className="mt-1 text-muted-foreground max-w-xl">{p.summary}</p>}
        </div>
        <span className="rounded-full border border-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">{p.status}</span>
      </div>
      <div className="mt-5 h-2 rounded-full bg-muted overflow-hidden" role="progressbar" aria-valuenow={p.progress} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full bg-accent transition-[width] duration-500" style={{ width: `${p.progress}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>{p.progress}% complete</span>
        {p.live_url && <a href={p.live_url} target="_blank" rel="noreferrer" className="text-accent underline">View live site</a>}
      </div>

      {isAdmin && (
        <form className="mt-4 flex flex-wrap gap-2" onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          setProgress(Math.max(0, Math.min(100, Number(fd.get("progress")) || 0)), String(fd.get("status") || p.status));
        }}>
          <input name="progress" type="number" min={0} max={100} defaultValue={p.progress} className={`${input} w-24 py-2`} aria-label="Progress" />
          <select name="status" defaultValue={p.status} className={`${input} w-auto py-2`} aria-label="Status">
            {["Planning", "In progress", "In review", "Completed"].map((s) => <option key={s}>{s}</option>)}
          </select>
          <button className="rounded-full border border-border px-4 font-mono text-[10px] uppercase tracking-widest hover:border-accent">Update</button>
        </form>
      )}

      <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Change requests</h3>
      {requests.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">No requests yet.</p>
      ) : (
        <ul className="mt-3 divide-y divide-border">
          {requests.map((r) => (
            <li key={r.id} className="py-3 flex flex-wrap justify-between gap-3">
              <div>
                <p className="font-semibold">{r.title}</p>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{r.details}</p>
              </div>
              {isAdmin ? (
                <select value={r.status} onChange={(e) => setReqStatus(r.id, e.target.value)} className={`${input} w-auto py-1 text-xs`} aria-label="Request status">
                  {["Open", "In progress", "Done"].map((s) => <option key={s}>{s}</option>)}
                </select>
              ) : (
                <span className="text-xs font-mono text-accent">{r.status}</span>
              )}
            </li>
          ))}
        </ul>
      )}

      {!isAdmin && (
        <form onSubmit={submit} className="mt-6 space-y-3">
          <input name="title" maxLength={120} placeholder="What should change?" className={input} />
          <textarea name="details" maxLength={2000} rows={3} placeholder="Details, links or page names" className={input} />
          {msg && <p role="status" className="text-sm text-accent">{msg}</p>}
          <button className="rounded-full bg-accent text-accent-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest">Request change</button>
        </form>
      )}
    </article>
  );
}

const projectSchema = z.object({
  client_name: z.string().trim().min(1).max(100),
  client_email: z.string().trim().email().max(255),
  name: z.string().trim().min(1).max(120),
  summary: z.string().trim().max(500).optional(),
  live_url: z.string().trim().url().max(500).optional().or(z.literal("")),
});

function AdminAddProject({ onDone }: { onDone: () => void }) {
  const [msg, setMsg] = useState<string | null>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = projectSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) return setMsg("Check the fields: " + (parsed.error.issues[0]?.path.join(".") ?? ""));
    const { error } = await supabase.from("client_projects").insert({ ...parsed.data, summary: parsed.data.summary || null, live_url: parsed.data.live_url || null });
    if (error) return setMsg(error.message);
    form.reset();
    setMsg("Project added. The client sees it after signing in with that email.");
    onDone();
  }
  return (
    <form onSubmit={submit} className="mt-8 grid gap-3 sm:grid-cols-2 rounded-2xl border border-dashed border-border p-6">
      <p className="sm:col-span-2 font-semibold">Add a client project</p>
      <input name="client_name" placeholder="Client (e.g. Shola Anthony — Cyberagris)" className={input} />
      <input name="client_email" type="email" placeholder="Client email" className={input} />
      <input name="name" placeholder="Project name" className={input} />
      <input name="live_url" placeholder="Live URL (optional)" className={input} />
      <textarea name="summary" placeholder="Short summary (optional)" className={`${input} sm:col-span-2`} rows={2} />
      {msg && <p className="sm:col-span-2 text-sm text-accent">{msg}</p>}
      <button className="sm:col-span-2 justify-self-start rounded-full bg-accent text-accent-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest">Add project</button>
    </form>
  );
}
