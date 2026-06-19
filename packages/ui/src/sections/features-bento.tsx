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
      {/* Background ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[400px] max-w-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />

      <div className={sectionInset(compact)}>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <ShimmerBadge tone="cyan">{eyebrow}</ShimmerBadge>}
          <h2 className={cn("mt-4 text-balance", sectionHeading(compact))}>
            {title}
          </h2>
          {description && (
            <p className={cn("mt-4 text-balance text-white/60", sectionSubheading(compact))}>
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
          {features.map((f, idx) => (
            <GlowCard
              key={idx}
              glowColor={f.glowColor ?? "#7c3aed"}
              className={cn(
                "flex h-full flex-col gap-4",
                !compact && "min-h-[200px]",
                f.span === "wide" && (compact ? "sm:col-span-2" : "md:col-span-2")
              )}
            >
              {f.icon && (
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 backdrop-blur"
                  style={{
                    color: f.glowColor ?? "#a78bfa",
                    background: `linear-gradient(135deg, ${f.glowColor ?? "#7c3aed"}22, ${f.glowColor ?? "#7c3aed"}08)`,
                    boxShadow: `0 0 20px -6px ${f.glowColor ?? "#7c3aed"}66`,
                  }}
                >
                  {f.icon}
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3
                  className={cn(
                    "font-semibold tracking-tight",
                    compact ? "text-base" : "text-xl"
                  )}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{f.description}</p>
              </div>

              {/* Accent line at bottom */}
              <div
                className="mt-auto h-px w-16 rounded-full opacity-50"
                style={{
                  background: `linear-gradient(90deg, ${f.glowColor ?? "#7c3aed"}, transparent)`,
                }}
              />
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
