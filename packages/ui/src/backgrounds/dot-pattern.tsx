"use client";

import { type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface DotPatternProps extends HTMLAttributes<HTMLDivElement> {
  dotSize?: number;
  spacing?: number;
  color?: string;
}

export function DotPattern({
  dotSize = 1,
  spacing = 24,
  color = "rgba(255,255,255,0.15)",
  className,
  ...props
}: DotPatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(${color} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
      {...props}
    />
  );
}
