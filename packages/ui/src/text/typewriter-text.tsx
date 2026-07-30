"use client";

import { useState, useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../utils/motion";

export interface TypewriterTextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  cursor?: boolean;
  cursorChar?: string;
  loop?: boolean;
  /** Pause duration between words (ms) when text is array */
  pauseDuration?: number;
}

export function TypewriterText({
  text,
  speed = 50,
  deleteSpeed = 30,
  delay = 500,
  cursor = true,
  cursorChar = "|",
  loop = false,
  pauseDuration = 2000,
  className,
  ...props
}: TypewriterTextProps) {
  const words = Array.isArray(text) ? text : [text];
  const reduced = usePrefersReducedMotion();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (reduced) {
      setDisplayText(words[0] ?? "");
      setReady(true);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(words[0]?.slice(0, 1) ?? "");
      setReady(true);
    }, delay);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (reduced || !ready) return;

    const currentWord = words[wordIndex] ?? "";

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, speed);
      } else if (words.length > 1 || loop) {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else if (displayText.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deleteSpeed);
    } else {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, wordIndex, ready, reduced]);

  return (
    <span
      className={cn("inline", className)}
      aria-live="polite"
      aria-atomic="true"
      {...props}
    >
      {displayText}
      {cursor && !reduced && (
        <span
          aria-hidden
          className="ml-0.5 text-teal-300/80 motion-safe:[animation:nebula-cursor-blink_1s_step-end_infinite]"
        >
          {cursorChar}
        </span>
      )}
      <style>{`
        @keyframes nebula-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
