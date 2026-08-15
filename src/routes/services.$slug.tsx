import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";

import { ActionLink } from "@/components/ActionButton";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { processSteps, projects } from "@/data/content";
import { getServicePage, servicePages } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServicePage(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | ZELVRYQ" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.metaTitle },
        { property: "og:description", content: service.metaDescription },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: { "@type": "ProfessionalService", name: "ZELVRYQ" },
            areaServed: ["India", "Worldwide"],
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = servicePages.filter(
    (item) => item.pillar === service.pillar && item.slug !== service.slug,
  );
  const relevantWork = projects.slice(0, 2);

  return (
    <>
      <PageHero eyebrow={`${service.pillar} · Service`} title={service.title} body={service.hero}>
        <ActionLink to="/contact" variant="gold">
          Start a Project
        </ActionLink>
        <ActionLink to="/services" variant="outline">
          All Services
        </ActionLink>
      </PageHero>

      <Section className="border-t border-border">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground md:text-xl">
          {service.intro}
        </p>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The problem" title="WHAT USUALLY GOES WRONG" />
            <ul className="mt-8 space-y-4">
              {service.problem.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground md:text-base">
                  <X className="mt-1 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Our solution" title="HOW WE FIX IT" />
            <ul className="mt-8 space-y-4">
              {service.solution.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Scope" title="WHAT'S INCLUDED" />
        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {service.includes.map((item) => (
            <li key={item} className="bg-background p-6 text-sm text-muted-foreground">
              <span className="mb-3 block h-px w-8 bg-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Process"
          title="HOW THIS ENGAGEMENT RUNS"
          body="Every engagement follows the same six-step model, scaled to the size of the project."
        />
        <ol className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.no} className="bg-background p-7">
              <span className="font-display text-3xl font-extrabold text-foreground/10">
                {step.no}
              </span>
              <h3 className="mt-2 font-display text-base font-bold uppercase text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="Benefits" title="WHAT YOU GET OUT OF IT" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {service.benefits.map((benefit) => (
            <div key={benefit.title} className="surface-panel p-7">
              <h3 className="font-display text-lg font-bold uppercase text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{benefit.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Relevant work"
          title="RELATED CASE STUDIES"
          body="Demo case studies shown until verified client work is published."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {relevantWork.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="FAQ" title={`${service.title} — FAQ`} />
        <FaqList items={service.faqs} />
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-border bg-surface/30">
          <SectionHeading eyebrow="Related" title="OTHER SERVICES IN THIS PILLAR" />
          <div className="mt-10 flex flex-wrap gap-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="inline-flex items-center gap-2 border border-border px-4 py-3 text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                {item.title} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand title="HAVE A SIMILAR CHALLENGE? LET'S TALK." />
    </>
  );
}
