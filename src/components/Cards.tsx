import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { PlaceholderBadge } from "@/components/Section";
import { cn } from "@/lib/utils";
import type { PackageGroup, Project } from "@/data/content";
import type { PillarDef } from "@/data/services";

export function PillarCard({
  pillar,
  index,
  preview,
}: {
  pillar: PillarDef;
  index: number;
  preview: { slug: string; title: string }[];
}) {
  return (
    <article className="surface-panel group relative flex flex-col p-7 transition-colors duration-500 hover:border-gold/50 md:p-9">
      <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-foreground/5">
        0{index + 1}
      </span>
      <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
        {pillar.title}
      </h3>
      <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
        {pillar.kicker}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {pillar.services.slice(0, 6).map((service) => (
          <li
            key={service}
            className="border border-border px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground"
          >
            {service}
          </li>
        ))}
      </ul>

      {preview.length > 0 && (
        <ul className="mt-6 space-y-2">
          {preview.map((item) => (
            <li key={item.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-gold"
              >
                <span className="h-px w-4 bg-gold" aria-hidden="true" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link
        to="/services"
        className="mt-8 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold"
      >
        Explore {pillar.title}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </article>
  );
}

export function IndustryCard({ name, body }: { name: string; body: string }) {
  return (
    <article className="group border-b border-border p-6 transition-colors hover:bg-surface/60">
      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-gold">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface-panel group flex flex-col overflow-hidden transition-colors hover:border-gold/50">
      <div className="relative aspect-16/10 overflow-hidden border-b border-border">
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl font-extrabold uppercase tracking-[0.2em] text-foreground/25">
            {project.industry}
          </span>
        </div>
        {project.isDemo && (
          <div className="absolute left-4 top-4">
            <PlaceholderBadge label="Demo project" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
          {project.industry}
        </p>
        <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <p className="mt-4 text-xs text-muted-foreground">{project.services.join(" · ")}</p>
        <Link
          to="/work/$slug"
          params={{ slug: project.slug }}
          className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold"
        >
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </article>
  );
}

export function PackageGroupBlock({ group }: { group: PackageGroup }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground">
        {group.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{group.intro}</p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {group.tiers.map((tier) => (
          <article
            key={tier.name}
            className={cn(
              "surface-panel flex flex-col p-7 transition-colors",
              tier.featured ? "border-gold/60" : "hover:border-gold/40",
            )}
          >
            {tier.featured && (
              <span className="mb-4 self-start bg-gold-gradient px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                Most chosen
              </span>
            )}
            <h4 className="font-display text-lg font-extrabold uppercase tracking-tight text-foreground">
              {tier.name}
            </h4>
            <p className="mt-4 font-display text-2xl font-extrabold text-gold-gradient">
              {tier.price}
            </p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
              {tier.priceNote}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex h-11 items-center justify-center border border-border text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Get custom quote
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
