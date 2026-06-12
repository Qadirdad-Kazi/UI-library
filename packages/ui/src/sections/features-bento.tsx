"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionGridGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { GlowCard } from "../components/glow-card";
import { ShimmerBadge } from "../components/shimmer-badge";

export interface FeaturesBentoFeature {
  title: string;
  description: string;
  icon?: ReactNode;
  glowColor?: string;
  /** "wide" makes the card span 2 columns at md+ */
  span?: "default" | "wide";
}

export interface FeaturesBentoProps extends SectionDensityProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  features: FeaturesBentoFeature[];
  className?: string;
}

export function FeaturesBento({
  eyebrow = "Capabilities",
  title,
  description,
  features,
  compact: compactProp,
  className,
}: FeaturesBentoProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section className={cn("relative", sectionPadding(compact), className)}>
      <div className={sectionInset(compact)}>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <ShimmerBadge tone="cyan">{eyebrow}</ShimmerBadge>}
          <h2 className={cn("mt-4 text-balance", sectionHeading(compact))}>
            {title}
          </h2>
          {description && (
            <p className={cn("mt-4 text-balance", sectionSubheading(compact))}>
              {description}
            </p>
          )}
        </div>

        <div
          className={cn(
            "grid gap-4",
            sectionGridGap(compact),
            compact ? "sm:grid-cols-2" : "gap-5 md:grid-cols-3"
          )}
        >
          {features.map((f, idx) => (
            <GlowCard
              key={idx}
              glowColor={f.glowColor ?? "#7c3aed"}
              className={cn(
                "flex h-full flex-col",
                !compact && "min-h-[220px]",
                f.span === "wide" && (compact ? "sm:col-span-2" : "md:col-span-2")
              )}
            >
              {f.icon && (
                <div
                  className="mb-4 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                  style={{ color: f.glowColor ?? "#a78bfa" }}
                >
                  {f.icon}
                </div>
              )}
              <h3
                className={cn(
                  "font-semibold tracking-tight",
                  compact ? "text-base" : "text-xl"
                )}
              >
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{f.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
