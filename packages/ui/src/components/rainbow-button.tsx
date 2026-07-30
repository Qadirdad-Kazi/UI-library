"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface RainbowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  glow?: boolean;
}

export const RainbowButton = forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ children, className, glow = true, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold text-white",
          "transition-all duration-300 active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/40",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#2dd4bf,#7c6af5,#f472b6,#38bdf8,#2dd4bf)] bg-[length:220%_auto] motion-safe:[animation:nebula-gradient-shift_3s_linear_infinite] motion-reduce:bg-[length:100%_auto]"
        />
        <span
          aria-hidden
          className="absolute inset-[1.5px] -z-10 rounded-full bg-[#06060d] transition-colors duration-300 group-hover:bg-[#0c0c16]"
        />
        {glow && (
          <span
            aria-hidden
            className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#2dd4bf,#7c6af5,#f472b6,#38bdf8,#2dd4bf)] bg-[length:220%_auto] opacity-35 blur-md transition-opacity duration-300 group-hover:opacity-70 motion-safe:[animation:nebula-gradient-shift_3s_linear_infinite] motion-reduce:hidden"
          />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

RainbowButton.displayName = "RainbowButton";
