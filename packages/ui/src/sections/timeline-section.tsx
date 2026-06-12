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

export interface TimelineEvent {
  date: string;
  title: string;
  description?: ReactNode;
  accent?: string;
}

export interface TimelineSectionProps extends SectionDensityProps {
  title?: ReactNode;
  description?: ReactNode;
  events: TimelineEvent[];
  className?: string;
}

export function TimelineSection({
  title = "Our journey",
  description,
  events,
  compact: compactProp,
  className,
}: TimelineSectionProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn(sectionPadding(compact), className)}>
      <div className={sectionInset(compact, "max-w-3xl")}>
        {(title || description) && (
          <div className={cn("text-center", sectionBlockGap(compact))}>
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

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className={cn(
              "absolute left-6 top-0 h-full w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent",
              !compact && "md:left-1/2"
            )}
          />

          <div className={cn("flex flex-col", compact ? "gap-8" : "gap-12")}>
            {events.map((event, i) => {
              const isEven = i % 2 === 0;
              const accent = event.accent ?? "#7c3aed";

              return (
                <div
                  key={i}
                  className={cn(
                    "relative flex items-start gap-6",
                    !compact && "md:gap-0",
                    !compact && (isEven ? "md:flex-row" : "md:flex-row-reverse")
                  )}
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute left-6 top-1 z-10",
                      !compact && "md:left-1/2 md:-translate-x-1/2"
                    )}
                  >
                    <div
                      className="size-3 rounded-full"
                      style={{
                        background: accent,
                        boxShadow: `0 0 16px -2px ${accent}`,
                      }}
                    />
                  </div>

                  {/* Spacer for mobile */}
                  <div className={cn("w-12 shrink-0", !compact && "md:hidden")} />

                  {/* Content */}
                  <div
                    className={cn(
                      "flex-1",
                      !compact && "md:w-1/2",
                      !compact && (isEven ? "md:pr-12 md:text-right" : "md:pl-12")
                    )}
                  >
                    <span
                      className="text-xs font-medium uppercase tracking-[0.18em]"
                      style={{ color: accent }}
                    >
                      {event.date}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {event.description}
                      </p>
                    )}
                  </div>

                  {/* Hidden spacer on desktop for the other side */}
                  {!compact && <div className="hidden flex-1 md:block md:w-1/2" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
