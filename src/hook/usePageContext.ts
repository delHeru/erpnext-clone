"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

import { useHeaderStore } from "@/store/headerstore";
import { useSidebarMode, SidebarMode } from "@/store/sidebarModeContext";

type PageContextOptions = {
  sidebar?: SidebarMode;
  header?: ReactNode;
};

export function usePageContext(options: PageContextOptions) {
  const { sidebar = "menu", header } = options;

  const setHeaderExtra = useHeaderStore((s) => s.setHeaderExtra);
  const clearHeaderExtra = useHeaderStore((s) => s.clearHeaderExtra);

  const { setMode } = useSidebarMode();

  useEffect(() => {
    // SET saat page aktif
    if (header) {
      setHeaderExtra(header);
    }

    setMode(sidebar);

    // CLEANUP saat page keluar
    return () => {
      clearHeaderExtra();
      setMode("menu");
    };
  }, [sidebar, header, setHeaderExtra, clearHeaderExtra, setMode]);
}
