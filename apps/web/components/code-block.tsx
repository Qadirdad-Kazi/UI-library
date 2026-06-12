import { highlight } from "@/lib/highlight";
import { CopyButton } from "@/components/copy-button";

export async function CodeBlock({
  code,
  lang = "tsx",
  filename,
}: {
  code: string;
  lang?: "tsx" | "bash" | "ts";
  filename?: string;
}) {
  const html = await highlight(code, lang);

  return (
    <div className="group/code relative overflow-hidden rounded-xl border border-white/10 bg-[rgba(0,0,0,0.4)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="size-2 rounded-full bg-red-400/60" />
          <span className="size-2 rounded-full bg-amber-400/60" />
          <span className="size-2 rounded-full bg-emerald-400/60" />
          {filename && (
            <span className="ml-2 font-mono text-white/50">{filename}</span>
          )}
        </div>
        <CopyButton value={code} />
      </div>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
