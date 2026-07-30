"use client";

import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export interface NeonInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  accent?: "violet" | "cyan" | "pink" | "teal";
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const accentMap = {
  violet:
    "focus-within:shadow-[0_0_0_1px_rgba(167,139,250,0.45),0_0_28px_-6px_rgba(139,92,246,0.45)] focus-within:border-violet-400/50",
  cyan: "focus-within:shadow-[0_0_0_1px_rgba(34,211,238,0.45),0_0_28px_-6px_rgba(34,211,238,0.4)] focus-within:border-cyan-400/50",
  pink: "focus-within:shadow-[0_0_0_1px_rgba(244,114,182,0.45),0_0_28px_-6px_rgba(236,72,153,0.4)] focus-within:border-pink-400/50",
  teal: "focus-within:shadow-[0_0_0_1px_rgba(45,212,191,0.45),0_0_28px_-6px_rgba(45,212,191,0.4)] focus-within:border-teal-400/50",
} as const;

export const NeonInput = forwardRef<HTMLInputElement, NeonInputProps>(
  (
    {
      className,
      label,
      hint,
      accent = "teal",
      error,
      id,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const reactId = useId();
    const inputId = id ?? reactId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium uppercase tracking-[0.16em] text-white/55"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 backdrop-blur-md",
            "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            accentMap[accent],
            error &&
              "border-red-400/55 focus-within:border-red-400/70 focus-within:shadow-[0_0_0_1px_rgba(248,113,113,0.4),0_0_24px_-6px_rgba(248,113,113,0.35)]"
          )}
        >
          {leftIcon && (
            <span className="shrink-0 text-white/40">{leftIcon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={error ? true : undefined}
            aria-describedby={
              error ? errorId : hint ? hintId : undefined
            }
            className={cn(
              "h-12 w-full bg-transparent text-base text-white outline-none placeholder:text-white/30",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="shrink-0 text-white/40">{rightIcon}</span>
          )}
        </div>
        {error ? (
          <p id={errorId} role="alert" className="text-xs text-red-400">
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

NeonInput.displayName = "NeonInput";
