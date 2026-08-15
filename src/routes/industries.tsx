import { createFileRoute } from "@tanstack/react-router";

import { ActionLink } from "@/components/ActionButton";
import { CtaBand } from "@/components/CtaBand";
import { IndustryCard } from "@/components/Cards";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import { industries } from "@/data/content";

const title = "Industries We Help Grow | ZELVRYQ";
const description =
  "ZELVRYQ works with education, hospitality, real estate, retail, e-commerce, startups, healthcare, technology and professional service businesses in India and abroad.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/industries" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="INDUSTRIES WE HELP GROW"
        body="These are the sectors we are equipped to serve. Each engagement starts by learning your specific market — we do not claim inherited expertise."
      >
        <ActionLink to="/contact" variant="gold">
          Discuss Your Industry
        </ActionLink>
      </PageHero>

      <Section className="border-t border-border">
        <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} {...industry} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="How we approach a new sector"
          title="LEARN, THEN BUILD"
          body="Before recommending a channel or a design direction, we study the market, the buying journey and the competition in your category."
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              title: "MARKET STUDY",
              body: "Audience, competitors, pricing signals and where attention already exists.",
            },
            {
              title: "JOURNEY MAPPING",
              body: "How customers in your sector actually research, compare and decide.",
            },
            {
              title: "CHANNEL FIT",
              body: "Which channels justify budget for your business — and which do not.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-background p-7">
              <h3 className="font-display text-base font-bold uppercase text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
