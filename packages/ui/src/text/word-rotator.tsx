"use client";

import { useState, useEffect, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={cn("relative inline-block overflow-hidden", className)}
      {...props}
    >
      <span
        className={cn(
          "inline-block transition-all duration-300 ease-out",
          isAnimating
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        )}
      >
        {words[index]}
      </span>
    </span>
  );
}
