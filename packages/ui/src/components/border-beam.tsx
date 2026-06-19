"use client";

import { useId } from "react";
import { cn } from "../utils/cn";

export interface BorderBeamProps {
  className?: string;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  duration = 6,
  borderWidth = 1.5,
  colorFrom = "#a78bfa",
  colorTo = "#22d3ee",
  delay = 0,
}: BorderBeamProps) {
  const id = useId();
  const gradientId = `border-beam-grad-${id.replace(/:/g, "")}`;

  return (
    <>
      <style>{`
        @keyframes border-beam-dash {
          0% {
            stroke-dashoffset: 400;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit]",
          className
        )}
      >
        <svg
          className="absolute inset-0 size-full rounded-[inherit]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorFrom} stopOpacity={1} />
              <stop offset="50%" stopColor={colorTo} stopOpacity={1} />
              <stop offset="100%" stopColor="transparent" stopOpacity={0} />
            </linearGradient>
          </defs>
          <rect
            x={borderWidth / 2}
            y={borderWidth / 2}
            width="99%"
            height="99%"
            rx="inherit"
            stroke={`url(#${gradientId})`}
            strokeWidth={borderWidth}
            strokeDasharray="100 200"
            style={{
              animation: `border-beam-dash ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        </svg>
      </div>
    </>
  );
}
