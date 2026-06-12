"use client";

import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface NeonTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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

export const NeonTextarea = forwardRef<HTMLTextAreaElement, NeonTextareaProps>(
  ({ className, label, accent = "violet", error, id, rows = 4, ...props }, ref) => {
    const reactId = useId();
    const textareaId = id ?? reactId;
    const errorId = error ? `${textareaId}-error` : undefined;

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
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
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            aria-invalid={error ? true : undefined}
            aria-describedby={errorId}
            className={cn(
              "w-full resize-none bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-white/30",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="text-xs text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

NeonTextarea.displayName = "NeonTextarea";
