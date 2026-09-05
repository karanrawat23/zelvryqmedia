import { MessageCircle, Phone } from "lucide-react";

import { site, telHref, whatsappHref } from "@/data/site";

export function WhatsAppFab() {
  return (
    <>
      {/* Desktop / tablet floating action */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ZELVRYQ on WhatsApp"
        className="fixed bottom-5 right-5 z-40 hidden h-13 items-center gap-2 border border-gold/50 bg-background/90 px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold backdrop-blur transition-all hover:bg-gold-gradient hover:text-primary-foreground sm:flex"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Mobile always-visible contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/40 bg-background/95 backdrop-blur sm:hidden">
        <a
          href={telHref}
          aria-label={`Call ZELVRYQ on ${site.phoneDisplay}`}
          className="flex items-center justify-center gap-2 border-r border-gold/30 py-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with ZELVRYQ on WhatsApp"
          className="flex items-center justify-center gap-2 bg-gold-gradient py-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
      </div>
      {/* Spacer so the bar never covers footer content on mobile */}
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </>
  );
}
