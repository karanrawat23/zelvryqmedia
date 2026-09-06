import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";

import { Section } from "@/components/Section";
import { supabase } from "@/integrations/supabase/client";
import { checkIsAdmin, listLeads, updateLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/_authenticated/leads")({
  head: () => ({
    meta: [
      { title: "Enquiry Inbox | ZELVRYQ" },
      { name: "description", content: "Private ZELVRYQ enquiry inbox for the internal team." },
      { property: "og:title", content: "Enquiry Inbox | ZELVRYQ" },
      { property: "og:description", content: "Private ZELVRYQ enquiry inbox." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LeadsInbox,
  errorComponent: ({ error }) => (
    <Section>
      <p className="text-sm text-muted-foreground">Could not load the inbox: {error.message}</p>
    </Section>
  ),
});

const statuses = ["new", "contacted", "closed"] as const;

function LeadsInbox() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchLeads = useServerFn(listLeads);
  const fetchIsAdmin = useServerFn(checkIsAdmin);
  const saveLead = useServerFn(updateLead);
  const [filter, setFilter] = useState<"all" | (typeof statuses)[number]>("all");

  const adminQuery = useQuery({ queryKey: ["is-admin"], queryFn: () => fetchIsAdmin() });
  const leadsQuery = useQuery({
    queryKey: ["leads"],
    queryFn: () => fetchLeads(),
    enabled: adminQuery.data?.isAdmin === true,
  });

  const mutation = useMutation({
    mutationFn: (input: { id: string; status?: (typeof statuses)[number]; internal_notes?: string }) =>
      saveLead({ data: input }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leads"] }),
  });

  if (adminQuery.isLoading) {
    return (
      <Section>
        <p className="text-sm text-muted-foreground">Checking your access…</p>
      </Section>
    );
  }

  if (adminQuery.data?.isAdmin !== true) {
    return (
      <Section>
        <h1 className="font-display text-3xl font-extrabold uppercase text-foreground">
          Access pending
        </h1>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          You are signed in, but this account is not approved for the enquiry inbox yet. Ask a
          ZELVRYQ admin to approve it, then reload this page.
        </p>
        <button
          type="button"
          className="mt-8 text-xs uppercase tracking-[0.16em] text-gold"
          onClick={async () => {
            await supabase.auth.signOut();
            navigate({ to: "/auth" });
          }}
        >
          Sign out
        </button>
      </Section>
    );
  }

  const leads = (leadsQuery.data ?? []).filter((lead) =>
    filter === "all" ? true : lead.status === filter,
  );

  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Private</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold uppercase text-foreground">
            Enquiry Inbox
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {leadsQuery.data?.length ?? 0} enquiries received in total.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["all", ...statuses] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`border px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] transition-colors ${
                filter === value
                  ? "border-gold text-gold"
                  : "border-border text-muted-foreground hover:text-gold"
              }`}
            >
              {value}
            </button>
          ))}
          <button
            type="button"
            onClick={async () => {
              await supabase.auth.signOut();
              navigate({ to: "/auth" });
            }}
            className="border border-border px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
          >
            Sign out
          </button>
        </div>
      </div>

      {leadsQuery.isLoading && (
        <p className="mt-10 text-sm text-muted-foreground">Loading enquiries…</p>
      )}
      {!leadsQuery.isLoading && leads.length === 0 && (
        <p className="mt-10 text-sm text-muted-foreground">No enquiries in this view yet.</p>
      )}

      <div className="mt-10 space-y-5">
        {leads.map((lead) => (
          <article key={lead.id} className="border border-border bg-surface/50 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-lg font-bold uppercase text-foreground">
                  {lead.name}
                  {lead.company ? ` — ${lead.company}` : ""}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gold">{lead.service}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {new Date(lead.created_at).toLocaleString("en-IN")}
                </p>
              </div>
              <select
                value={lead.status}
                onChange={(e) =>
                  mutation.mutate({
                    id: lead.id,
                    status: e.target.value as (typeof statuses)[number],
                  })
                }
                className="h-10 border border-border bg-background px-3 text-xs uppercase tracking-[0.14em] text-foreground"
              >
                {statuses.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <dl className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.18em]">Email</dt>
                <dd>
                  <a href={`mailto:${lead.email}`} className="text-foreground hover:text-gold">
                    {lead.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.18em]">Phone</dt>
                <dd>
                  <a
                    href={`tel:${lead.phone.replace(/\s/g, "")}`}
                    className="text-foreground hover:text-gold"
                  >
                    {lead.phone}
                  </a>
                </dd>
              </div>
              {lead.budget && (
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-[0.18em]">Budget</dt>
                  <dd>{lead.budget}</dd>
                </div>
              )}
              {lead.industry && (
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-[0.18em]">Industry</dt>
                  <dd>{lead.industry}</dd>
                </div>
              )}
              {lead.website && (
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-[0.18em]">Website</dt>
                  <dd>{lead.website}</dd>
                </div>
              )}
            </dl>

            <p className="mt-5 whitespace-pre-line border-l-2 border-gold/40 pl-4 text-sm text-foreground/90">
              {lead.message}
            </p>

            <NotesEditor
              initial={lead.internal_notes ?? ""}
              onSave={(notes) => mutation.mutate({ id: lead.id, internal_notes: notes })}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}

function NotesEditor({
  initial,
  onSave,
}: {
  initial: string;
  onSave: (notes: string) => void;
}) {
  const [value, setValue] = useState(initial);
  return (
    <div className="mt-5">
      <label className="text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
        Internal notes
      </label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={2}
        className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none"
      />
      {value !== initial && (
        <button
          type="button"
          onClick={() => onSave(value)}
          className="mt-2 text-xs uppercase tracking-[0.16em] text-gold"
        >
          Save notes
        </button>
      )}
    </div>
  );
}
