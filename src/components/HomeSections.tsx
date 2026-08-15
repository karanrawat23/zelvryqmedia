import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { PlaceholderBadge, Section, SectionHeading } from "@/components/Section";
import { processSteps, valueStrip, whyZelvryq } from "@/data/content";
import { founders } from "@/data/content";

export function ValueStrip() {
  return (
    <section aria-label="What we bring" className="border-y border-border bg-surface/40">
      <div className="container-x py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {valueStrip.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="border-l border-gold/40 pl-4">
                <p className="font-display text-sm font-extrabold uppercase tracking-[0.24em] text-gold">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-base text-foreground md:text-lg">
          Everything your brand needs to build, grow and scale digitally.
        </p>
      </div>
    </section>
  );
}

export function WhyZelvryq() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="The difference"
        title="WHY ZELVRYQ?"
        body="Six commitments that shape how we work with every business we take on."
      />
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {whyZelvryq.map((item, i) => (
          <div key={item.title} className="bg-background p-7 transition-colors hover:bg-surface/70">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-gold">
              0{i + 1}
            </span>
            <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ProcessTimeline() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <SectionHeading
        eyebrow="Process"
        title="HOW WE WORK"
        body="A six-step engagement model that keeps strategy, creative and technology moving in one direction."
      />
      <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <li key={step.no} className="group relative bg-background p-8">
            <span className="font-display text-4xl font-extrabold text-foreground/10 transition-colors group-hover:text-gold/40">
              {step.no}
            </span>
            <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function FoundersSection() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="Founders"
        title="THE PEOPLE BEHIND ZELVRYQ"
        body="Two founders. One vision — Make Your Brand Matter."
      />
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {founders.map((founder, i) => (
          <Reveal key={founder.name} delay={i * 90}>
            <article className="surface-panel flex flex-col gap-6 p-8 sm:flex-row sm:items-start md:p-10">
              <div
                className="relative flex h-28 w-28 shrink-0 items-center justify-center border border-gold/40"
                role="img"
                aria-label={`Placeholder portrait of ${founder.name}`}
              >
                <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
                <span className="font-display text-4xl font-extrabold text-gold-gradient">
                  {founder.initials}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground">
                  {founder.name}
                </h3>
                <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                  {founder.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <PlaceholderBadge label="Demo photo & bio — replace before launch" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CompanyStory() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Our story" title="OUR STORY" />
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7 md:text-lg">
          <p>
            Businesses today need more than occasional posts or advertisements. They need a strong
            brand, a clear digital presence, consistent communication, technology that works, a
            strategy behind it — and growth they can actually measure.
          </p>
          <p>
            Most companies end up assembling that from a designer here, an ads freelancer there and
            a developer somewhere else. The pieces rarely add up to a brand.
          </p>
          <p className="text-foreground">
            ZELVRYQ exists to bring those pieces together: strategy, creative, technology and
            performance under one roof, working towards one outcome — making your brand matter.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="Client voices"
        title="WHAT CLIENTS SAY"
        align="center"
        body="Real client stories will appear here."
      />
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="surface-panel flex flex-col items-center gap-5 p-10 text-center">
          <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
          <p className="text-base text-muted-foreground">
            This section is ready for verified client testimonials. Nothing here is fabricated.
          </p>
          <PlaceholderBadge label="Awaiting real testimonials" />
        </div>
      </div>
    </Section>
  );
}

export function ClientLogos() {
  return (
    <section aria-label="Clients" className="border-t border-border bg-surface/30 py-14">
      <div className="container-x text-center">
        <p className="eyebrow">Trusted by businesses that want to grow</p>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center bg-background text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/50"
            >
              Client logo
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <PlaceholderBadge label="Logos added once clients approve" />
        </div>
      </div>
    </section>
  );
}

export function InsightsPreview({
  items,
}: {
  items: { slug: string; title: string; category: string; date: string; excerpt: string }[];
}) {
  return (
    <Section className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Insights"
          title="IDEAS & PERSPECTIVE"
          body="Notes on marketing, branding, technology and business growth."
        />
        <Link
          to="/insights"
          className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold"
        >
          All insights →
        </Link>
      </div>
      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
        {items.map((item) => (
          <article key={item.slug} className="bg-background p-7 transition-colors hover:bg-surface/70">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
              {item.category}
            </p>
            <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
            <p className="mt-5 text-xs text-muted-foreground">
              {new Date(item.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <Link
              to="/insights/$slug"
              params={{ slug: item.slug }}
              className="mt-5 inline-block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
