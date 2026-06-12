"use client";

import { DEMO_COMPONENTS } from "./index";

export function DemoRenderer({ slug }: { slug: string }) {
  const Demo = DEMO_COMPONENTS[slug];
  if (!Demo) {
    return (
      <p className="text-sm text-white/50">No live demo for &quot;{slug}&quot;.</p>
    );
  }
  return <Demo />;
}
