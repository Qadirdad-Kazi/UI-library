"use client";

import { useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { GradientButton } from "../components/gradient-button";

export interface NavbarFloatingLink {
  label: string;
  href: string;
}

export interface NavbarFloatingProps {
  links?: NavbarFloatingLink[];
  cta?: { label: string; href?: string; onClick?: () => void };
  /** When true, renders inline instead of fixed positioning */
  embedded?: boolean;
  className?: string;
}

export function NavbarFloating({
  links = [],
  cta,
  embedded = false,
  className,
}: NavbarFloatingProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn(
        embedded
          ? "relative w-full"
          : "fixed left-1/2 top-6 z-[100] -translate-x-1/2",
        "flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#0a0a14]/90 px-3 py-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-row sm:items-center sm:rounded-full sm:px-2 sm:py-1.5",
        embedded && "mx-auto w-fit",
        open
          ? "w-[calc(100vw-2rem)] max-w-[320px] items-stretch"
          : "items-center",
        className
      )}
      aria-label="Main navigation"
    >
      <div className="flex w-full items-center justify-between sm:hidden">
        <span className="pl-2 text-xs font-semibold uppercase tracking-wider text-white/45">
          Menu
        </span>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition duration-300 hover:border-teal-400/30 hover:bg-white/[0.08]"
          aria-label="Toggle floating menu"
          aria-expanded={open}
          aria-controls="navbar-floating-menu"
        >
          {open ? (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-3.5"
              aria-hidden
            >
              <path
                d="M3.75 3.75l8.5 8.5M12.25 3.75l-8.5 8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-3.5"
              aria-hidden
            >
              <path
                d="M2.75 12.25h10.5M2.75 8h10.5M2.75 3.75h10.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        id="navbar-floating-menu"
        className={cn(
          "flex flex-col gap-1 sm:flex-row sm:items-center",
          open ? "mt-3 flex" : "hidden sm:flex"
        )}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-2 text-sm text-white/55 transition duration-300 hover:bg-white/[0.06] hover:text-white sm:rounded-full sm:py-1.5"
          >
            {link.label}
          </a>
        ))}
        {cta && (
          <div className="mt-2 sm:ml-1 sm:mt-0">
            <GradientButton
              asChild={Boolean(cta.href)}
              variant="aurora"
              size="sm"
              className="w-full sm:w-auto"
              onClick={
                cta.href
                  ? undefined
                  : () => {
                      setOpen(false);
                      cta.onClick?.();
                    }
              }
            >
              {cta.href ? (
                <a
                  href={cta.href}
                  onClick={() => {
                    setOpen(false);
                    cta.onClick?.();
                  }}
                >
                  {cta.label}
                </a>
              ) : (
                cta.label
              )}
            </GradientButton>
          </div>
        )}
      </div>
    </nav>
  );
}
