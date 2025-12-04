"use client";

import { UseSidebar } from "@/store/useSidebar";
import menu from "./menu";

export default function Sidebar() {
  const collapsed = UseSidebar((s) => s.collapsed);

  console.log("Sidebar render, collapsed =", collapsed);

  return (
    <aside
      className={`
        transition-all duration-300 border-r bg-white
        ${collapsed ? "w-0 overflow-hidden" : "w-64"}
      `}
    >
      <div className="p-3">
        {menu.map((item) => (
          <div key={item.key} className="py-2 px-2 hover:bg-gray-100 rounded-lg">
            {item.label}
          </div>
        ))}
      </div>
    </aside>
  );
}
