"use client";

import {
  createContext,
  useContext,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

type AccordionContextValue = {
  open: Set<string>;
  toggle: (id: string) => void;
  type: "single" | "multiple";
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion parts must be used within <Accordion>");
  return ctx;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  children: ReactNode;
}

export function Accordion({
  type = "single",
  defaultValue,
  className,
  children,
  ...props
}: AccordionProps) {
  const initial = new Set(
    Array.isArray(defaultValue)
      ? defaultValue
      : defaultValue
        ? [defaultValue]
        : []
  );
  const [open, setOpen] = useState(initial);

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (type === "single") next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <AccordionContext.Provider value={{ open, toggle, type }}>
      <div className={cn("flex w-full flex-col gap-2", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({
  value,
  className,
  children,
  ...props
}: AccordionItemProps) {
  return (
    <div
      data-value={value}
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] backdrop-blur-md transition-colors hover:border-white/15",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface AccordionTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function AccordionTrigger({
  value,
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const { open, toggle } = useAccordion();
  const isOpen = open.has(value);

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white transition",
        "hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-300/30",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          "grid size-6 place-items-center rounded-md border border-white/10 text-white/50 transition-transform duration-300",
          isOpen && "rotate-45 border-teal-300/30 text-teal-200"
        )}
      >
        <svg viewBox="0 0 12 12" className="size-3" fill="none">
          <path
            d="M6 1v10M1 6h10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionContent({
  value,
  className,
  children,
  ...props
}: AccordionContentProps) {
  const { open } = useAccordion();
  const isOpen = open.has(value);

  return (
    <div
      hidden={!isOpen}
      className={cn(
        "border-t border-white/[0.06] px-5 pb-4 pt-3 text-sm leading-relaxed text-white/60",
        isOpen && "animate-[nebula-fade-up_280ms_ease-out]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
