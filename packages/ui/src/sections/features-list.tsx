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

export interface FeaturesListItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface FeaturesListProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  items: FeaturesListItem[];
  className?: string;
}

export function FeaturesList({
  eyebrow = "Feature highlights",
  title = "Everything your product team needs.",
  description,
  items,
  compact: compactProp,
  className,
}: FeaturesListProps) {
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

      <div className={sectionInset(compact, "max-w-5xl")}>
        <div className={sectionHeaderGap(compact)}>
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
                "mt-3 max-w-2xl text-balance text-white/55",
                sectionSubheading(compact)
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className={cn(
                "group flex items-start gap-4 transition-colors duration-300 hover:bg-white/[0.03]",
                compact ? "p-4" : "p-6",
                i > 0 && "border-t border-white/10"
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-teal-400/10 text-teal-300 transition-colors duration-300 group-hover:border-teal-400/25 group-hover:bg-teal-400/15">
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
                <p className="mt-1 text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
