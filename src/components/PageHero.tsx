import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-5 max-w-4xl text-4xl font-extrabold uppercase leading-[1.03] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <span className="animate-line mt-8 block h-px w-40 bg-gold-gradient" />
        {body && (
          <p className="animate-rise mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        )}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
