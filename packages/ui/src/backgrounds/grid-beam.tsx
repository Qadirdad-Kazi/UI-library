"use client";

import { type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface GridBeamProps extends HTMLAttributes<HTMLDivElement> {
  beamColor?: string;
  gridColor?: string;
  speed?: "slow" | "normal" | "fast";
  gridSize?: number;
}

const speedDurations = {
  slow: "8s",
  normal: "4s",
  fast: "2s",
} as const;

export function GridBeam({
  beamColor = "#7c3aed",
  gridColor = "rgba(255,255,255,0.04)",
  speed = "normal",
  gridSize = 48,
  className,
  ...props
}: GridBeamProps) {
  const duration = speedDurations[speed];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Horizontal beam */}
      <div
        className="absolute left-0 h-px w-full"
        style={{
          top: "40%",
          background: `linear-gradient(90deg, transparent, ${beamColor}, transparent)`,
          backgroundSize: "200% 100%",
          animation: `grid-beam-h ${duration} ease-in-out infinite`,
          opacity: 0.6,
          filter: `drop-shadow(0 0 8px ${beamColor})`,
        }}
      />

      {/* Vertical beam */}
      <div
        className="absolute top-0 h-full w-px"
        style={{
          left: "60%",
          background: `linear-gradient(180deg, transparent, ${beamColor}, transparent)`,
          backgroundSize: "100% 200%",
          animation: `grid-beam-v ${duration} ease-in-out infinite`,
          animationDelay: `-${parseFloat(duration) / 2}s`,
          opacity: 0.6,
          filter: `drop-shadow(0 0 8px ${beamColor})`,
        }}
      />

      <style>{`
        @keyframes grid-beam-h {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }
        @keyframes grid-beam-v {
          0%, 100% { background-position: 0 -200%; }
          50% { background-position: 0 200%; }
        }
      `}</style>
    </div>
  );
}
