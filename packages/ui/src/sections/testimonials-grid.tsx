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
  items: TestimonialsGridItem[];
  className?: string;
}

export function TestimonialsGrid({
  eyebrow = "Testimonials",
  title = "Trusted by teams that ship fast.",
  items,
  compact: compactProp,
  className,
}: TestimonialsGridProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        <div className={cn("mx-auto max-w-2xl text-center", sectionHeaderGap(compact))}>
          <ShimmerBadge tone="amber">{eyebrow}</ShimmerBadge>
          <h2 className={cn("mt-4 text-balance", sectionHeading(compact))}>
            {title}
          </h2>
        </div>
        <div
          className={cn(
            "grid gap-5",
            compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {items.map((item, idx) => (
            <GlowCard
              key={`${item.author}-${idx}`}
              glowColor={item.accent ?? "#a78bfa"}
              className="h-full"
            >
              <p className="text-sm leading-relaxed text-white/80">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold text-white">{item.author}</div>
                {item.role && <div className="text-xs text-white/55">{item.role}</div>}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
