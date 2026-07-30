"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";
import { GlowCard } from "../components/glow-card";
import { ShimmerBadge } from "../components/shimmer-badge";

const DEFAULT_GLOW = "#2dd4bf";

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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[380px] max-w-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45,212,191,0.12) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact)}>
        <div className="mx-auto max-w-2xl text-center">
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
                "mt-4 text-balance text-white/55",
                sectionSubheading(compact)
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div
          className={cn(
            "mt-10 grid gap-4",
            compact
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 gap-5 md:grid-cols-3"
          )}
        >
          {features.map((f, idx) => {
            const glow = f.glowColor ?? DEFAULT_GLOW;
            return (
              <GlowCard
                key={idx}
                glowColor={glow}
                className={cn(
                  "group flex h-full flex-col gap-4 transition duration-300",
                  !compact && "min-h-[200px]",
                  f.span === "wide" &&
                    (compact ? "sm:col-span-2" : "md:col-span-2")
                )}
              >
                {f.icon && (
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 backdrop-blur transition duration-300 group-hover:border-white/20"
                    style={{
                      color: glow,
                      background: `linear-gradient(135deg, ${glow}22, ${glow}08)`,
                      boxShadow: `0 0 20px -6px ${glow}55`,
                    }}
                  >
                    {f.icon}
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h3
                    className={cn(
                      "font-semibold tracking-tight text-white",
                      compact ? "text-base" : "text-xl"
                    )}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {f.description}
                  </p>
                </div>

                <div
                  aria-hidden
                  className="mt-auto h-px w-16 rounded-full opacity-45 transition-all duration-300 group-hover:w-24 group-hover:opacity-70"
                  style={{
                    background: `linear-gradient(90deg, ${glow}, transparent)`,
                  }}
                />
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
