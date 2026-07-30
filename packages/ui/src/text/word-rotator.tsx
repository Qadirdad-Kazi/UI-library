"use client";

import { useState, useEffect, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../utils/motion";

export interface WordRotatorProps extends HTMLAttributes<HTMLSpanElement> {
  words: string[];
  interval?: number;
}

export function WordRotator({
  words,
  interval = 3000,
  className,
  ...props
}: WordRotatorProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || words.length <= 1) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, reduced]);

  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden align-bottom",
        className
      )}
      aria-live="polite"
      aria-atomic="true"
      {...props}
    >
      <span
        className={cn(
          "inline-block bg-[linear-gradient(110deg,#7c6af5,#2dd4bf)] bg-clip-text text-transparent transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          !reduced &&
            (isAnimating
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100")
        )}
      >
        {words[index]}
      </span>
    </span>
  );
}
