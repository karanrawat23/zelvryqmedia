import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { ActionButton } from "@/components/ActionButton";
import { Section } from "@/components/Section";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

const title = "Team Sign In | ZELVRYQ";
const description = "Private sign-in for the ZELVRYQ team to access the enquiry inbox.";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

const fieldClass =
  "mt-2 h-12 w-full border border-input bg-surface/60 px-4 text-sm text-foreground focus:border-gold focus:outline-none";
const labelClass = "text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setStatus(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/leads` },
        });
        if (error) throw error;
        setStatus("Account created. Check your email if confirmation is required, then sign in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/leads" });
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  const onGoogle = async () => {
    setStatus(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setStatus("Google sign-in failed. Please try again.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/leads" });
  };

  return (
    <Section className="border-t border-border">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Team Access</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold uppercase text-foreground">
          Sign in to the enquiry inbox
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This area is private. Only approved ZELVRYQ team members can see enquiries.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className={labelClass}>
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              className={fieldClass}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <ActionButton type="submit" variant="gold" size="lg" disabled={busy}>
            {mode === "signin" ? "Sign In" : "Create Account"}
          </ActionButton>
        </form>

        <button
          type="button"
          onClick={onGoogle}
          className="mt-4 inline-flex h-12 w-full items-center justify-center border border-border px-6 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          Continue with Google
        </button>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 text-xs uppercase tracking-[0.16em] text-gold"
        >
          {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
        </button>

        {status && (
          <p role="status" aria-live="polite" className="mt-6 text-sm text-muted-foreground">
            {status}
          </p>
        )}
      </div>
    </Section>
  );
}
