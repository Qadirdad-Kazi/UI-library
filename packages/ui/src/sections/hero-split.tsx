"use client";

import { type ReactNode, type FormEvent } from "react";
import { GradientButton } from "../components/gradient-button";
import { NeonInput } from "../components/neon-input";
import { ShimmerBadge } from "../components/shimmer-badge";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeroHeading,
  sectionInset,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";

export interface HeroSplitProps extends SectionDensityProps {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  bullets?: string[];
  formTitle?: string;
  formCta?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

export function HeroSplit({
  badge = "Early access",
  title,
  description,
  bullets = ["No credit card", "Cancel anytime", "Free for 14 days"],
  formTitle = "Join the waitlist",
  formCta = "Request access",
  onSubmit,
  compact: compactProp,
  className,
}: HeroSplitProps) {
  const compact = useCompactMode(compactProp);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "");
    onSubmit?.(email);
  };

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        compact ? "py-8" : "py-24 md:py-32",
        className
      )}
    >
      <div
        className={cn(
          "absolute -left-40 top-1/4 rounded-full bg-violet-500/15 blur-[120px]",
          compact ? "size-[240px]" : "size-[500px]"
        )}
      />
      <div
        className={cn(
          "absolute -right-40 bottom-0 rounded-full bg-cyan-500/15 blur-[120px]",
          compact ? "size-[240px]" : "size-[500px]"
        )}
      />

      <div
        className={cn(
          "relative z-10 grid w-full",
          sectionInset(compact),
          compact ? "gap-6" : "gap-12 lg:grid-cols-2 lg:items-center"
        )}
      >
        <div>
          {badge && (
            <div className={compact ? "mb-4" : "mb-6"}>
              <ShimmerBadge tone="cyan">{badge}</ShimmerBadge>
            </div>
          )}
          <h1 className={cn("text-balance", sectionHeroHeading(compact))}>
            {title}
          </h1>
          {description && (
            <p className={cn("mt-4 max-w-lg text-balance", sectionSubheading(compact))}>
              {description}
            </p>
          )}
          {bullets && bullets.length > 0 && !compact && (
            <ul className="mt-8 space-y-2 text-sm text-white/70">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                    <svg
                      viewBox="0 0 16 16"
                      className="size-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className={cn(
            "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl",
            compact ? "p-5" : "p-8"
          )}
        >
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
          <h3 className={cn("font-semibold tracking-tight", compact ? "text-lg" : "text-2xl")}>
            {formTitle}
          </h3>
          <p className="mt-1 text-sm text-white/60">
            We&apos;ll send your invite shortly.
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <NeonInput
              label="Work email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              accent="violet"
            />
            {!compact && (
              <NeonInput
                label="Company"
                name="company"
                placeholder="Acme, Inc."
                accent="cyan"
              />
            )}
          </div>
          <GradientButton
            type="submit"
            variant="aurora"
            size={compact ? "md" : "lg"}
            className="mt-5 w-full"
          >
            {formCta}
          </GradientButton>
        </form>
      </div>
    </section>
  );
}
