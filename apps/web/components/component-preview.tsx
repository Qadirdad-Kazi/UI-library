"use client";

import { DEMO_COMPONENTS, type DemoProps } from "@/components/demos";
import type { ComponentType } from "react";
import { SectionPreviewShell } from "@/components/section-preview-shell";
import { isSectionPreview } from "@/lib/preview-utils";
import { cn, CompactModeProvider } from "@nebula/ui";

export function ComponentPreview({ slug }: { slug: string }) {
  const Demo = DEMO_COMPONENTS[slug] as ComponentType<DemoProps> | undefined;
  const preview = isSectionPreview(slug);

  if (!Demo) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-white/30">
        Preview not available
      </div>
    );
  }

  const demo = <Demo preview={preview} />;

  return (
    <div
      className={cn(
        "bg-[#08080e]",
        preview && "max-h-[min(480px,72vh)] overflow-x-hidden overflow-y-auto [scrollbar-width:thin]"
      )}
    >
      {preview ? (
        <CompactModeProvider compact>
          <SectionPreviewShell>{demo}</SectionPreviewShell>
        </CompactModeProvider>
      ) : (
        demo
      )}
    </div>
  );
}
