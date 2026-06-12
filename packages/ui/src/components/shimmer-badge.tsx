"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface ShimmerBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "violet" | "cyan" | "amber";
}

const tones = {
  violet: "border-violet-400/30 text-violet-200",
  cyan: "border-cyan-400/30 text-cyan-200",
  amber: "border-amber-400/30 text-amber-200",
} as const;

export const ShimmerBadge = forwardRef<HTMLSpanElement, ShimmerBadgeProps>(
  ({ className, tone = "violet", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-flex items-center gap-2 overflow-hidden rounded-full border bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur",
          tones[tone],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.18),transparent)] [animation:shimmer_3s_ease-in-out_infinite]"
        />
      </span>
    );
  }
);

ShimmerBadge.displayName = "ShimmerBadge";
