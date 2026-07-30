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
import { ShimmerBadge } from "../components/shimmer-badge";

export interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface StatsSectionProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  stats: StatItem[];
  className?: string;
}

export function StatsSection({
  eyebrow,
  title,
  description,
  stats,
  compact: compactProp,
  className,
}: StatsSectionProps) {
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
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mx-auto max-w-2xl text-center",
              compact ? "mb-6" : sectionBlockGap(compact)
            )}
          >
            {eyebrow && <ShimmerBadge tone="teal">{eyebrow}</ShimmerBadge>}
            {title && (
              <h2
                className={cn(
                  "text-balance text-white",
                  eyebrow ? "mt-4" : "",
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
        )}

        <div
          className={cn(
            "grid gap-6",
            compact
              ? "grid-cols-1 min-[400px]:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]",
                compact ? "p-5" : "p-8"
              )}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(200px circle at 50% 50%, rgba(45,212,191,0.12), transparent 60%)",
                }}
              />
              <div className="relative">
                <div
                  className={cn(
                    "bg-[linear-gradient(135deg,#fff_30%,#2dd4bf)] bg-clip-text font-bold tracking-tight text-transparent",
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
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
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
