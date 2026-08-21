import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ActionLink } from "@/components/ActionButton";
import { CtaBand } from "@/components/CtaBand";
import { IndustryCard, PackageGroupBlock, PillarCard, ProjectCard } from "@/components/Cards";
import { FaqList } from "@/components/FaqList";
import {
  ClientLogos,
  CompanyStory,
  InsightsPreview,
  ProcessTimeline,
  Testimonials,
  ValueStrip,
  WhyZelvryq,
} from "@/components/HomeSections";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { faqs, industries, insights, packageGroups, projects } from "@/data/content";
import { pillars, servicePages, servicesByPillar } from "@/data/services";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZELVRYQ | Digital Marketing, Branding & Technology Agency" },
      { name: "description", content: site.description },
      {
        property: "og:title",
        content: "ZELVRYQ | Digital Marketing, Branding & Technology Agency",
      },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full opacity-12 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-16 py-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-rise">
            Digital · Creative · Web · Growth — {site.location}
          </p>
          <h1 className="animate-rise mt-6 text-[2.6rem] font-extrabold uppercase leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
            Make Your <span className="text-gold-gradient">Brand</span> Matter.
          </h1>
          <span className="animate-line mt-8 block h-px w-56 bg-gold-gradient" />
          <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We build powerful digital experiences, brands and growth strategies that help businesses
            stand out, connect with their audience and grow.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3">
            <ActionLink to="/contact" variant="gold" size="lg">
              Start a Project <ArrowRight className="h-4 w-4" />
            </ActionLink>
            <ActionLink to="/services" variant="outline" size="lg">
              Explore Our Services
            </ActionLink>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {site.globalLine}
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              className="animate-spin-slow absolute inset-0 rounded-full border border-gold/25"
              aria-hidden="true"
            />
            <div
              className="absolute inset-8 rotate-45 border border-border"
              aria-hidden="true"
            />
            <div
              className="absolute inset-16 border border-gold/20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="h-32 w-32" role="img" aria-label="ZELVRYQ symbol">
                <defs>
                  <linearGradient id="zq-hero-gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.6 0.09 78)" />
                    <stop offset="50%" stopColor="oklch(0.9 0.11 92)" />
                    <stop offset="100%" stopColor="oklch(0.64 0.1 82)" />
                  </linearGradient>
                </defs>
                <path d="M6 6h36l-9 10H24l14 16v10H2L11 32h9L6 16z" fill="url(#zq-hero-gold)" />
              </svg>
            </div>
            {site.positioning.map((word, i) => (
              <span
                key={word}
                className="absolute text-[0.6rem] font-bold uppercase tracking-[0.28em] text-muted-foreground"
                style={{
                  top: i === 0 ? "2%" : i === 2 ? "auto" : "50%",
                  bottom: i === 2 ? "2%" : "auto",
                  left: i === 1 ? "auto" : i === 3 ? "0" : "50%",
                  right: i === 1 ? "0" : "auto",
                  transform: i % 2 === 0 ? "translateX(-50%)" : "translateY(-50%)",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Services"
          title="WHAT WE DO"
          body="From building your brand to accelerating its growth, we bring strategy, creativity and technology together under one roof."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 80}>
              <PillarCard
                pillar={pillar}
                index={i}
                preview={servicesByPillar(pillar.id)
                  .slice(0, 3)
                  .map((s) => ({ slug: s.slug, title: s.title }))}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <ActionLink to="/services" variant="gold">
            Explore All Services
          </ActionLink>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Featured services"
          title="WHERE WE'RE ASKED MOST"
          body="Dedicated pages covering scope, process, benefits and answers for each service."
        />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {servicePages.slice(0, 9).map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group bg-background p-7 transition-colors hover:bg-surface/70"
            >
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-gold">
                {service.pillar}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-foreground group-hover:text-gold">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.hero}</p>
            </Link>
          ))}
        </div>
      </Section>

      <WhyZelvryq />

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Industries"
          title="INDUSTRIES WE HELP GROW"
          body="Sectors we are equipped to serve across India and internationally."
        />
        <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.slice(0, 9).map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
          ))}
        </div>
        <div className="mt-10">
          <ActionLink to="/industries" variant="outline">
            All industries
          </ActionLink>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Selected work"
          title="OUR WORK"
          body="Case study structures shown with clearly labelled demo projects. Real client work replaces these as engagements complete."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ActionLink to="/work" variant="outline">
            View all work
          </ActionLink>
        </div>
      </Section>

      <ProcessTimeline />

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Packages"
          title="ENGAGEMENT PACKAGES"
          body="Starting structures for social, SEO, websites and ads. Prices shown are placeholders until final pricing is confirmed."
        />
        <div className="mt-12 space-y-16">
          {packageGroups.slice(0, 2).map((group) => (
            <PackageGroupBlock key={group.id} group={group} />
          ))}
        </div>
        <div className="mt-12">
          <ActionLink to="/packages" variant="gold">
            See all packages
          </ActionLink>
        </div>
      </Section>

      <CompanyStory />
      <Testimonials />
      <ClientLogos />
      <InsightsPreview items={insights.slice(0, 3)} />

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="FAQ" title="QUESTIONS, ANSWERED" />
        <FaqList items={faqs.slice(0, 7)} />
      </Section>

      <CtaBand title="MAKE YOUR BRAND MATTER." />
    </>
  );
}
