"use client";

import { useState, type ReactNode } from "react";
import { useCompactMode } from "../utils/compact-context";
import { cn } from "../utils/cn";
import {
  sectionGridGap,
  sectionHeading,
  sectionInset,
  sectionPadding,
  sectionSubheading,
  type SectionDensityProps,
} from "../utils/section";

export interface FaqAccordionItem {
  question: string;
  answer: ReactNode;
}

export interface FaqAccordionProps extends SectionDensityProps {
  title?: ReactNode;
  description?: ReactNode;
  items: FaqAccordionItem[];
  className?: string;
}

export function FaqAccordion({
  title = "Frequently asked questions",
  description,
  items,
  compact: compactProp,
  className,
}: FaqAccordionProps) {
  const compact = useCompactMode(compactProp);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn(sectionPadding(compact), className)}>
      <div className={sectionInset(compact, "max-w-3xl")}>
        <div className="text-center">
          <h2 className={cn("text-white", sectionHeading(compact))}>{title}</h2>
          {description && (
            <p
              className={cn(
                "mt-4 text-white/55",
                sectionSubheading(compact)
              )}
            >
              {description}
            </p>
          )}
        </div>

        <div className={cn("flex flex-col gap-3", sectionGridGap(compact))}>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isOpen
                    ? "border-teal-400/25 bg-white/[0.04]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.03]"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 text-left font-medium text-white/90 transition duration-300 hover:text-white",
                    compact ? "px-4 py-4 text-sm" : "px-6 py-5 text-base"
                  )}
                >
                  <span>{item.question}</span>
                  <svg
                    className={cn(
                      "size-5 shrink-0 text-white/40 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                      isOpen && "rotate-45 text-teal-300/80"
                    )}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={cn(
                    "grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      className={cn(
                        "pb-5 text-sm leading-relaxed text-white/55",
                        compact ? "px-4" : "px-6"
                      )}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
