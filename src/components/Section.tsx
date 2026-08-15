import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("relative py-20 md:py-28", className)}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Title = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Title className="mt-4 text-3xl font-extrabold uppercase leading-[1.05] text-foreground sm:text-4xl md:text-5xl">
        {title}
      </Title>
      <span
        className={cn(
          "mt-6 block h-px w-24 bg-gold-gradient",
          align === "center" && "mx-auto",
        )}
      />
      {body && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}

export function PlaceholderBadge({ label = "PLACEHOLDER — REPLACE BEFORE LAUNCH" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-dashed border-gold/50 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gold">
      {label}
    </span>
  );
}
