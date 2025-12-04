"use client";

import { useSidebar } from "@/store/sidebarContext";

export default function Sidebar() {
  const { collapsed } = useSidebar();

  return (
    <aside
      className={`transition-all duration-300
        ${collapsed ? "w-0 overflow-hidden" : "w-55"}`}
    >
      {/* isi menu sidebar */}
    </aside>
  );
}
