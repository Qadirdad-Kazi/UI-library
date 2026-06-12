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
      <div
        className={cn(
          "absolute -top-32 left-1/2 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]",
          compact ? "size-[280px]" : "size-[600px]"
        )}
      />
      <div
        className={cn(
          "absolute top-1/3 -right-32 rounded-full bg-cyan-500/15 blur-[120px]",
          compact ? "size-[220px]" : "size-[500px]"
        )}
      />
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className={cn("relative z-10", sectionInset(compact, "max-w-5xl"))}>
        {badge ? (
          <div className={compact ? "mb-4" : "mb-6"}>
            <ShimmerBadge tone="violet">{badge}</ShimmerBadge>
          </div>
        ) : null}

        <h1 className={cn("text-balance", sectionHeroHeading(compact))}>
          {title}{" "}
          {highlight ? (
            <span className="bg-[linear-gradient(110deg,#a78bfa_10%,#22d3ee_40%,#f472b6_70%,#a78bfa_100%)] bg-[length:200%_auto] bg-clip-text text-transparent [animation:gradient-shift_6s_ease_infinite]">
              {highlight}
            </span>
          ) : null}
        </h1>

        {description ? (
          <p className={cn("mt-4 max-w-xl text-balance", sectionSubheading(compact))}>
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
              <a href={primaryCta.href} onClick={primaryCta.onClick}>
                <GradientButton variant="aurora" size={compact ? "md" : "lg"}>
                  {primaryCta.label}
                </GradientButton>
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                onClick={secondaryCta.onClick}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] font-medium text-white/90 backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.06]",
                  compact ? "h-11 px-5 text-sm" : "h-14 px-6 text-base"
                )}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}

        {stats && stats.length > 0 && !compact && (
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/50">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div>{stat.label}</div>
                </div>
                {i < stats.length - 1 && <div className="h-8 w-px bg-white/10" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
