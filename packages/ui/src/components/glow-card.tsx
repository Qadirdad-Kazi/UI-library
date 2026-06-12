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
  borderGradient?: boolean;
}

const intensityMap = {
  low: 0.2,
  medium: 0.4,
  high: 0.7,
} as const;

export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  (
    {
      className,
      glowColor = "#7c3aed",
      intensity = "medium",
      borderGradient = true,
      children,
      onMouseMove,
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

    return (
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl",
          "transition-all duration-300",
          "hover:border-white/20",
          borderGradient &&
            "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:p-px before:[background:linear-gradient(140deg,rgba(255,255,255,0.18),transparent_40%,transparent_60%,rgba(255,255,255,0.08))] before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude]",
          className
        )}
        style={
          {
            "--glow-color": glowColor,
            "--glow-intensity": intensityMap[intensity],
          } as CSSProperties
        }
        {...props}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx) var(--my), color-mix(in oklab, var(--glow-color) calc(var(--glow-intensity) * 100%), transparent), transparent 40%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";
