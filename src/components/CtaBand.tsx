import { MessageCircle } from "lucide-react";

import { ActionAnchor, ActionLink } from "@/components/ActionButton";
import { whatsappHref } from "@/data/site";

export function CtaBand({
  title = "LET'S BUILD SOMETHING THAT MATTERS.",
  body = "Tell us about your business and where you want it to be. We'll come back with a clear, practical plan.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-label="Contact call to action" className="relative overflow-hidden border-y border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-gradient"
        aria-hidden="true"
      />
      <div className="container-x relative py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-[1.05] text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">{body}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <ActionLink to="/contact" variant="gold">
            Start a Project
          </ActionLink>
          <ActionLink to="/contact" variant="outline">
            Get a Free Consultation
          </ActionLink>
          <ActionAnchor
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </ActionAnchor>
        </div>
      </div>
    </section>
  );
}
