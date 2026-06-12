import type { ReactNode } from "react";
import { cn } from "@nebula/ui";

export function SectionPreviewShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full",
        "[&_section]:!py-6",
        "[&_section_.px-6]:!px-4",
        "[&_.mb-16]:!mb-6",
        "[&_.mb-10]:!mb-4",
        "[&_.mb-12]:!mb-4",
        "[&_.mt-14]:!mt-6",
        "[&_.mt-16]:!mt-6",
        "[&_h1]:!text-3xl",
        "[&_h2.text-4xl]:!text-2xl",
        "[&_h2.text-5xl]:!text-2xl",
        "[&_h2.md\\:text-5xl]:!text-2xl",
        "[&_h2.md\\:text-6xl]:!text-3xl",
        "[&_.text-5xl]:!text-3xl",
        "[&_.text-6xl]:!text-3xl",
        "[&_.min-h-\\[80vh\\]]:!min-h-0",
        className
      )}
    >
      {children}
    </div>
  );
}
