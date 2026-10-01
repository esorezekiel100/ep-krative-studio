import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Client Sign In — EP Studio" },
      { name: "description", content: "Sign in to the EP Studio client portal to view your projects and request changes." },
      { property: "og:title", content: "Client Sign In — EP Studio" },
      { property: "og:description", content: "Private client portal for EP Studio projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(72),
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({ email: fd.get("email"), password: fd.get("password") });
    if (!parsed.success) return setMsg(parsed.error.issues[0]?.message ?? "Invalid input");
    setBusy(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword(parsed.data);
      setBusy(false);
      if (error) return setMsg(error.message);
      navigate({ to: "/portal" });
    } else {
      const { error } = await supabase.auth.signUp({
        ...parsed.data,
        options: { emailRedirectTo: `${window.location.origin}/portal` },
      });
      setBusy(false);
      if (error) return setMsg(error.message);
      setMsg("Check your email to confirm your account, then sign in.");
      setMode("signin");
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link to="/" className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent">
          ← EP Studio
        </Link>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
          Client <span className="text-accent">portal</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          {mode === "signin" ? "Sign in to view your projects." : "Create your account with the email you gave EP Studio."}
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input name="email" type="email" required placeholder="Email" autoComplete="email"
            className="w-full rounded-xl bg-card border border-border px-4 py-3 outline-none focus:border-accent" />
          <input name="password" type="password" required placeholder="Password"
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            className="w-full rounded-xl bg-card border border-border px-4 py-3 outline-none focus:border-accent" />
          {msg && <p role="status" className="text-sm text-accent">{msg}</p>}
          <button disabled={busy}
            className="w-full rounded-full bg-accent text-accent-foreground py-3 font-mono text-xs uppercase tracking-widest disabled:opacity-60">
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 text-sm text-muted-foreground hover:text-foreground">
          {mode === "signin" ? "First time here? Create an account" : "Already have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}
