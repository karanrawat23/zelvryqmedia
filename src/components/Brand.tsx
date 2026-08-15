import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { site } from "@/data/site";

export function ZMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="ZELVRYQ symbol"
      className={cn("h-8 w-8", className)}
    >
      <defs>
        <linearGradient id="zq-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.09 78)" />
          <stop offset="50%" stopColor="oklch(0.88 0.11 92)" />
          <stop offset="100%" stopColor="oklch(0.66 0.1 82)" />
        </linearGradient>
      </defs>
      <path
        d="M6 6h36l-9 10H24l14 16v10H2L11 32h9L6 16z"
        fill="url(#zq-gold)"
      />
    </svg>
  );
}

export function BrandLock({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="ZELVRYQ home">
      <ZMark className={compact ? "h-7 w-7" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-[0.22em] text-foreground">
          {site.name}
        </span>
        {!compact && (
          <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.34em] text-muted-foreground">
            {site.since}
          </span>
        )}
      </span>
    </Link>
  );
}
