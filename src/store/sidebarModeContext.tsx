"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type SidebarMode = "menu" | "list" | "detail";

type SidebarModeContextValue = {
  mode: SidebarMode;
  setMode: (m: SidebarMode) => void;
};

const SidebarModeContext =
  createContext<SidebarModeContextValue | null>(null);

export function SidebarModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<SidebarMode>("menu");

  return (
    <SidebarModeContext.Provider value={{ mode, setMode }}>
      {children}
    </SidebarModeContext.Provider>
  );
}

export function useSidebarMode() {
  const ctx = useContext(SidebarModeContext);
  if (!ctx) {
    throw new Error(
      "useSidebarMode must be used within SidebarModeProvider"
    );
  }
  return ctx;
}
