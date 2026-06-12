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

export interface FeaturesListItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface FeaturesListProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  items: FeaturesListItem[];
  className?: string;
}

export function FeaturesList({
  eyebrow = "Feature highlights",
  title = "Everything your product team needs.",
  items,
  compact: compactProp,
  className,
}: FeaturesListProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact, "max-w-5xl")}>
        <div className={sectionHeaderGap(compact)}>
          <ShimmerBadge tone="cyan">{eyebrow}</ShimmerBadge>
          <h2 className={cn("mt-4 text-balance", sectionHeading(compact))}>
            {title}
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={cn(
                "flex items-start gap-4",
                compact ? "p-4" : "p-6",
                i > 0 && "border-t border-white/10"
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-300">
                {item.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h3
                  className={cn(
                    "font-semibold text-white",
                    compact ? "text-base" : "text-lg"
                  )}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-white/65">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
