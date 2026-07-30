"use client";

import {
  forwardRef,
  useId,
  useState,
  useRef,
  useEffect,
  useCallback,
  type HTMLAttributes,
} from "react";
import { cn } from "../utils/cn";

export interface NeonSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface NeonSelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  label?: string;
  options: NeonSelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  accent?: "violet" | "cyan" | "pink" | "teal";
  error?: string;
  disabled?: boolean;
}

const accentMap = {
  violet: {
    focus:
      "shadow-[0_0_0_1px_rgba(124,106,245,0.45),0_0_28px_-6px_rgba(124,106,245,0.4)] border-[#7c6af5]/50",
    highlight: "bg-[#7c6af5]/20 text-violet-200",
  },
  cyan: {
    focus:
      "shadow-[0_0_0_1px_rgba(34,211,238,0.45),0_0_28px_-6px_rgba(34,211,238,0.4)] border-cyan-400/50",
    highlight: "bg-cyan-500/20 text-cyan-200",
  },
  pink: {
    focus:
      "shadow-[0_0_0_1px_rgba(236,72,153,0.45),0_0_28px_-6px_rgba(236,72,153,0.4)] border-pink-400/50",
    highlight: "bg-pink-500/20 text-pink-200",
  },
  teal: {
    focus:
      "shadow-[0_0_0_1px_rgba(45,212,191,0.45),0_0_28px_-6px_rgba(45,212,191,0.4)] border-teal-400/50",
    highlight: "bg-teal-500/20 text-teal-200",
  },
} as const;

export const NeonSelect = forwardRef<HTMLDivElement, NeonSelectProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      placeholder = "Select an option",
      accent = "teal",
      error,
      disabled,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const reactId = useId();
    const selectId = id ?? reactId;
    const [isOpen, setIsOpen] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((o) => o.value === value);
    const colors = accentMap[accent];

    const close = useCallback(() => {
      setIsOpen(false);
      setHighlightIndex(-1);
    }, []);

    useEffect(() => {
      if (!isOpen) return;
      const handler = (e: Event) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          close();
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [isOpen, close]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          if (isOpen && highlightIndex >= 0) {
            const opt = options[highlightIndex];
            if (!opt.disabled) {
              onChange?.(opt.value);
              close();
            }
          } else {
            setIsOpen(true);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setHighlightIndex((prev) =>
              Math.min(prev + 1, options.length - 1)
            );
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Escape":
          close();
          break;
      }
    };

    return (
      <div className="flex w-full flex-col gap-2" ref={containerRef}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-xs font-medium uppercase tracking-[0.16em] text-white/55"
          >
            {label}
          </label>
        )}
        <div ref={ref} className={cn("relative", className)} {...props}>
          <button
            id={selectId}
            type="button"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={`${selectId}-listbox`}
            disabled={disabled}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            className={cn(
              "flex h-12 w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 text-base backdrop-blur-md",
              "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isOpen && colors.focus,
              error &&
                "border-red-400/55 shadow-[0_0_0_1px_rgba(248,113,113,0.35)]",
              disabled && "pointer-events-none opacity-50"
            )}
          >
            <span className={selectedOption ? "text-white" : "text-white/30"}>
              {selectedOption?.label ?? placeholder}
            </span>
            <svg
              className={cn(
                "size-4 text-white/40 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {isOpen && (
            <ul
              id={`${selectId}-listbox`}
              role="listbox"
              className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[rgba(12,12,22,0.95)] py-1 shadow-2xl backdrop-blur-xl motion-safe:animate-[nebula-scale-in_150ms_var(--nebula-ease-out)_both]"
            >
              {options.map((opt, i) => (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={opt.value === value}
                  aria-disabled={opt.disabled}
                  className={cn(
                    "cursor-pointer px-4 py-2.5 text-sm text-white/80 transition-colors",
                    i === highlightIndex && colors.highlight,
                    opt.value === value && "font-medium text-white",
                    opt.disabled && "pointer-events-none opacity-40",
                    !opt.disabled && "hover:bg-white/[0.06]"
                  )}
                  onMouseEnter={() => setHighlightIndex(i)}
                  onClick={() => {
                    if (!opt.disabled) {
                      onChange?.(opt.value);
                      close();
                    }
                  }}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

NeonSelect.displayName = "NeonSelect";
