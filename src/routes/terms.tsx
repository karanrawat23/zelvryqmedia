import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section } from "@/components/Section";
import { site } from "@/data/site";

const title = "Terms, Refund & Cancellation Policy | ZELVRYQ";
const description =
  "The terms under which ZELVRYQ provides digital marketing, branding, web development and technology services, including refund and cancellation terms.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const termsSections = [
  {
    id: "terms",
    heading: "Terms & Conditions",
    body: [
      "By engaging ZELVRYQ you agree to these terms alongside the specific scope, timeline and commercials recorded in your proposal or agreement.",
      "Scope of work, deliverables and timelines are defined per project. Anything outside the agreed scope is treated as a new request and quoted separately.",
      "Client responsibilities include timely feedback, approvals, content and access to required accounts and platforms. Delays in these may shift delivery timelines.",
      "Ownership of final approved deliverables transfers to the client on full payment. ZELVRYQ retains the right to display non-confidential work in its portfolio unless agreed otherwise in writing.",
      "We do not guarantee specific rankings, reach, lead volumes or revenue outcomes, as these depend on platforms, market conditions and factors outside our control.",
    ],
  },
  {
    id: "payments",
    heading: "Payments",
    body: [
      "Projects typically begin with an advance, with the balance invoiced against agreed milestones. Retainers are billed monthly in advance.",
      "Advertising media spend, domains, hosting, licences and other third-party costs are separate from our fees and are either paid directly by the client or billed at actual.",
      "Applicable taxes are added as per Indian regulations. International invoices are raised in the agreed currency.",
    ],
  },
  {
    id: "refunds",
    heading: "Refund & Cancellation Policy",
    body: [
      "Either party may cancel an engagement with written notice. For retainers, we ask for 30 days' notice so work can be closed out cleanly.",
      "Advance amounts cover work already scheduled and performed and are non-refundable once production has begun. Where work has not started, the advance is refundable minus any third-party costs already incurred.",
      "Completed and delivered work — creative, code, content or campaign management already executed — is not eligible for refund.",
      "On cancellation we hand over completed deliverables and account access for work paid in full.",
    ],
  },
  {
    id: "liability",
    heading: "Liability",
    body: [
      "Our total liability for any claim relating to an engagement is limited to the fees paid for the specific deliverable in question. We are not liable for indirect or consequential losses, including lost profits or platform penalties outside our control.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: [
      `Questions about these terms can be sent to ${site.email} or ${site.phoneDisplay}. ZELVRYQ operates from ${site.location}.`,
    ],
  },
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="TERMS & POLICIES"
        body="Our service terms, payment structure, and refund and cancellation policy in plain language."
      />

      <Section className="border-t border-border">
        <div className="max-w-3xl">
          <PlaceholderBadge label="Template terms — have them reviewed legally before launch" />
          <div className="mt-12 space-y-12">
            {termsSections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                  {section.heading}
                </h2>
                <span className="mt-4 block h-px w-16 bg-gold-gradient" />
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
