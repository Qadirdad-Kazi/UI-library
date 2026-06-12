"use client";

import { useRef, useEffect, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface SpotlightProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
  intensity?: number;
}

export function Spotlight({
  size = 400,
  color = "#7c3aed",
  intensity = 0.15,
  className,
  children,
  ...props
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.setProperty("--spotlight-x", `${x}px`);
      spotlight.style.setProperty("--spotlight-y", `${y}px`);
      spotlight.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = "0";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${size}px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${color}${Math.round(intensity * 255).toString(16).padStart(2, "0")}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
