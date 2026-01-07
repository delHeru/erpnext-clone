"use client";

import { useSidebar } from "@/store/sidebarContext";
import { useSidebarMode } from "@/store/sidebarModeContext";

import MenuPage from "./menu";
import React from "react";
import FilterSidebar from "./filtersidebar";
import DetailSidebar from "./detailsidebar";

export default function Sidebar() {
  const { collapsed } = useSidebar();
  const { mode } = useSidebarMode();

  const [isOpen, setIsOpen] = React.useState(false);
  

  return (
    <aside
      className={`max-[996px]:hidden h-screen mr-4 overflow-y-auto custom-scrollbar
        ${collapsed ? "w-0" : "w-55 flex flex-col flex-shrink-0"
      }`}
    >
      {mode === "menu" && <MenuPage onCloseDrawer={() => setIsOpen(false)} />}
      {mode === "list" && <FilterSidebar />}
      {mode === "detail" && <DetailSidebar />}
      
      
    </aside>
  );
}
