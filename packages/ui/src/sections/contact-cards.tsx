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
import { GlowCard } from "../components/glow-card";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface ContactCardsItem {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  accent?: string;
  href?: string;
}

export interface ContactCardsProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  items: ContactCardsItem[];
  className?: string;
}

export function ContactCards({
  eyebrow = "Contact options",
  title = "Reach us through your preferred channel.",
  description,
  items,
  compact: compactProp,
  className,
}: ContactCardsProps) {
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
            "grid gap-5",
            compact
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 md:grid-cols-3"
          )}
        >
          {items.map((item, idx) => {
            const content = (
              <>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-teal-400/10 text-teal-300 transition-colors duration-300 group-hover:border-teal-400/25 group-hover:bg-teal-400/15">
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
                  <p className="mt-2 text-xs leading-relaxed text-white/55">
                    {item.description}
                  </p>
                )}
              </>
            );

            return (
              <GlowCard
                key={`${item.title}-${idx}`}
                glowColor={item.accent ?? "#2dd4bf"}
                className="group flex flex-col"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-teal-400/40"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
