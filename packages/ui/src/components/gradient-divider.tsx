"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type GradientDividerVariant = "aurora" | "sunset" | "ocean" | "subtle";

export interface GradientDividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: GradientDividerVariant;
  /** If true, adds vertical spacing around the divider */
  spacing?: "sm" | "md" | "lg" | "none";
}

const variantStyles: Record<GradientDividerVariant, string> = {
  aurora:
    "bg-gradient-to-r from-transparent via-violet-500/60 to-transparent",
  sunset:
    "bg-gradient-to-r from-transparent via-orange-500/60 to-transparent",
  ocean:
    "bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent",
  subtle:
    "bg-gradient-to-r from-transparent via-white/15 to-transparent",
};

const spacingMap = {
  none: "",
  sm: "my-4",
  md: "my-8",
  lg: "my-16",
} as const;

export const GradientDivider = forwardRef<HTMLDivElement, GradientDividerProps>(
  ({ variant = "aurora", spacing = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn(
          "h-px w-full",
          variantStyles[variant],
          spacingMap[spacing],
          className
        )}
        {...props}
      />
    );
  }
);

GradientDivider.displayName = "GradientDivider";
