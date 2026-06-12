"use client";

import { type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface GradientMeshProps extends HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  speed?: "slow" | "normal" | "fast";
}

const speedDurations = {
  slow: "20s",
  normal: "10s",
  fast: "5s",
} as const;

export function GradientMesh({
  colors = ["#7c3aed", "#22d3ee", "#ec4899", "#f97316"],
  speed = "normal",
  className,
  ...props
}: GradientMeshProps) {
  const duration = speedDurations[speed];

  // Build mesh gradient from 4 color stops
  const [c1, c2, c3, c4] = [
    colors[0] ?? "#7c3aed",
    colors[1] ?? "#22d3ee",
    colors[2] ?? "#ec4899",
    colors[3] ?? "#f97316",
  ];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-30",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-[-50%] size-[200%]"
        style={{
          background: `
            radial-gradient(at 20% 30%, ${c1} 0px, transparent 50%),
            radial-gradient(at 80% 20%, ${c2} 0px, transparent 50%),
            radial-gradient(at 40% 80%, ${c3} 0px, transparent 50%),
            radial-gradient(at 80% 70%, ${c4} 0px, transparent 50%)
          `,
          animation: `mesh-move ${duration} ease-in-out infinite`,
        }}
      />

      <style>{`
        @keyframes mesh-move {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5%, -5%) rotate(2deg); }
          50% { transform: translate(-3%, 5%) rotate(-1deg); }
          75% { transform: translate(3%, 2%) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}
