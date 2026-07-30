"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

export interface ToastOptions {
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void;
  dismiss: (id: string) => void;
}

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx)
    throw new Error("useToast must be used within a <ToastProvider>");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* Provider                                                            */
/* ------------------------------------------------------------------ */

export interface ToastProviderProps {
  children: ReactNode;
  /** Position of the toast stack */
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
}

let toastCounter = 0;

export function ToastProvider({
  children,
  position = "bottom-right",
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((options: ToastOptions) => {
    const id = `toast-${++toastCounter}`;
    const item: ToastItem = {
      id,
      type: options.type ?? "info",
      title: options.title,
      message: options.message,
      duration: options.duration ?? 4000,
    };
    setToasts((prev) => [...prev, item]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const positionClasses: Record<string, string> = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div
        aria-live="polite"
        aria-relevant="additions"
        className={cn(
          "pointer-events-none fixed z-[10000] flex flex-col gap-3",
          positionClasses[position]
        )}
      >
        {toasts.map((t) => (
          <ToastCard key={t.id} item={t} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/* Toast Card                                                          */
/* ------------------------------------------------------------------ */

const typeStyles: Record<
  ToastType,
  { border: string; icon: string; glow: string; iconBg: string }
> = {
  success: {
    border: "border-emerald-400/35",
    icon: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    glow: "shadow-[0_0_28px_-6px_rgba(52,211,153,0.45)]",
  },
  error: {
    border: "border-red-400/35",
    icon: "text-red-400",
    iconBg: "bg-red-400/10",
    glow: "shadow-[0_0_28px_-6px_rgba(248,113,113,0.45)]",
  },
  warning: {
    border: "border-amber-400/35",
    icon: "text-amber-400",
    iconBg: "bg-amber-400/10",
    glow: "shadow-[0_0_28px_-6px_rgba(251,191,36,0.45)]",
  },
  info: {
    border: "border-teal-400/35",
    icon: "text-teal-300",
    iconBg: "bg-teal-400/10",
    glow: "shadow-[0_0_28px_-6px_rgba(45,212,191,0.45)]",
  },
};

const typeIcons: Record<ToastType, ReactNode> = {
  success: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path
        d="M8 4v5M8 11.5v.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 16 16" fill="none" className="size-4">
      <path
        d="M8 4.5v.5M8 7v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

function ToastCard({
  item,
  onDismiss,
}: {
  item: ToastItem;
  onDismiss: (id: string) => void;
}) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const styles = typeStyles[item.type];

  useEffect(() => {
    if (item.duration && item.duration > 0) {
      timerRef.current = setTimeout(() => onDismiss(item.id), item.duration);
    }
    return () => clearTimeout(timerRef.current);
  }, [item, onDismiss]);

  return (
    <div
      role="status"
      className={cn(
        "pointer-events-auto flex w-80 items-start gap-3 rounded-xl border bg-[rgba(12,12,22,0.92)] p-4 backdrop-blur-xl",
        "motion-safe:animate-[nebula-slide-in-right_300ms_var(--nebula-ease-out)_both]",
        styles.border,
        styles.glow
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg",
          styles.iconBg,
          styles.icon
        )}
      >
        {typeIcons[item.type]}
      </span>
      <div className="min-w-0 flex-1">
        {item.title && (
          <div className="text-sm font-semibold text-white">{item.title}</div>
        )}
        <div
          className={cn(
            "text-sm text-white/55",
            item.title ? "mt-0.5" : "text-white/70"
          )}
        >
          {item.message}
        </div>
      </div>
      <button
        type="button"
        onClick={() => onDismiss(item.id)}
        className="shrink-0 rounded-md p-1 text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white"
        aria-label="Dismiss"
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
    </div>
  );
}
