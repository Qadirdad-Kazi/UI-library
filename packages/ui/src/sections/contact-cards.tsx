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
import { GlowCard } from "../components/glow-card";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface ContactCardsItem {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  accent?: string;
}

export interface ContactCardsProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  items: ContactCardsItem[];
  className?: string;
}

export function ContactCards({
  eyebrow = "Contact options",
  title = "Reach us through your preferred channel.",
  items,
  compact: compactProp,
  className,
}: ContactCardsProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact, "max-w-5xl")}>
        <div className={cn("text-center", sectionHeaderGap(compact))}>
          <ShimmerBadge tone="cyan">{eyebrow}</ShimmerBadge>
          <h2 className={cn("mt-4 text-balance", sectionHeading(compact))}>
            {title}
          </h2>
        </div>
        <div
          className={cn(
            "grid gap-5",
            compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
          )}
        >
          {items.map((item, idx) => (
            <GlowCard
              key={`${item.title}-${idx}`}
              glowColor={item.accent ?? "#22d3ee"}
              className="flex flex-col"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cyan-300">
                {item.icon}
              </span>
              <h3
                className={cn(
                  "mt-4 font-semibold text-white",
                  compact ? "text-base" : "text-lg"
                )}
              >
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-white/80">{item.value}</p>
              {item.description && (
                <p className="mt-2 text-xs text-white/55">{item.description}</p>
              )}
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
