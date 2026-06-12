"use client";

import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type HTMLAttributes,
} from "react";
import { cn } from "../utils/cn";

export type GlowTooltipSide = "top" | "right" | "bottom" | "left";

export interface GlowTooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  content: ReactNode;
  side?: GlowTooltipSide;
  accent?: "violet" | "cyan" | "pink";
  /** Delay in ms before showing */
  delay?: number;
  children: ReactNode;
}

const accentBorder = {
  violet: "border-violet-400/40 shadow-[0_0_20px_-4px_rgba(139,92,246,0.5)]",
  cyan: "border-cyan-400/40 shadow-[0_0_20px_-4px_rgba(34,211,238,0.5)]",
  pink: "border-pink-400/40 shadow-[0_0_20px_-4px_rgba(236,72,153,0.5)]",
} as const;

const sidePositions: Record<GlowTooltipSide, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function GlowTooltip({
  content,
  side = "top",
  accent = "violet",
  delay = 200,
  children,
  className,
  ...props
}: GlowTooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };
  const hide = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className={cn("relative inline-flex", className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      {...props}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={cn(
            "absolute z-50 whitespace-nowrap rounded-lg border bg-[#0a0a14]/95 px-3 py-1.5 text-xs text-white/90 backdrop-blur-xl",
            "animate-[scale-fade-in_150ms_ease-out]",
            accentBorder[accent],
            sidePositions[side]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
