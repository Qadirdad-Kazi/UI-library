"use client";

import { useState, useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type TextScrambleTrigger = "auto" | "hover" | "scroll";

export interface TextScrambleProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  speed?: number;
  trigger?: TextScrambleTrigger;
  scrambleChars?: string;
}

const DEFAULT_SCRAMBLE = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export function TextScramble({
  text,
  speed = 30,
  trigger = "auto",
  scrambleChars = DEFAULT_SCRAMBLE,
  className,
  ...props
}: TextScrambleProps) {
  const [display, setDisplay] = useState(trigger === "auto" ? "" : text);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const runScramble = () => {
    if (hasRun && trigger !== "hover") return;
    setHasRun(true);

    let iteration = 0;
    const maxIterations = text.length;

    const step = () => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return scrambleChars[
              Math.floor(Math.random() * scrambleChars.length)
            ];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration < maxIterations) {
        frameRef.current = setTimeout(step, speed);
      } else {
        setDisplay(text);
      }
    };

    step();
  };

  // Auto trigger
  useEffect(() => {
    if (trigger === "auto") {
      const timeout = setTimeout(runScramble, 200);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  // Scroll trigger
  useEffect(() => {
    if (trigger !== "scroll") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runScramble();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  useEffect(() => {
    return () => clearTimeout(frameRef.current);
  }, []);

  return (
    <span
      ref={ref}
      className={cn("inline-block font-mono", className)}
      onMouseEnter={trigger === "hover" ? () => { setHasRun(false); runScramble(); } : undefined}
      {...props}
    >
      {display || text}
    </span>
  );
}
