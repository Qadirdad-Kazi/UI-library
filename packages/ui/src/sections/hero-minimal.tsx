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
    <section className={cn("relative overflow-hidden", sectionPadding(compact), className)}>
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:44px_44px] opacity-40" />
      {!compact && (
        <div className="absolute left-1/2 top-0 size-[480px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
      )}
      <div className={cn("relative text-center", sectionInset(compact, "max-w-3xl"))}>
        <ShimmerBadge tone="violet">{badge}</ShimmerBadge>
        <h1 className={cn("mt-5 text-balance", sectionHeroHeading(compact))}>
          {title}
        </h1>
        {description && (
          <p className={cn("mx-auto mt-5 max-w-xl text-balance", sectionSubheading(compact))}>
            {description}
          </p>
        )}
        <div className="mt-8">
          <a href={cta.href} onClick={cta.onClick}>
            <GradientButton variant="aurora" size={compact ? "md" : "lg"}>
              {cta.label}
            </GradientButton>
          </a>
        </div>
      </div>
    </section>
  );
}
