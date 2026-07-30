"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type GlowProgressVariant = "aurora" | "sunset" | "ocean";
export type GlowProgressSize = "sm" | "md" | "lg";

export interface GlowProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  variant?: GlowProgressVariant;
  size?: GlowProgressSize;
  animated?: boolean;
  showLabel?: boolean;
}

const gradientMap: Record<GlowProgressVariant, string> = {
  aurora: "bg-[linear-gradient(110deg,#2dd4bf,#67e8f9,#a78bfa)]",
  sunset: "bg-[linear-gradient(110deg,#f97316,#ec4899,#a855f7)]",
  ocean: "bg-[linear-gradient(110deg,#0ea5e9,#22d3ee,#14b8a6)]",
};

const glowMap: Record<GlowProgressVariant, string> = {
  aurora: "shadow-[0_0_20px_-3px_rgba(45,212,191,0.65)]",
  sunset: "shadow-[0_0_20px_-3px_rgba(236,72,153,0.65)]",
  ocean: "shadow-[0_0_20px_-3px_rgba(14,165,233,0.65)]",
};

const sizeMap: Record<GlowProgressSize, string> = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

export const GlowProgress = forwardRef<HTMLDivElement, GlowProgressProps>(
  (
    {
      value,
      variant = "aurora",
      size = "md",
      animated = true,
      showLabel = false,
      className,
      ...props
    },
    ref
  ) => {
    const clamped = Math.max(0, Math.min(100, value));

    return (
      <div className={cn("w-full", className)} ref={ref} {...props}>
        {showLabel && (
          <div className="mb-2 flex items-center justify-between text-xs text-white/45">
            <span>Progress</span>
            <span className="font-mono tabular-nums">
              {Math.round(clamped)}%
            </span>
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          className={cn(
            "w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.06]",
            sizeMap[size]
          )}
        >
          <div
            className={cn(
              "h-full rounded-full bg-[length:200%_100%] transition-all duration-700 ease-out motion-reduce:transition-none",
              gradientMap[variant],
              glowMap[variant],
              animated &&
                "motion-safe:[animation:nebula-gradient-shift_3s_ease_infinite] motion-reduce:animate-none"
            )}
            style={{ width: `${clamped}%` }}
          />
        </div>
      </div>
    );
  }
);

GlowProgress.displayName = "GlowProgress";
