"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionBlockGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { AnimatedCounter } from "../components/animated-counter";

export interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface StatsSectionProps extends SectionDensityProps {
  title?: ReactNode;
  description?: ReactNode;
  stats: StatItem[];
  className?: string;
}

export function StatsSection({
  title,
  description,
  stats,
  compact: compactProp,
  className,
}: StatsSectionProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn(sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        {(title || description) && (
          <div className={cn("text-center", compact ? "mb-6" : sectionBlockGap(compact))}>
            {title && (
              <h2 className={sectionHeading(compact)}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn("mt-4", sectionSubheading(compact))}>{description}</p>
            )}
          </div>
        )}

        <div
          className={cn(
            "grid gap-6",
            compact ? "grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center transition hover:border-white/15 hover:bg-white/[0.04]",
                compact ? "p-5" : "p-8"
              )}
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(200px circle at 50% 50%, rgba(139,92,246,0.15), transparent 60%)",
                }}
              />
              <div className="relative">
                <div
                  className={cn(
                    "font-bold tracking-tight",
                    compact ? "text-3xl" : "text-5xl"
                  )}
                >
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    triggerOnScroll={!compact}
                  />
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/45">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
