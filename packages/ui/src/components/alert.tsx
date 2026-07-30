"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  title?: ReactNode;
  icon?: ReactNode;
  onDismiss?: () => void;
}

const variantStyles: Record<
  AlertVariant,
  { wrap: string; icon: string; accent: string }
> = {
  info: {
    wrap: "border-cyan-400/25 bg-cyan-500/[0.07]",
    icon: "text-cyan-300",
    accent: "via-cyan-300/50",
  },
  success: {
    wrap: "border-emerald-400/25 bg-emerald-500/[0.07]",
    icon: "text-emerald-300",
    accent: "via-emerald-300/50",
  },
  warning: {
    wrap: "border-amber-400/25 bg-amber-500/[0.07]",
    icon: "text-amber-300",
    accent: "via-amber-300/50",
  },
  error: {
    wrap: "border-red-400/25 bg-red-500/[0.07]",
    icon: "text-red-300",
    accent: "via-red-300/50",
  },
};

const defaultIcons: Record<AlertVariant, ReactNode> = {
  info: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path d="M8 3.5L13.5 13H2.5L8 3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 7v3M8 11.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = "info",
      title,
      icon,
      onDismiss,
      children,
      ...props
    },
    ref
  ) => {
    const styles = variantStyles[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative overflow-hidden rounded-xl border p-4 backdrop-blur-md",
          "animate-[nebula-fade-up_300ms_ease-out]",
          styles.wrap,
          className
        )}
        {...props}
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
            styles.accent
          )}
        />
        <div className="flex gap-3">
          <span className={cn("mt-0.5 shrink-0", styles.icon)}>
            {icon ?? defaultIcons[variant]}
          </span>
          <div className="min-w-0 flex-1">
            {title && (
              <div className="text-sm font-semibold text-white">{title}</div>
            )}
            {children && (
              <div className={cn("text-sm text-white/65", title && "mt-1")}>
                {children}
              </div>
            )}
          </div>
          {onDismiss && (
            <button
              type="button"
              onClick={onDismiss}
              aria-label="Dismiss"
              className="shrink-0 rounded-md p-1 text-white/40 transition hover:bg-white/[0.06] hover:text-white"
            >
              <svg viewBox="0 0 14 14" fill="none" className="size-3.5">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";
