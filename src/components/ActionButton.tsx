import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gold-gradient text-primary-foreground hover:brightness-110 hover:shadow-[var(--shadow-gold)]",
        outline:
          "border border-border text-foreground hover:border-gold hover:text-gold",
        ghost: "text-muted-foreground hover:text-gold",
        solid:
          "bg-foreground text-background hover:bg-gold hover:text-primary-foreground",
      },
      size: {
        md: "h-12 px-7",
        sm: "h-10 px-5 text-[0.68rem]",
        lg: "h-14 px-9",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type Common = VariantProps<typeof actionVariants> & {
  className?: string;
  children: ReactNode;
};

export function ActionLink({
  to,
  variant,
  size,
  className,
  children,
  ...rest
}: Common & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "children">) {
  return (
    <Link to={to} className={cn(actionVariants({ variant, size }), className)} {...rest}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  variant,
  size,
  className,
  children,
  ...rest
}: Common & ComponentProps<"a">) {
  return (
    <a className={cn(actionVariants({ variant, size }), className)} {...rest}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant,
  size,
  className,
  children,
  ...rest
}: Common & ComponentProps<"button">) {
  return (
    <button className={cn(actionVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
