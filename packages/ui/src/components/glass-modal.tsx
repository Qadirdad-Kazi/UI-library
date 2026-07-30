"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
  type MouseEvent,
} from "react";
import { cn } from "../utils/cn";

export type GlassModalSize = "sm" | "md" | "lg" | "full";

export interface GlassModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  size?: GlassModalSize;
  /** Disable closing by clicking the backdrop */
  persistent?: boolean;
}

const sizeMap: Record<GlassModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  full: "max-w-[90vw] max-h-[90vh]",
};

export const GlassModal = forwardRef<HTMLDivElement, GlassModalProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      size = "md",
      persistent = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!open) return;

      previousActiveElement.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && !persistent) {
          onClose();
          return;
        }
        if (e.key === "Tab" && panelRef.current) {
          const focusable = panelRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      requestAnimationFrame(() => {
        const focusable = panelRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusable?.focus();
      });

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        previousActiveElement.current?.focus?.();
        previousActiveElement.current = null;
      };
    }, [open, onClose, persistent]);

    const handleBackdropClick = useCallback(
      (e: MouseEvent) => {
        if (e.target === overlayRef.current && !persistent) {
          onClose();
        }
      },
      [onClose, persistent]
    );

    if (!open) return null;

    return (
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "glass-modal-title" : undefined}
        aria-describedby={description ? "glass-modal-desc" : undefined}
        onClick={handleBackdropClick}
        className={cn(
          "fixed inset-0 z-[9999] grid place-items-center p-4",
          "bg-black/60 backdrop-blur-sm",
          "motion-safe:animate-[fade-in_200ms_ease-out] motion-reduce:animate-none"
        )}
      >
        <div
          ref={(node) => {
            panelRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(
            "relative w-full overflow-hidden rounded-2xl",
            "border border-white/10 bg-white/[0.04] backdrop-blur-xl",
            "shadow-[0_0_60px_-12px_rgba(45,212,191,0.25)]",
            "motion-safe:animate-[scale-fade-in_300ms_ease-out] motion-reduce:animate-none",
            sizeMap[size],
            className
          )}
          {...props}
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/55 to-transparent"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-20 grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="p-6 sm:p-8">
            {title && (
              <h2
                id="glass-modal-title"
                className="pr-10 text-xl font-semibold tracking-tight text-white sm:text-2xl"
              >
                {title}
              </h2>
            )}
            {description && (
              <p id="glass-modal-desc" className="mt-2 text-sm text-white/55">
                {description}
              </p>
            )}
            <div className={cn(title || description ? "mt-6" : "")}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GlassModal.displayName = "GlassModal";
