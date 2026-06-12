"use client";

import { type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface RetroGridProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  angle?: number;
}

export function RetroGrid({
  color = "rgba(139, 92, 246, 0.3)",
  angle = 65,
  className,
  ...props
}: RetroGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ transform: `rotateX(${angle}deg)` }}
      >
        <div
          className="absolute inset-[-200%] animate-[retro-grid-scroll_20s_linear_infinite]"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${color} 1px, transparent 1px),
              linear-gradient(to bottom, ${color} 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Fade mask at top */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[var(--color-bg,#05050a)] to-transparent" />

      <style>{`
        @keyframes retro-grid-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
      `}</style>
    </div>
  );
}
