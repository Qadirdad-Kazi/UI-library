"use client";

import { createContext, useContext, type ReactNode } from "react";

const CompactContext = createContext(false);

export function CompactModeProvider({
  compact = false,
  children,
}: {
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <CompactContext.Provider value={compact}>{children}</CompactContext.Provider>
  );
}

/** Resolves compact layout from an explicit prop or surrounding provider */
export function useCompactMode(explicit?: boolean) {
  const inherited = useContext(CompactContext);
  return explicit ?? inherited;
}
