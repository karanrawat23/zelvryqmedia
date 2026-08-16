import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section } from "@/components/Section";
import { site } from "@/data/site";

const title = "Privacy Policy | ZELVRYQ";
const description =
  "How ZELVRYQ collects, uses and protects the information you share through our website and enquiry forms.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "When you submit an enquiry we collect the details you provide: name, email address, phone number, company name, website, industry, budget range and your message.",
      "We also collect standard technical information such as browser type, device type, approximate location and pages visited, through analytics tools.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To respond to your enquiry, prepare proposals and deliver agreed services.",
      "To improve our website, content and service offering.",
      "To send occasional updates about our services, only where you have expressed interest. You can opt out at any time.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    body: [
      "Our website may use cookies and third-party analytics or advertising tools to understand traffic and campaign performance. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "Sharing Of Information",
    body: [
      "We do not sell your personal information. We share it only with service providers who help us operate the business (for example hosting, email and analytics providers), or where required by law.",
    ],
  },
  {
    heading: "Data Retention & Security",
    body: [
      "Enquiry and project information is retained for as long as needed for business and legal purposes. We apply reasonable technical and organisational measures to protect it, though no method of transmission over the internet is fully secure.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details below.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `For any privacy question, contact ZELVRYQ at ${site.phoneDisplay} or ${site.email}. Registered activity is based in ${site.location}.`,
    ],
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="PRIVACY POLICY"
        body="This policy explains what information ZELVRYQ collects, why we collect it and how it is handled."
      />

      <Section className="border-t border-border">
        <div className="max-w-3xl">
          <PlaceholderBadge label="Template policy — have it reviewed legally before launch" />
          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
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
