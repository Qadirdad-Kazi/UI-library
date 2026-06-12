"use client";

import { type ReactNode } from "react";
import { cn } from "../utils/cn";
import { GradientButton } from "../components/gradient-button";

export interface NavbarFloatingLink {
  label: string;
  href: string;
}

export interface NavbarFloatingProps {
  links?: NavbarFloatingLink[];
  cta?: { label: string; href?: string; onClick?: () => void };
  /** When true, renders inline instead of fixed positioning */
  embedded?: boolean;
  className?: string;
}

export function NavbarFloating({
  links = [],
  cta,
  embedded = false,
  className,
}: NavbarFloatingProps) {
  return (
    <nav
      className={cn(
        embedded
          ? "relative w-full"
          : "fixed left-1/2 top-6 z-[100] -translate-x-1/2",
        "flex items-center gap-1 rounded-full border border-white/10 bg-[#0a0a14]/80 px-2 py-1.5 shadow-2xl backdrop-blur-xl",
        embedded && "mx-auto w-fit",
        className
      )}
      aria-label="Main navigation"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full px-4 py-1.5 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
        >
          {link.label}
        </a>
      ))}
      {cta && (
        <a href={cta.href} onClick={cta.onClick} className="ml-1">
          <GradientButton variant="aurora" size="sm">
            {cta.label}
          </GradientButton>
        </a>
      )}
    </nav>
  );
}
