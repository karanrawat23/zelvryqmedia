import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { ActionLink } from "@/components/ActionButton";
import { ProjectCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section, SectionHeading } from "@/components/Section";
import { projects } from "@/data/content";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study unavailable | ZELVRYQ" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Case Study | ZELVRYQ`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:url", content: `/work/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: WorkDetail,
});

function WorkDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  const blocks = [
    { label: "The Challenge", body: project.challenge },
    { label: "Our Approach", body: project.approach },
    { label: "The Solution", body: project.solution },
    { label: "The Result", body: project.result },
  ];

  return (
    <>
      <PageHero eyebrow={project.industry} title={project.name} body={project.summary}>
        <ActionLink to="/contact" variant="gold">
          Start a Similar Project
        </ActionLink>
        <ActionLink to="/work" variant="outline">
          All Case Studies
        </ActionLink>
      </PageHero>

      <Section className="border-t border-border">
        {project.isDemo && (
          <div className="mb-10">
            <PlaceholderBadge label="Demo case study — no real client data" />
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            {blocks.map((block) => (
              <div key={block.label} className="border-l border-gold/40 pl-6">
                <p className="eyebrow">{block.label}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          <aside className="surface-panel h-fit p-6">
            <p className="eyebrow">Project Detail</p>
            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">
                  Industry
                </dt>
                <dd className="mt-2 text-muted-foreground">{project.industry}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">
                  Services
                </dt>
                <dd className="mt-2 space-y-1 text-muted-foreground">
                  {project.services.map((service) => (
                    <p key={service}>{service}</p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">
                  Technology
                </dt>
                <dd className="mt-2 space-y-1 text-muted-foreground">
                  {project.technology.map((tech) => (
                    <p key={tech}>{tech}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <Link
          to="/work"
          className="mt-16 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-border bg-surface/30">
          <SectionHeading eyebrow="More Work" title="RELATED PROJECTS" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
