"use client";

import { useSidebar } from "@/store/sidebarContext";
import MenuPage from "./menu";
import React from "react";

export default function Sidebar() {
  const { collapsed } = useSidebar();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <aside
      className={`max-[996px]:hidden overflow-y-auto h-screen custom-scrollbar mr-4
        ${collapsed ? "w-0" : "w-55 flex flex-col"
      }`}
    >
      <MenuPage onCloseDrawer={() => setIsOpen(false)} />
      
    </aside>
  );
}
