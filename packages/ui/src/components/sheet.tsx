"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

export type SheetSide = "left" | "right" | "bottom";

export interface SheetProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose: () => void;
  side?: SheetSide;
  title?: ReactNode;
  description?: ReactNode;
  persistent?: boolean;
}

const sideStyles: Record<SheetSide, { panel: string; anim: string }> = {
  right: {
    panel: "inset-y-0 right-0 h-full w-full max-w-md border-l",
    anim: "animate-[nebula-slide-in-right_320ms_ease-out]",
  },
  left: {
    panel: "inset-y-0 left-0 h-full w-full max-w-md border-r",
    anim: "animate-[nebula-fade-up_320ms_ease-out]",
  },
  bottom: {
    panel: "inset-x-0 bottom-0 max-h-[85vh] w-full rounded-t-2xl border-t",
    anim: "animate-[nebula-slide-in-up_320ms_ease-out]",
  },
};

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  (
    {
      open,
      onClose,
      side = "right",
      title,
      description,
      persistent = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const previousFocus = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!open) return;
      previousFocus.current = document.activeElement as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && !persistent) onClose();
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
        panelRef.current
          ?.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
          ?.focus();
      });

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        previousFocus.current?.focus();
      };
    }, [open, onClose, persistent]);

    const handleBackdrop = useCallback(() => {
      if (!persistent) onClose();
    }, [onClose, persistent]);

    if (!open) return null;

    const styles = sideStyles[side];

    return (
      <div className="fixed inset-0 z-[9999]">
        <div
          aria-hidden
          onClick={handleBackdrop}
          className="absolute inset-0 bg-black/55 backdrop-blur-sm animate-[nebula-fade-in_200ms_ease-out]"
        />
        <div
          ref={(node) => {
            panelRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "nebula-sheet-title" : undefined}
          aria-describedby={description ? "nebula-sheet-desc" : undefined}
          className={cn(
            "absolute flex flex-col border-white/10 bg-[#0c0c16]/95 backdrop-blur-2xl",
            "shadow-[0_0_60px_-12px_rgba(0,0,0,0.8)]",
            styles.panel,
            styles.anim,
            className
          )}
          {...props}
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] px-5 py-4">
            <div>
              {title && (
                <h2
                  id="nebula-sheet-title"
                  className="text-lg font-semibold tracking-tight"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  id="nebula-sheet-desc"
                  className="mt-1 text-sm text-white/55"
                >
                  {description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60 transition hover:bg-white/[0.08] hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-5">{children}</div>
        </div>
      </div>
    );
  }
);

Sheet.displayName = "Sheet";
