"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useHeaderStore } from "@/store/headerstore";
import { routeToTitle } from "@/helpers/routetotitle";

export default function AutoTitleWatcher() {
  const pathname = usePathname();
  const setHeaderTitle = useHeaderStore((s) => s.setHeaderTitle);
  const clearHeaderExtra = useHeaderStore((s) => s.clearHeaderExtra);

  useEffect(() => {
    const newTitle = routeToTitle(pathname);
    setHeaderTitle(newTitle);

    // ketika berganti page, bersihkan extra component
    clearHeaderExtra();
  }, [pathname]);

  return null; // tidak merender apa-apa
}
