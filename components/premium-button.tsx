import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
  target?: string;
};

export function PremiumButton({ href, children, variant = "light", className, target }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "group inline-flex h-12 items-center justify-center border px-5 mono text-xs uppercase tracking-[0.12em] transition duration-300",
        variant === "dark"
          ? "border-black/25 text-black hover:bg-black hover:text-white"
          : "border-white/25 text-white hover:bg-white hover:text-black",
        className,
      )}
    >
      <span>{children}</span>
      <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}
