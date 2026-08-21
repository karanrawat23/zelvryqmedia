import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ZMark } from "@/components/Brand";
import { PlaceholderBadge } from "@/components/Section";
import { legalLinks, nav, site, telHref, whatsappHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <ZMark className="h-10 w-10" />
            <span className="font-display text-xl font-extrabold tracking-[0.22em] text-foreground">
              {site.name}
            </span>
          </div>
          <p className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-gold">
            {site.tagline}
          </p>
          <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            {site.location}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{site.market}</p>
          <p className="mt-6 max-w-sm text-xs leading-relaxed text-muted-foreground">
            {site.globalLine}
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="eyebrow">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={telHref}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                WhatsApp {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <Instagram className="h-4 w-4 text-gold" aria-hidden="true" />
              Instagram
              <PlaceholderBadge label="Placeholder" />
            </li>
            <li className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <Linkedin className="h-4 w-4 text-gold" aria-hidden="true" />
              LinkedIn
              <PlaceholderBadge label="Placeholder" />
            </li>
          </ul>

          <h2 className="eyebrow mt-8">Legal</h2>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.since} · Dehradun, India · Working globally</p>
        </div>
      </div>
    </footer>
  );
}
