import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ActionAnchor } from "@/components/ActionButton";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge, Section, SectionHeading } from "@/components/Section";
import { faqs } from "@/data/content";
import { site, telHref, whatsappHref } from "@/data/site";

const title = "Contact ZELVRYQ — Start a Project or Get a Consultation";
const description =
  "Talk to ZELVRYQ about digital marketing, branding, web development or growth. Based in Dehradun, India, working with businesses globally.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          mainEntity: {
            "@type": "ProfessionalService",
            name: site.name,
            telephone: site.phoneDisplay,
            areaServed: ["India", "Worldwide"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dehradun",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="LET'S TALK ABOUT YOUR GROWTH."
        body="Share a few details about your business and what you want to achieve. We'll come back with a clear, practical plan — no obligation."
      >
        <ActionAnchor href={telHref} variant="gold">
          <Phone className="h-4 w-4" /> Call {site.phoneDisplay}
        </ActionAnchor>
        <ActionAnchor
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </ActionAnchor>
      </PageHero>

      <Section className="border-t border-border">
        <div className="grid gap-14 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeading
              eyebrow="Project Enquiry"
              title="TELL US WHAT YOU NEED"
              body="The more context you give, the more specific our first response can be."
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="surface-panel p-7">
              <p className="eyebrow">Direct Contact</p>
              <ul className="mt-6 space-y-6 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-foreground">Phone / WhatsApp</p>
                    <a
                      href={telHref}
                      className="text-muted-foreground transition-colors hover:text-gold"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-foreground">Email</p>
                    <p className="text-muted-foreground">{site.email}</p>
                    {site.emailIsPlaceholder && (
                      <span className="mt-2 inline-block">
                        <PlaceholderBadge label="Placeholder email" />
                      </span>
                    )}
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-foreground">Location</p>
                    <p className="text-muted-foreground">{site.location}</p>
                    <p className="mt-1 text-muted-foreground">{site.globalLine}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-foreground">Response Time</p>
                    <p className="text-muted-foreground">
                      Within one working day, Monday to Saturday.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="surface-panel p-7">
              <p className="eyebrow">What Happens Next</p>
              <ol className="mt-6 space-y-4 text-sm text-muted-foreground">
                {[
                  "We review your enquiry and clarify anything missing.",
                  "A free consultation call to understand goals and constraints.",
                  "A written scope, timeline and proposal.",
                  "Kick-off once the scope is approved.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-display text-xs font-bold text-gold">0{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="FAQ" title="BEFORE YOU WRITE IN" />
        <FaqList items={faqs.slice(-5)} />
      </Section>
    </>
  );
}
