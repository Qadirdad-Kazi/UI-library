"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Slot } from "../utils/slot";

export type GradientButtonVariant =
  | "aurora"
  | "sunset"
  | "ocean"
  | "void"
  | "ghost";
export type GradientButtonSize = "sm" | "md" | "lg";

export interface GradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GradientButtonVariant;
  size?: GradientButtonSize;
  glow?: boolean;
  loading?: boolean;
  /** Render as child element (e.g. Next.js Link) */
  asChild?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantStyles: Record<GradientButtonVariant, string> = {
  aurora:
    "bg-[linear-gradient(110deg,#6d5efc_0%,#2dd4bf_45%,#8b7cf7_100%)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]",
  sunset:
    "bg-[linear-gradient(110deg,#f97316_0%,#ec4899_50%,#8b5cf6_100%)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]",
  ocean:
    "bg-[linear-gradient(110deg,#0ea5e9_0%,#2dd4bf_50%,#14b8a6_100%)] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]",
  void: "bg-[linear-gradient(110deg,#15152a_0%,#1e1b4b_50%,#15152a_100%)] text-white border border-white/10",
  ghost:
    "bg-white/[0.04] text-white border border-white/12 hover:bg-white/[0.08] hover:border-white/20",
};

const sizeStyles: Record<GradientButtonSize, string> = {
  sm: "h-9 gap-1.5 px-4 text-sm",
  md: "h-11 gap-2 px-6 text-sm sm:text-base",
  lg: "h-13 gap-2.5 px-8 text-base sm:h-14 sm:text-lg",
};

const glowStyles: Record<GradientButtonVariant, string> = {
  aurora: "shadow-[0_8px_32px_-8px_rgba(109,94,252,0.55)]",
  sunset: "shadow-[0_8px_32px_-8px_rgba(236,72,153,0.5)]",
  ocean: "shadow-[0_8px_28px_-10px_rgba(14,165,233,0.5)]",
  void: "shadow-[0_8px_28px_-10px_rgba(99,102,241,0.35)]",
  ghost: "",
};

export const GradientButton = forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      className,
      variant = "aurora",
      size = "md",
      glow = true,
      loading = false,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const classes = cn(
      "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold tracking-wide",
      "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
      "hover:scale-[1.02] active:scale-[0.98]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06060d]",
      "disabled:pointer-events-none disabled:opacity-50",
      variant !== "ghost" &&
        "bg-[length:200%_100%] motion-safe:[animation:nebula-gradient-shift_6s_ease_infinite]",
      variantStyles[variant],
      sizeStyles[size],
      glow && glowStyles[variant],
      className
    );

    if (asChild) {
      return (
        <Slot aria-busy={loading || undefined} className={classes} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={classes}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {loading ? (
            <span
              aria-hidden
              className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
          ) : (
            leftIcon
          )}
          {children}
          {!loading && rightIcon}
        </span>
        {variant !== "ghost" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.28),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
          />
        )}
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";
