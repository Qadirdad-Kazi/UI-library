"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface BlurRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function BlurReveal({
  children,
  delay = 0,
  duration = 800,
  className,
  ...props
}: BlurRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        revealed
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-4 opacity-0 blur-md",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
