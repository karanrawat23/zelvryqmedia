import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section, SectionHeading } from "@/components/Section";
import { insights } from "@/data/content";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = insights.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article unavailable | ZELVRYQ" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} | ZELVRYQ Insights`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:url", content: `/insights/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            articleSection: post.category,
            description: post.excerpt,
            author: { "@type": "Organization", name: "ZELVRYQ" },
          }),
        },
      ],
    };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const { post } = Route.useLoaderData();
  const related = insights.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} body={post.excerpt} />

      <Section className="border-t border-border">
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <PlaceholderBadge label="Demo article — replace with full editorial content" />
          <p className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            This is placeholder editorial content for the article &ldquo;{post.title}&rdquo;. The
            final version will be written by the ZELVRYQ team and will cover the topic in full,
            with examples drawn from live engagements.
          </p>
          <p>
            The structure of each published article stays the same: the problem businesses actually
            run into, why the usual approach fails, and a practical sequence you can apply without a
            large team or budget.
          </p>
          <p>
            Until this article is published, the summary above reflects the intended scope. If the
            topic is relevant to your business right now, a short consultation is faster than
            waiting for the write-up.
          </p>
        </div>

        <Link
          to="/insights"
          className="mt-16 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all insights
        </Link>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-border bg-surface/30">
          <SectionHeading eyebrow="Keep Reading" title="RELATED ARTICLES" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/insights/$slug"
                params={{ slug: item.slug }}
                className="surface-panel p-6 transition-colors hover:border-gold/50"
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">
                  {item.category}
                </p>
                <h3 className="mt-3 font-display text-base font-bold uppercase leading-tight tracking-tight text-foreground">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
