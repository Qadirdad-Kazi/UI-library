"use client";

import {
  forwardRef,
  useRef,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../utils/motion";

export interface MagneticButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
}

/** Button that gently magnetizes toward the cursor. */
export const MagneticButton = forwardRef<
  HTMLButtonElement,
  MagneticButtonProps
>(
  (
    {
      className,
      strength = 0.35,
      children,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const reduced = usePrefersReducedMotion();

    const setRefs = (node: HTMLButtonElement | null) => {
      localRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
      onMouseMove?.(e);
      if (reduced || !localRef.current) return;
      const rect = localRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      localRef.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleLeave = (e: MouseEvent<HTMLButtonElement>) => {
      onMouseLeave?.(e);
      if (localRef.current) {
        localRef.current.style.transform = "translate(0px, 0px)";
      }
    };

    return (
      <button
        ref={setRefs}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white",
          "backdrop-blur-md transition-transform duration-200 ease-out",
          "hover:border-white/25 hover:bg-white/[0.07]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/40",
          "will-change-transform",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";
