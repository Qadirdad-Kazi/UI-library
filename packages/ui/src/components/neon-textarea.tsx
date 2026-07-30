"use client";

import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface NeonTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  accent?: "violet" | "cyan" | "pink" | "teal";
  error?: string;
}

const accentMap = {
  violet:
    "focus-within:shadow-[0_0_0_1px_rgba(167,139,250,0.45),0_0_28px_-6px_rgba(139,92,246,0.45)] focus-within:border-violet-400/50",
  cyan: "focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.45),0_0_28px_-6px_rgba(34,211,238,0.4)] focus-within:border-cyan-400/50",
  pink: "focus-within:shadow-[0_0_0_1px_rgba(244,114,182,0.45),0_0_28px_-6px_rgba(236,72,153,0.4)] focus-within:border-pink-400/50",
  teal: "focus-within:shadow-[0_0_0_1px_rgba(45,212,191,0.45),0_0_28px_-6px_rgba(45,212,191,0.4)] focus-within:border-teal-400/50",
} as const;

export const NeonTextarea = forwardRef<HTMLTextAreaElement, NeonTextareaProps>(
  (
    {
      className,
      label,
      hint,
      accent = "teal",
      error,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const reactId = useId();
    const textareaId = id ?? reactId;
    const errorId = `${textareaId}-error`;
    const hintId = `${textareaId}-hint`;

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-xs font-medium uppercase tracking-[0.16em] text-white/55"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md",
            "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            accentMap[accent],
            error &&
              "border-red-400/55 focus-within:border-red-400/70 focus-within:shadow-[0_0_0_1px_rgba(248,113,113,0.4),0_0_24px_-6px_rgba(248,113,113,0.35)]"
          )}
        >
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            aria-invalid={error ? true : undefined}
            aria-describedby={
              error ? errorId : hint ? hintId : undefined
            }
            className={cn(
              "w-full resize-none bg-transparent px-4 py-3 text-base text-white outline-none placeholder:text-white/30",
              className
            )}
            {...props}
          />
        </div>
        {error ? (
          <p id={errorId} className="text-xs text-red-400" role="alert">
            {error}
          </p>
        ) : hint ? (
          <p id={hintId} className="text-xs text-white/40">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

NeonTextarea.displayName = "NeonTextarea";
