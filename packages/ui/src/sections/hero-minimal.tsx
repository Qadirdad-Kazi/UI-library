"use client";

import { type ReactNode } from "react";
import { GradientButton } from "../components/gradient-button";
import { ShimmerBadge } from "../components/shimmer-badge";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeroHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";

export interface HeroMinimalProps extends SectionDensityProps {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  cta?: { label: string; href?: string; onClick?: () => void };
  className?: string;
}

export function HeroMinimal({
  badge = "New section",
  title,
  description,
  cta = { label: "Get started", href: "#" },
  compact: compactProp,
  className,
}: HeroMinimalProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section
      className={cn("relative overflow-hidden", sectionPadding(compact), className)}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />
      {!compact && (
        <>
          <div
            aria-hidden
            className="absolute left-1/2 top-0 size-[420px] -translate-x-1/2 rounded-full bg-teal-400/15 blur-[110px] motion-safe:animate-[nebula-pulse-soft_9s_ease-in-out_infinite] motion-reduce:animate-none"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-1/3 size-[280px] rounded-full bg-violet-500/8 blur-[90px]"
          />
        </>
      )}
      <div
        className={cn("relative text-center", sectionInset(compact, "max-w-3xl"))}
      >
        {badge ? <ShimmerBadge tone="teal">{badge}</ShimmerBadge> : null}
        <h1
          className={cn(
            "mt-5 text-balance text-white",
            sectionHeroHeading(compact)
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mx-auto mt-5 max-w-xl text-balance text-white/55",
              sectionSubheading(compact)
            )}
          >
            {description}
          </p>
        )}
        {cta && (
          <div className={cn(compact ? "mt-6" : "mt-9")}>
            <GradientButton
              asChild={Boolean(cta.href)}
              variant="aurora"
              size={compact ? "md" : "lg"}
              onClick={cta.href ? undefined : cta.onClick}
            >
              {cta.href ? (
                <a href={cta.href} onClick={cta.onClick}>
                  {cta.label}
                </a>
              ) : (
                cta.label
              )}
            </GradientButton>
          </div>
        )}
      </div>
    </section>
  );
}
