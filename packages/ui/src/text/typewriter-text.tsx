"use client";

import { useState, useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

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
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const words = Array.isArray(text) ? text : [text];

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, speed);
      } else if (words.length > 1 || loop) {
        // Finished typing, wait then start deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, wordIndex]);

  // Initial delay
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDisplayText(words[0].slice(0, 1));
    }, delay);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={cn("inline", className)} {...props}>
      {displayText}
      {cursor && (
        <span className="ml-0.5 animate-[blink_1s_step-end_infinite]">
          {cursorChar}
        </span>
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
