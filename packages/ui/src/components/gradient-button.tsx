"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type GradientButtonVariant = "aurora" | "sunset" | "ocean" | "void";
export type GradientButtonSize = "sm" | "md" | "lg";

export interface GradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GradientButtonVariant;
  size?: GradientButtonSize;
  glow?: boolean;
  asChild?: boolean;
}

const variantStyles: Record<GradientButtonVariant, string> = {
  aurora:
    "bg-[linear-gradient(110deg,#7c3aed_0%,#22d3ee_50%,#a855f7_100%)] text-white",
  sunset:
    "bg-[linear-gradient(110deg,#f97316_0%,#ec4899_50%,#a855f7_100%)] text-white",
  ocean:
    "bg-[linear-gradient(110deg,#0ea5e9_0%,#22d3ee_50%,#14b8a6_100%)] text-white",
  void: "bg-[linear-gradient(110deg,#1e1b4b_0%,#312e81_50%,#1e1b4b_100%)] text-white",
};

const sizeStyles: Record<GradientButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const glowStyles: Record<GradientButtonVariant, string> = {
  aurora: "shadow-[0_0_40px_-8px_rgba(124,58,237,0.7)]",
  sunset: "shadow-[0_0_40px_-8px_rgba(236,72,153,0.7)]",
  ocean: "shadow-[0_0_40px_-8px_rgba(14,165,233,0.7)]",
  void: "shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)]",
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
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold tracking-wide",
          "transition-all duration-300 ease-out",
          "hover:scale-[1.03] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          "disabled:pointer-events-none disabled:opacity-50",
          "bg-[length:200%_100%] [animation:gradient-shift_6s_ease_infinite]",
          variantStyles[variant],
          sizeStyles[size],
          glow && glowStyles[variant],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";
