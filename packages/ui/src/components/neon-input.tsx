"use client";

import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
} from "react";
import { cn } from "../utils/cn";

export interface NeonInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  accent?: "violet" | "cyan" | "pink";
  error?: string;
}

const accentMap = {
  violet:
    "focus-within:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] focus-within:border-violet-400/60",
  cyan: "focus-within:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] focus-within:border-cyan-400/60",
  pink: "focus-within:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)] focus-within:border-pink-400/60",
} as const;

export const NeonInput = forwardRef<HTMLInputElement, NeonInputProps>(
  ({ className, label, accent = "violet", error, id, ...props }, ref) => {
    const reactId = useId();
    const inputId = id ?? reactId;
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium uppercase tracking-[0.18em] text-white/60"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex items-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md",
            "transition-all duration-300",
            accentMap[accent],
            error && "border-red-400/60"
          )}
        >
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "h-12 w-full bg-transparent px-4 text-base text-white outline-none placeholder:text-white/30",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

NeonInput.displayName = "NeonInput";
