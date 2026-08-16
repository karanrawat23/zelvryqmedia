import { createFileRoute } from "@tanstack/react-router";

import { ActionLink } from "@/components/ActionButton";
import { PackageGroupBlock } from "@/components/Cards";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section, SectionHeading } from "@/components/Section";
import { faqs, packageGroups } from "@/data/content";

const title = "Packages & Pricing — Marketing, SEO, Web & Ads | ZELVRYQ";
const description =
  "Transparent starting points for ZELVRYQ social media, SEO, website and advertising engagements. Every scope is tailored after a free consultation.";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/packages" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="CLEAR SCOPES. NO SURPRISES."
        body="Published packages are starting points. Most engagements are scoped around the business after a consultation, so you only pay for what actually moves the objective."
      >
        <ActionLink to="/contact" variant="gold">
          Request a Custom Quote
        </ActionLink>
        <ActionLink to="/services" variant="outline">
          Explore Services
        </ActionLink>
      </PageHero>

      <Section className="border-t border-border">
        <div className="flex flex-wrap items-center gap-4">
          <PlaceholderBadge label="Placeholder pricing — replace before launch" />
        </div>
        <div className="mt-14 space-y-20">
          {packageGroups.map((group) => (
            <PackageGroupBlock key={group.id} group={group} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Good To Know"
          title="WHAT PRICING DOES AND DOESN'T INCLUDE"
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            "Advertising media spend is paid directly to Google or Meta and is not included in management fees.",
            "Third-party costs such as domains, hosting, premium plugins and stock assets are billed at actual.",
            "We do not guarantee rankings or fixed lead volumes — no agency can control platform algorithms.",
            "Retainers are monthly, with a clear scope of deliverables agreed before work starts.",
          ].map((item) => (
            <li key={item} className="surface-panel p-6 text-sm leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="FAQ" title="PACKAGE QUESTIONS" />
        <FaqList items={faqs.slice(0, 6)} />
      </Section>

      <CtaBand
        title="NOT SURE WHICH PACKAGE FITS?"
        body="Tell us your goals and budget range. We'll recommend the smallest scope that can realistically get you there."
      />
    </>
  );
}
