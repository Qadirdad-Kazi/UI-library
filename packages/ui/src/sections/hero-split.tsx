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
        aria-hidden
        className={cn(
          "pointer-events-none absolute -left-40 top-1/4 rounded-full bg-teal-400/15 blur-[120px]",
          compact ? "size-[220px]" : "size-[480px]"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-40 bottom-0 rounded-full bg-cyan-500/12 blur-[120px]",
          compact ? "size-[220px]" : "size-[480px]"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-1/4 top-0 rounded-full bg-violet-500/8 blur-[100px]",
          compact ? "hidden" : "size-[360px]"
        )}
      />

      <div
        className={cn(
          "relative z-10 grid w-full",
          sectionInset(compact),
          compact ? "gap-6" : "gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
        )}
      >
        <div>
          {badge && (
            <div className={compact ? "mb-4" : "mb-6"}>
              <ShimmerBadge tone="teal">{badge}</ShimmerBadge>
            </div>
          )}
          <h1
            className={cn(
              "text-balance text-white",
              sectionHeroHeading(compact)
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-5 max-w-lg text-balance text-white/55",
                sectionSubheading(compact)
              )}
            >
              {description}
            </p>
          )}
          {bullets && bullets.length > 0 && !compact && (
            <ul className="mt-9 space-y-3 text-sm text-white/70">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full border border-teal-400/35 bg-teal-400/10 text-teal-300">
                    <svg
                      viewBox="0 0 16 16"
                      className="size-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
            "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition hover:border-white/[0.14]",
            compact ? "p-5" : "p-8"
          )}
        >
          <div
            aria-hidden
            className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-teal-400/55 to-transparent"
          />
          <h3
            className={cn(
              "font-semibold tracking-tight text-white",
              compact ? "text-lg" : "text-2xl"
            )}
          >
            {formTitle}
          </h3>
          <p className="mt-1.5 text-sm text-white/55">
            We&apos;ll send your invite shortly.
          </p>
          <div className="mt-5 flex flex-col gap-4">
            <NeonInput
              label="Work email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              accent="teal"
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
            className="mt-6 w-full"
          >
            {formCta}
          </GradientButton>
        </form>
      </div>
    </section>
  );
}
