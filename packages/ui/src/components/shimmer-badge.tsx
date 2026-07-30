"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface ShimmerBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "violet" | "cyan" | "amber" | "teal" | "pink" | "emerald";
  pulse?: boolean;
}

const tones = {
  violet: "border-violet-400/25 text-violet-200 bg-violet-500/10",
  cyan: "border-cyan-400/25 text-cyan-200 bg-cyan-500/10",
  amber: "border-amber-400/25 text-amber-200 bg-amber-500/10",
  teal: "border-teal-400/25 text-teal-200 bg-teal-500/10",
  pink: "border-pink-400/25 text-pink-200 bg-pink-500/10",
  emerald: "border-emerald-400/25 text-emerald-200 bg-emerald-500/10",
} as const;

export const ShimmerBadge = forwardRef<HTMLSpanElement, ShimmerBadgeProps>(
  ({ className, tone = "teal", pulse = false, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] backdrop-blur-md",
          tones[tone],
          className
        )}
        {...props}
      >
        {pulse && (
          <span
            aria-hidden
            className="relative flex size-1.5"
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-40 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-current" />
          </span>
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)] motion-safe:[animation:nebula-shimmer_3.5s_ease-in-out_infinite] motion-reduce:hidden"
        />
      </span>
    );
  }
);

ShimmerBadge.displayName = "ShimmerBadge";
