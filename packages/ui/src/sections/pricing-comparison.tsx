"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeaderGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { ShimmerBadge } from "../components/shimmer-badge";
import { GradientButton } from "../components/gradient-button";

export interface PricingComparisonPlan {
  name: string;
  price: string;
  ctaLabel?: string;
  featured?: boolean;
}

export interface PricingComparisonRow {
  feature: string;
  values: string[];
}

export interface PricingComparisonProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  plans: PricingComparisonPlan[];
  rows: PricingComparisonRow[];
  className?: string;
}

export function PricingComparison({
  eyebrow = "Compare plans",
  title = "Pick the right plan for your stage.",
  description,
  plans,
  rows,
  compact: compactProp,
  className,
}: PricingComparisonProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[320px] max-w-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45,212,191,0.1) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact)}>
        <div className={cn("mx-auto max-w-2xl text-center", sectionHeaderGap(compact))}>
          {eyebrow && <ShimmerBadge tone="teal">{eyebrow}</ShimmerBadge>}
          <h2
            className={cn(
              "mt-4 text-balance text-white",
              sectionHeading(compact)
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-3 text-balance text-white/55",
                sectionSubheading(compact)
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div
          className={cn(
            "overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm",
            compact && "text-sm"
          )}
        >
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th
                  className={cn(
                    "min-w-[150px] px-5 text-left text-xs uppercase tracking-[0.18em] text-white/40",
                    compact ? "py-3" : "py-4"
                  )}
                >
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={cn(
                      "min-w-[150px] px-5 text-left",
                      compact ? "py-3" : "py-4",
                      plan.featured && "bg-teal-500/[0.08]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">
                        {plan.name}
                      </span>
                      {plan.featured && (
                        <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-teal-300">
                          Popular
                        </span>
                      )}
                    </div>
                    <div
                      className={cn(
                        "mt-0.5 font-semibold text-white",
                        compact ? "text-xl" : "text-2xl"
                      )}
                    >
                      {plan.price}
                    </div>
                    {plan.ctaLabel && (
                      <div className="mt-3">
                        {plan.featured ? (
                          <GradientButton size="sm" variant="aurora">
                            {plan.ctaLabel}
                          </GradientButton>
                        ) : (
                          <button
                            type="button"
                            className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                          >
                            {plan.ctaLabel}
                          </button>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={`${row.feature}-${idx}`}
                  className="border-b border-white/10 transition-colors last:border-b-0 hover:bg-white/[0.02]"
                >
                  <td
                    className={cn(
                      "min-w-[150px] px-5 text-white/85",
                      compact ? "py-3" : "py-4"
                    )}
                  >
                    {row.feature}
                  </td>
                  {row.values.map((value, valueIdx) => (
                    <td
                      key={`${row.feature}-${valueIdx}`}
                      className={cn(
                        "min-w-[150px] px-5 text-white/55",
                        compact ? "py-3" : "py-4",
                        plans[valueIdx]?.featured && "bg-teal-500/[0.04]"
                      )}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
