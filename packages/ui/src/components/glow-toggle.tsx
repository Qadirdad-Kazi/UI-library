"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type GlowToggleSize = "sm" | "md" | "lg";

export interface GlowToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  accent?: "violet" | "cyan" | "pink";
  size?: GlowToggleSize;
  label?: string;
}

const accentColors = {
  violet: {
    bg: "bg-violet-500",
    glow: "shadow-[0_0_20px_-2px_rgba(139,92,246,0.7)]",
    ring: "focus-visible:ring-violet-400/50",
  },
  cyan: {
    bg: "bg-cyan-500",
    glow: "shadow-[0_0_20px_-2px_rgba(34,211,238,0.7)]",
    ring: "focus-visible:ring-cyan-400/50",
  },
  pink: {
    bg: "bg-pink-500",
    glow: "shadow-[0_0_20px_-2px_rgba(236,72,153,0.7)]",
    ring: "focus-visible:ring-pink-400/50",
  },
} as const;

const sizeMap = {
  sm: { track: "h-5 w-9", thumb: "size-3.5", translate: "translate-x-4" },
  md: { track: "h-6 w-11", thumb: "size-4", translate: "translate-x-5" },
  lg: { track: "h-7 w-14", thumb: "size-5", translate: "translate-x-7" },
} as const;

export const GlowToggle = forwardRef<HTMLButtonElement, GlowToggleProps>(
  (
    {
      checked = false,
      onChange,
      accent = "violet",
      size = "md",
      label,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const colors = accentColors[accent];
    const sizes = sizeMap[size];

    return (
      <div className="inline-flex items-center gap-3">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={label}
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={cn(
            "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
            colors.ring,
            checked
              ? cn(colors.bg, colors.glow)
              : "bg-white/10",
            disabled && "pointer-events-none opacity-50",
            sizes.track,
            className
          )}
          {...props}
        >
          <span
            aria-hidden
            className={cn(
              "pointer-events-none inline-block rounded-full bg-white shadow-lg transition-transform duration-300 ease-out",
              sizes.thumb,
              checked ? sizes.translate : "translate-x-0.5"
            )}
          />
        </button>
        {label && (
          <span className="text-sm text-white/70">{label}</span>
        )}
      </div>
    );
  }
);

GlowToggle.displayName = "GlowToggle";
