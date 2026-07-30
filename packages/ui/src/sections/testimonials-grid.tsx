"use client";

import { type ReactNode } from "react";
import { GlowCard } from "../components/glow-card";
import { ShimmerBadge } from "../components/shimmer-badge";
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

export interface TestimonialsGridItem {
  quote: string;
  author: string;
  role?: string;
  accent?: string;
}

export interface TestimonialsGridProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  items: TestimonialsGridItem[];
  className?: string;
}

export function TestimonialsGrid({
  eyebrow = "Testimonials",
  title = "Trusted by teams that ship fast.",
  description,
  items,
  compact: compactProp,
  className,
}: TestimonialsGridProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[360px] max-w-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,106,245,0.1) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact)}>
        <div
          className={cn(
            "mx-auto max-w-2xl text-center",
            sectionHeaderGap(compact)
          )}
        >
          {eyebrow && <ShimmerBadge tone="violet">{eyebrow}</ShimmerBadge>}
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
            "grid gap-5",
            compact
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {items.map((item, idx) => (
            <GlowCard
              key={`${item.author}-${idx}`}
              glowColor={item.accent ?? "#7c6af5"}
              className="flex h-full flex-col"
            >
              <span
                aria-hidden
                className="mb-3 font-serif text-3xl leading-none text-[#7c6af5]/40"
              >
                &ldquo;
              </span>
              <p className="flex-1 text-sm leading-relaxed text-white/80">
                {item.quote}
              </p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold text-white">
                  {item.author}
                </div>
                {item.role && (
                  <div className="mt-0.5 text-xs text-white/55">{item.role}</div>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
