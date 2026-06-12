"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeaderGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
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
  plans: PricingComparisonPlan[];
  rows: PricingComparisonRow[];
  className?: string;
}

export function PricingComparison({
  eyebrow = "Compare plans",
  title = "Pick the right plan for your stage.",
  plans,
  rows,
  compact: compactProp,
  className,
}: PricingComparisonProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        <div className={sectionHeaderGap(compact)}>
          <ShimmerBadge tone="violet">{eyebrow}</ShimmerBadge>
          <h2 className={cn("mt-4 text-balance", sectionHeading(compact))}>
            {title}
          </h2>
        </div>
        <div
          className={cn(
            "overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]",
            compact && "text-sm"
          )}
        >
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th
                  className={cn(
                    "px-5 text-left text-xs uppercase tracking-[0.18em] text-white/40",
                    compact ? "py-3" : "py-4"
                  )}
                >
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={cn(
                      "px-5 text-left",
                      compact ? "py-3" : "py-4",
                      plan.featured && "bg-violet-500/10"
                    )}
                  >
                    <div className="font-semibold text-white">{plan.name}</div>
                    <div
                      className={cn(
                        "mt-0.5 font-semibold text-white",
                        compact ? "text-xl" : "text-2xl"
                      )}
                    >
                      {plan.price}
                    </div>
                    {plan.ctaLabel && (
                      <div className="mt-2">
                        {plan.featured ? (
                          <GradientButton size="sm" variant="aurora">
                            {plan.ctaLabel}
                          </GradientButton>
                        ) : (
                          <button className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/80">
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
                <tr key={`${row.feature}-${idx}`} className="border-b border-white/10 last:border-b-0">
                  <td className={cn("px-5 text-white/85", compact ? "py-3" : "py-4")}>
                    {row.feature}
                  </td>
                  {row.values.map((value, valueIdx) => (
                    <td
                      key={`${row.feature}-${valueIdx}`}
                      className={cn(
                        "px-5 text-white/65",
                        compact ? "py-3" : "py-4",
                        plans[valueIdx]?.featured && "bg-violet-500/5"
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
