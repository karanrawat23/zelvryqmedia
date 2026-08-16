import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section, SectionHeading } from "@/components/Section";
import { insights } from "@/data/content";

const title = "Insights — Marketing, Branding & Web Articles | ZELVRYQ";
const description =
  "Practical articles from the ZELVRYQ team on digital marketing, SEO, branding, web development and growth strategy.";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/insights" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsIndex,
});

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function InsightsIndex() {
  const categories = Array.from(new Set(insights.map((item) => item.category)));

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="IDEAS WORTH ACTING ON."
        body="Short, practical writing on how brands grow — strategy, marketing, branding, web and technology, without the jargon."
      />

      <Section className="border-t border-border">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionHeading eyebrow="Articles" title="LATEST WRITING" />
          <PlaceholderBadge label="Demo articles — replace before launch" />
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <li
              key={category}
              className="border border-border px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground"
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => (
            <article
              key={post.slug}
              className="surface-panel group flex flex-col p-7 transition-colors hover:border-gold/50"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
                {post.category}
              </p>
              <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight tracking-tight text-foreground">
                {post.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-6 text-xs text-muted-foreground">{formatDate(post.date)}</p>
              <Link
                to="/insights/$slug"
                params={{ slug: post.slug }}
                className="mt-4 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold"
              >
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="WANT THIS APPLIED TO YOUR BRAND?"
        body="We can turn these ideas into a concrete plan for your business. Start with a free consultation."
      />
    </>
  );
}
