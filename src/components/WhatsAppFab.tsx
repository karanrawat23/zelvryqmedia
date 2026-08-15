import { MessageCircle } from "lucide-react";

import { whatsappHref } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZELVRYQ on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 items-center gap-2 border border-gold/50 bg-background/90 px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold backdrop-blur transition-all hover:bg-gold-gradient hover:text-primary-foreground"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
