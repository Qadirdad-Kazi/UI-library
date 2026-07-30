"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionGridGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { GradientButton } from "../components/gradient-button";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta: { label: string; href?: string; onClick?: () => void };
  featured?: boolean;
}

export interface PricingTiersProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  tiers: PricingTier[];
  className?: string;
}

function Check() {
  return (
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
  );
}

export function PricingTiers({
  eyebrow = "Pricing",
  title,
  description,
  tiers,
  compact: compactProp,
  className,
}: PricingTiersProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <ShimmerBadge tone="teal">{eyebrow}</ShimmerBadge>}
          {title && (
            <h2
              className={cn(
                "mt-4 text-balance text-white",
                sectionHeading(compact)
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                "mt-4 text-balance text-white/55",
                sectionSubheading(compact)
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div
          className={cn(
            "grid gap-6",
            sectionGridGap(compact),
            compact
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 md:grid-cols-3"
          )}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-2xl border backdrop-blur-xl transition duration-300",
                compact ? "p-5" : "p-7",
                tier.featured
                  ? "border-teal-400/35 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.16),transparent_60%)] shadow-[0_0_60px_-18px_rgba(45,212,191,0.45)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.035]"
              )}
            >
              {tier.featured && (
                <div className="absolute right-5 top-5">
                  <ShimmerBadge tone="teal">Most popular</ShimmerBadge>
                </div>
              )}
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {tier.name}
              </h3>
              {tier.description && (
                <p className="mt-1.5 text-sm text-white/55">{tier.description}</p>
              )}
              <div className="mt-6 flex items-end gap-1">
                <span
                  className={cn(
                    "font-semibold tracking-tight text-white tabular-nums",
                    compact ? "text-3xl" : "text-5xl"
                  )}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="pb-2 text-sm text-white/45">{tier.period}</span>
                )}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                {tier.featured ? (
                  <GradientButton
                    asChild={Boolean(tier.cta.href)}
                    variant="aurora"
                    size={compact ? "sm" : "md"}
                    className="w-full"
                    onClick={tier.cta.href ? undefined : tier.cta.onClick}
                  >
                    {tier.cta.href ? (
                      <a href={tier.cta.href} onClick={tier.cta.onClick}>
                        {tier.cta.label}
                      </a>
                    ) : (
                      tier.cta.label
                    )}
                  </GradientButton>
                ) : (
                  <a
                    href={tier.cta.href}
                    onClick={tier.cta.onClick}
                    className={cn(
                      "inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium text-white/90 transition duration-300 hover:border-teal-400/30 hover:bg-white/[0.06]",
                      compact ? "h-9 px-4" : "h-11 px-6"
                    )}
                  >
                    {tier.cta.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
