"use client";

import { type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  colors?: [string, string, string];
  speed?: "slow" | "normal" | "fast";
  blur?: number;
}

const speedDurations = {
  slow: "20s",
  normal: "12s",
  fast: "6s",
} as const;

export function AuroraBackground({
  colors = ["#7c3aed", "#22d3ee", "#ec4899"],
  speed = "normal",
  blur = 120,
  className,
  ...props
}: AuroraBackgroundProps) {
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
      <div
        className="absolute -top-1/4 left-1/4 aspect-square w-[60%] rounded-full opacity-30"
        style={{
          background: colors[0],
          filter: `blur(${blur}px)`,
          animation: `aurora-float-1 ${duration} ease-in-out infinite`,
        }}
      />
      <div
        className="absolute -bottom-1/4 right-1/4 aspect-square w-[50%] rounded-full opacity-25"
        style={{
          background: colors[1],
          filter: `blur(${blur}px)`,
          animation: `aurora-float-2 ${duration} ease-in-out infinite`,
          animationDelay: `-${parseFloat(duration) / 3}s`,
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background: colors[2],
          filter: `blur(${blur}px)`,
          animation: `aurora-float-3 ${duration} ease-in-out infinite`,
          animationDelay: `-${(parseFloat(duration) * 2) / 3}s`,
        }}
      />

      <style>{`
        @keyframes aurora-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30%, 20%) scale(1.1); }
          66% { transform: translate(-20%, 10%) scale(0.9); }
        }
        @keyframes aurora-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30%, -15%) scale(1.15); }
          66% { transform: translate(20%, -25%) scale(0.85); }
        }
        @keyframes aurora-float-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-30%, -60%) scale(1.2); }
          66% { transform: translate(-70%, -40%) scale(0.8); }
        }
      `}</style>
    </div>
  );
}
