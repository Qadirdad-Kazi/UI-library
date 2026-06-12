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
    "bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.25),transparent_55%)]",
  ocean:
    "bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.25),transparent_55%)]",
  sunset:
    "bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.25),transparent_55%)]",
};

const buttonVariants: Record<CtaBannerVariant, "aurora" | "ocean" | "sunset"> = {
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
        "rounded-3xl border border-white/10",
        compact ? "p-6 md:p-8" : "p-10 md:p-16",
        variantGradients[variant],
        className
      )}
    >
      <div className="mx-auto grid max-w-4xl gap-8 text-center md:gap-6">
        <h2 className={cn("text-balance", sectionHeading(compact))}>
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mx-auto max-w-2xl text-balance text-white/65",
              compact ? "text-sm" : "md:text-lg"
            )}
          >
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryCta && (
              <a href={primaryCta.href} onClick={primaryCta.onClick}>
                <GradientButton
                  variant={buttonVariants[variant]}
                  size={compact ? "md" : "lg"}
                >
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
