"use client";

import { forwardRef, useId, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
}

/** Layout wrapper that unifies label / hint / error for form controls. */
export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      label,
      hint,
      error,
      required,
      htmlFor,
      children,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;

    return (
      <div ref={ref} className={cn("flex w-full flex-col gap-2", className)} {...props}>
        {label && (
          <label
            htmlFor={htmlFor}
            className="text-xs font-medium uppercase tracking-[0.16em] text-white/55"
          >
            {label}
            {required && (
              <span className="ml-1 text-teal-300/80" aria-hidden>
                *
              </span>
            )}
          </label>
        )}
        {children}
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

FormField.displayName = "FormField";
