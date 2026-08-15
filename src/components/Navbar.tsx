import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLock } from "@/components/Brand";
import { ActionAnchor, ActionLink } from "@/components/ActionButton";
import { nav, whatsappHref } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <BrandLock compact={scrolled} />

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-[0.68rem] font-bold tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionLink to="/contact" variant="ghost" size="sm">
            Get a Free Consultation
          </ActionLink>
          <ActionLink to="/contact" variant="gold" size="sm">
            Start a Project
          </ActionLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold xl:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile / tablet slide-out */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background transition-all duration-400 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <BrandLock compact />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="container-x flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-8"
        >
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-2xl font-extrabold tracking-tight text-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="container-x grid gap-3 pb-10">
          <ActionLink to="/contact" onClick={() => setOpen(false)} variant="gold">
            Start a Project
          </ActionLink>
          <ActionAnchor
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </ActionAnchor>
        </div>
      </div>
    </header>
  );
}
