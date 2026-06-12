"use client";

import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface ShimmerLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  accent?: "violet" | "cyan" | "pink";
  external?: boolean;
}

const accentUnderline = {
  violet:
    "after:bg-gradient-to-r after:from-violet-400 after:to-cyan-400",
  cyan: "after:bg-gradient-to-r after:from-cyan-400 after:to-teal-400",
  pink: "after:bg-gradient-to-r after:from-pink-400 after:to-violet-400",
} as const;

export const ShimmerLink = forwardRef<HTMLAnchorElement, ShimmerLinkProps>(
  ({ accent = "violet", external, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "relative inline-flex items-center gap-1 font-medium text-white/90 transition-colors hover:text-white",
          "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300",
          "hover:after:w-full",
          accentUnderline[accent],
          className
        )}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
        {external && (
          <svg
            className="size-3.5 text-white/40"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 3h7v7M13 3L5 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </a>
    );
  }
);

ShimmerLink.displayName = "ShimmerLink";
