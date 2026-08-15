import { createFileRoute, Link } from "@tanstack/react-router";

import { ActionLink } from "@/components/ActionButton";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { ProcessTimeline } from "@/components/HomeSections";
import { Section, SectionHeading } from "@/components/Section";
import { faqs } from "@/data/content";
import { pillars, servicesByPillar } from "@/data/services";

const title = "Services — Digital, Creative, Web & Growth | ZELVRYQ";
const description =
  "Explore ZELVRYQ services: digital marketing, SEO, Google and Meta Ads, branding, content, websites, e-commerce, applications and growth strategy.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="FOUR PILLARS. ONE PARTNER."
        body="Strategy, creative, technology and performance handled by one team — so your marketing, brand and website finally pull in the same direction."
      >
        <ActionLink to="/contact" variant="gold">
          Start a Project
        </ActionLink>
        <ActionLink to="/packages" variant="outline">
          View Packages
        </ActionLink>
      </PageHero>

      {pillars.map((pillar, index) => (
        <Section
          key={pillar.id}
          id={pillar.id}
          className={index % 2 === 1 ? "border-t border-border bg-surface/30" : "border-t border-border"}
        >
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow={pillar.kicker} title={pillar.title} body={pillar.description} />
              <div className="mt-8">
                <ActionLink to="/contact" variant="outline" size="sm">
                  Discuss {pillar.title}
                </ActionLink>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {pillar.services.map((service) => (
                  <li
                    key={service}
                    className="bg-background px-5 py-4 text-sm text-muted-foreground"
                  >
                    {service}
                  </li>
                ))}
              </ul>

              {servicesByPillar(pillar.id).length > 0 && (
                <div className="mt-8">
                  <p className="eyebrow">Dedicated service pages</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {servicesByPillar(pillar.id).map((service) => (
                      <Link
                        key={service.slug}
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="border border-border px-3 py-2 text-xs uppercase tracking-[0.12em] text-foreground transition-colors hover:border-gold hover:text-gold"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Section>
      ))}

      <ProcessTimeline />

      <Section className="border-t border-border">
        <SectionHeading eyebrow="FAQ" title="SERVICE QUESTIONS" />
        <FaqList items={faqs} />
      </Section>

      <CtaBand />
    </>
  );
}
