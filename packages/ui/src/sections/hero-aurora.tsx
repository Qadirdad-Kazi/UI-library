"use client";

import { type ReactNode } from "react";
import { GradientButton } from "../components/gradient-button";
import { ShimmerBadge } from "../components/shimmer-badge";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeroHeading,
  sectionInset,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";

export interface HeroAuroraProps extends SectionDensityProps {
  badge?: ReactNode;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  primaryCta?: { label: string; href?: string; onClick?: () => void };
  secondaryCta?: { label: string; href?: string; onClick?: () => void };
  stats?: { value: string; label: string }[];
  /** Subtle entrance animation for stats row */
  animateStats?: boolean;
  className?: string;
}

export function HeroAurora({
  badge = "v1.0 · Now in beta",
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  stats,
  animateStats = true,
  compact: compactProp,
  className,
}: HeroAuroraProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section
      className={cn(
        "relative isolate flex items-center overflow-hidden",
        compact ? "min-h-0 py-8" : "min-h-[80vh]",
        className
      )}
    >
      {/* Aurora orbs — teal primary, soft violet secondary */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 rounded-full bg-teal-400/20 blur-[120px] motion-safe:animate-[nebula-pulse-soft_8s_ease-in-out_infinite] motion-reduce:animate-none",
          compact ? "size-[260px]" : "size-[560px]"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1/4 -right-28 rounded-full bg-cyan-500/15 blur-[110px] motion-safe:animate-[nebula-pulse-soft_10s_ease-in-out_infinite] motion-reduce:animate-none",
          compact ? "size-[200px]" : "size-[480px]",
          "motion-safe:[animation-delay:1.5s]"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 -left-24 rounded-full bg-violet-500/10 blur-[100px]",
          compact ? "size-[180px]" : "size-[420px]"
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_72%)]"
      />

      <div className={cn("relative z-10", sectionInset(compact, "max-w-5xl"))}>
        {badge ? (
          <div className={compact ? "mb-4" : "mb-6"}>
            <ShimmerBadge tone="teal" pulse>
              {badge}
            </ShimmerBadge>
          </div>
        ) : null}

        <h1 className={cn("text-balance text-white", sectionHeroHeading(compact))}>
          {title}{" "}
          {highlight ? (
            <span className="bg-[linear-gradient(110deg,#2dd4bf_0%,#67e8f9_35%,#a78bfa_70%,#2dd4bf_100%)] bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:[animation:nebula-gradient-shift_7s_ease_infinite] motion-reduce:animate-none">
              {highlight}
            </span>
          ) : null}
        </h1>

        {description ? (
          <p
            className={cn(
              "mt-5 max-w-xl text-balance text-white/55",
              sectionSubheading(compact)
            )}
          >
            {description}
          </p>
        ) : null}

        {(primaryCta || secondaryCta) && (
          <div
            className={cn(
              "flex flex-wrap items-center gap-3",
              compact ? "mt-6" : "mt-10 gap-4"
            )}
          >
            {primaryCta && (
              <GradientButton
                asChild={Boolean(primaryCta.href)}
                variant="aurora"
                size={compact ? "md" : "lg"}
                onClick={primaryCta.href ? undefined : primaryCta.onClick}
              >
                {primaryCta.href ? (
                  <a href={primaryCta.href} onClick={primaryCta.onClick}>
                    {primaryCta.label}
                  </a>
                ) : (
                  primaryCta.label
                )}
              </GradientButton>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                onClick={secondaryCta.onClick}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] font-medium text-white/85 backdrop-blur-md transition duration-300 hover:border-teal-400/30 hover:bg-white/[0.06] hover:text-white",
                  compact ? "h-11 px-5 text-sm" : "h-14 px-6 text-base"
                )}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}

        {stats && stats.length > 0 && !compact && (
          <div
            className={cn(
              "mt-14 flex flex-wrap items-center gap-x-6 gap-y-5 md:gap-x-10",
              animateStats &&
                "motion-safe:animate-[nebula-fade-up_600ms_ease-out] motion-reduce:animate-none"
            )}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 md:gap-10"
                style={
                  animateStats
                    ? { animationDelay: `${i * 80}ms` }
                    : undefined
                }
              >
                <div>
                  <div className="text-2xl font-semibold tracking-tight text-white tabular-nums md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/45">{stat.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden h-9 w-px bg-white/10 sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
