import { getComponent } from "@/lib/components-registry";

const INLINE_PREVIEW_CATEGORIES = new Set([
  "primitives",
  "backgrounds",
  "text-animations",
]);

export function isSectionPreview(slug: string) {
  const component = getComponent(slug);
  if (!component) return false;
  return !INLINE_PREVIEW_CATEGORIES.has(component.category);
}
