"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type MouseEvent,
} from "react";
import { cn } from "../utils/cn";

export interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
  intensity?: "low" | "medium" | "high";
  hoverLift?: boolean;
  /** Soft specular highlight */
  specular?: boolean;
  /** @deprecated borderGradient is no longer used */
  borderGradient?: boolean;
}

const intensityMap = {
  low: 0.18,
  medium: 0.38,
  high: 0.62,
} as const;

export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  (
    {
      className,
      glowColor = "#6d5efc",
      intensity = "medium",
      hoverLift = true,
      specular = true,
      borderGradient: _bg,
      children,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }
      onMouseMove?.(e);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (el) {
        el.style.setProperty("--mx", "50%");
        el.style.setProperty("--my", "0%");
      }
      onMouseLeave?.(e);
    };

    return (
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl",
          "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:border-white/[0.16] hover:bg-white/[0.035]",
          hoverLift && "hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]",
          className
        )}
        style={
          {
            "--glow-color": glowColor,
            "--glow-intensity": intensityMap[intensity],
            "--mx": "50%",
            "--my": "0%",
          } as CSSProperties
        }
        {...props}
      >
        {specular && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-70"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, transparent 42%)",
            }}
          />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx) var(--my), color-mix(in oklab, var(--glow-color) calc(var(--glow-intensity) * 100%), transparent), transparent 42%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60"
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";
