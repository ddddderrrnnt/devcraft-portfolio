import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "dark";
  className?: string;
  target?: string;
};

export function PremiumButton({ href, children, variant = "gold", className, target }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl px-6 text-sm font-semibold transition duration-500",
        variant === "gold"
          ? "bg-gold-gradient text-black shadow-gold hover:shadow-[0_22px_100px_rgba(245,214,124,.28)]"
          : "border border-white/10 bg-white/[.035] text-white hover:border-gold/40 hover:bg-gold/10 hover:text-champagne",
        className,
      )}
    >
      <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-white/30 opacity-0 blur-md transition-opacity duration-500 group-hover:animate-shimmer group-hover:opacity-100" />
      <span className="relative z-10 inline-flex items-center gap-3">
        {children}
        <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
