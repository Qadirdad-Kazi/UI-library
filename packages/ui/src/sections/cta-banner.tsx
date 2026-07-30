"use client";

import { type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import { sectionHeading, type SectionDensityProps } from "../utils/section";
import { GradientButton } from "../components/gradient-button";

export type CtaBannerVariant = "aurora" | "ocean" | "sunset";

export interface CtaBannerProps extends SectionDensityProps {
  title: ReactNode;
  description?: ReactNode;
  primaryCta?: { label: string; href?: string; onClick?: () => void };
  secondaryCta?: { label: string; href?: string; onClick?: () => void };
  variant?: CtaBannerVariant;
  className?: string;
}

const variantGradients: Record<CtaBannerVariant, string> = {
  aurora:
    "bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.12),transparent_50%)]",
  ocean:
    "bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.22),transparent_55%)]",
  sunset:
    "bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.22),transparent_55%)]",
};

const buttonVariants: Record<CtaBannerVariant, "aurora" | "ocean" | "sunset"> =
  {
    aurora: "aurora",
    ocean: "ocean",
    sunset: "sunset",
  };

export function CtaBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "aurora",
  compact: compactProp,
  className,
}: CtaBannerProps) {
  const compact = useCompactMode(compactProp);

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl",
        compact ? "p-6 md:p-8" : "p-10 md:p-16",
        variantGradients[variant],
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <div className="relative mx-auto grid max-w-4xl gap-6 text-center md:gap-7">
        <h2 className={cn("text-balance text-white", sectionHeading(compact))}>
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mx-auto max-w-2xl text-balance text-white/55",
              compact ? "text-sm" : "md:text-lg"
            )}
          >
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {primaryCta && (
              <GradientButton
                asChild={Boolean(primaryCta.href)}
                variant={buttonVariants[variant]}
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
                  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] font-medium text-white/85 backdrop-blur-md transition duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white",
                  compact ? "h-10 px-4 text-sm" : "h-14 px-6 text-base"
                )}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
