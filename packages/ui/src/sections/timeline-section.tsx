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
import { ShimmerBadge } from "../components/shimmer-badge";

export interface TimelineEvent {
  date: string;
  title: string;
  description?: ReactNode;
  accent?: string;
}

export interface TimelineSectionProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  events: TimelineEvent[];
  className?: string;
}

export function TimelineSection({
  eyebrow,
  title = "Our journey",
  description,
  events,
  compact: compactProp,
  className,
}: TimelineSectionProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[320px] max-w-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,106,245,0.1) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact, "max-w-3xl")}>
        {(eyebrow || title || description) && (
          <div className={cn("text-center", sectionBlockGap(compact))}>
            {eyebrow && <ShimmerBadge tone="violet">{eyebrow}</ShimmerBadge>}
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

        <div className="relative">
          <div
            aria-hidden
            className={cn(
              "absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[#7c6af5]/40 via-white/10 to-transparent",
              !compact && "md:left-1/2"
            )}
          />

          <div className={cn("flex flex-col", compact ? "gap-8" : "gap-12")}>
            {events.map((event, i) => {
              const isEven = i % 2 === 0;
              const accent = event.accent ?? (i % 2 === 0 ? "#7c6af5" : "#2dd4bf");

              return (
                <div
                  key={i}
                  className={cn(
                    "relative flex items-start gap-6",
                    !compact && "md:gap-0",
                    !compact &&
                      (isEven ? "md:flex-row" : "md:flex-row-reverse")
                  )}
                >
                  <div
                    className={cn(
                      "absolute left-6 top-1 z-10 -translate-x-1/2",
                      !compact && "md:left-1/2"
                    )}
                  >
                    <div
                      className="size-3 rounded-full ring-4 ring-[#06060d]"
                      style={{
                        background: accent,
                        boxShadow: `0 0 16px -2px ${accent}`,
                      }}
                    />
                  </div>

                  <div className={cn("w-12 shrink-0", !compact && "md:hidden")} />

                  <div
                    className={cn(
                      "flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.04]",
                      !compact && "md:w-1/2 md:border-0 md:bg-transparent md:p-0 md:hover:bg-transparent",
                      !compact && (isEven ? "md:pr-12 md:text-right" : "md:pl-12")
                    )}
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-[0.18em]"
                      style={{ color: accent }}
                    >
                      {event.date}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {event.description}
                      </p>
                    )}
                  </div>

                  {!compact && (
                    <div className="hidden flex-1 md:block md:w-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
