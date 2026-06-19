"use client";

import React, { type ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface RainbowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function RainbowButton({
  children,
  className,
  glow = true,
  ...props
}: RainbowButtonProps) {
  return (
    <>
      <style>{`
        @keyframes rainbow-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <button
        className={cn(
          "group relative inline-flex h-10 items-center justify-center rounded-full px-6 py-2 text-sm font-medium text-white transition-all duration-300 active:scale-95 overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Animated gradient border */}
        <span
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#ff007f,#7f00ff,#00f0ff,#ff007f)] bg-[length:200%_auto]"
          style={{
            animation: "rainbow-shift 3s linear infinite",
          }}
        />
        
        {/* Inside dark face */}
        <span className="absolute inset-[1.5px] -z-10 rounded-full bg-[#05050a] transition-all duration-300 group-hover:bg-[#0a0a14]" />
        
        {/* Outer radial glow */}
        {glow && (
          <span
            className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#ff007f,#7f00ff,#00f0ff,#ff007f)] bg-[length:200%_auto] opacity-30 blur-md transition-opacity duration-300 group-hover:opacity-75"
            style={{
              animation: "rainbow-shift 3s linear infinite",
            }}
          />
        )}
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    </>
  );
}
