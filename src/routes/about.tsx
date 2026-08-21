import { createFileRoute } from "@tanstack/react-router";

import { ActionLink } from "@/components/ActionButton";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import {
  ClientLogos,
  CompanyStory,
  ProcessTimeline,
  Testimonials,
  WhyZelvryq,
} from "@/components/HomeSections";
import { Section, SectionHeading } from "@/components/Section";
import { site } from "@/data/site";

const title = "About ZELVRYQ — Digital, Creative, Web & Growth Agency";
const description =
  "ZELVRYQ is a full-service digital marketing, branding, creative and technology agency based in Dehradun, India, working with businesses globally.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About ZELVRYQ"
        title="A DIGITAL PARTNER, NOT A VENDOR."
        body="ZELVRYQ is a full-service digital marketing, branding, creative and technology agency. We bring strategy, design, engineering and performance together so brands can grow with intent."
      >
        <ActionLink to="/contact" variant="gold">
          Get a Free Consultation
        </ActionLink>
        <ActionLink to="/work" variant="outline">
          See Our Work
        </ActionLink>
      </PageHero>

      <Section className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { label: "Based in", value: "Dehradun, Uttarakhand" },
            { label: "Working with", value: "India + International" },
            { label: "Established", value: site.since.replace("SINCE ", "") },
          ].map((item) => (
            <div key={item.label} className="border-l border-gold/40 pl-5">
              <p className="eyebrow">{item.label}</p>
              <p className="mt-3 font-display text-2xl font-extrabold uppercase text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {site.globalLine} Our four pillars — {site.positioning.join(", ")} — describe how we work:
          marketing that answers to objectives, creative that earns attention, technology that
          actually ships, and growth measured honestly.
        </p>
      </Section>

      <CompanyStory />
      <WhyZelvryq />
      <ProcessTimeline />
      <Testimonials />
      <ClientLogos />
      <CtaBand />
    </>
  );
}
