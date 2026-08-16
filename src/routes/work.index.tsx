import { createFileRoute } from "@tanstack/react-router";

import { ActionLink } from "@/components/ActionButton";
import { ProjectCard } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section, SectionHeading } from "@/components/Section";
import { industries, processSteps, projects } from "@/data/content";

const title = "Our Work — Case Studies | ZELVRYQ";
const description =
  "Selected ZELVRYQ projects across education, hospitality, real estate and e-commerce — brand, website, content and performance programmes.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="WORK THAT MOVES THE BUSINESS."
        body="Each engagement starts with an objective and ends with something measurable. Below is how we structure that work — case studies are being published as live engagements complete."
      >
        <ActionLink to="/contact" variant="gold">
          Start a Project
        </ActionLink>
        <ActionLink to="/services" variant="outline">
          Explore Services
        </ActionLink>
      </PageHero>

      <Section className="border-t border-border">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeading
            eyebrow="Case Studies"
            title="SELECTED PROJECTS"
            body="The projects below are clearly labelled demonstrations of our delivery structure. No client names, metrics or results shown are real."
          />
        </div>
        <div className="mt-8">
          <PlaceholderBadge label="Demo case studies — replace before launch" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="How We Deliver"
          title="A REPEATABLE PROCESS"
          body="Every project runs through the same six stages, scaled to the size of the engagement."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.no} className="surface-panel p-6">
              <p className="font-display text-3xl font-extrabold text-foreground/15">{step.no}</p>
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Sectors"
          title="INDUSTRIES WE WORK ACROSS"
        />
        <ul className="mt-10 flex flex-wrap gap-2">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="border border-border px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground"
            >
              {industry.name}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
