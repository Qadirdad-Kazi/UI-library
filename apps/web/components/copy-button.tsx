"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@nebula/ui";

export function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy code"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="size-3 text-emerald-400" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-3" />
          Copy
        </>
      )}
    </button>
  );
}
