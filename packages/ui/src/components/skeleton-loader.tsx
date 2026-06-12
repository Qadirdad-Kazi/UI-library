"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type SkeletonVariant = "text" | "circular" | "rectangular";

export interface SkeletonLoaderProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  variant?: SkeletonVariant;
  /** Number of skeleton lines to render (text variant only) */
  count?: number;
}

export const SkeletonLoader = forwardRef<HTMLDivElement, SkeletonLoaderProps>(
  (
    {
      width,
      height,
      variant = "rectangular",
      count = 1,
      className,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "relative overflow-hidden bg-white/[0.06]",
      "after:absolute after:inset-0 after:-translate-x-full",
      "after:bg-gradient-to-r after:from-transparent after:via-white/[0.08] after:to-transparent",
      "after:[animation:shimmer_2s_ease-in-out_infinite]"
    );

    const variantClasses = {
      text: "h-4 w-full rounded-md",
      circular: "rounded-full",
      rectangular: "rounded-xl",
    };

    if (variant === "text" && count > 1) {
      return (
        <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props}>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className={cn(
                baseClasses,
                variantClasses.text,
                i === count - 1 && "w-3/4" // last line shorter
              )}
              style={{ width: i < count - 1 ? width : undefined, height }}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        style={{
          width: width ?? (variant === "circular" ? 40 : undefined),
          height: height ?? (variant === "circular" ? 40 : undefined),
        }}
        {...props}
      />
    );
  }
);

SkeletonLoader.displayName = "SkeletonLoader";
