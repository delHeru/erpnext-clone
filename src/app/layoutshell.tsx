"use client";

import clsx from "clsx";
import { useSidebarMode } from "@/store/sidebarModeContext";

import HeaderMenu from "@/components/headertop/headermenu";
import HeaderPage from "@/components/headerpage/headerpage";
import Sidebar from "@/components/sidebar/sidebar";
import AutoTitleWatcher from "@/components/autotitlewatcher";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useSidebarMode();

  const isBodyScroll = mode === "list" || mode === "detail";

  return (
    <div
      className={clsx(
        "flex flex-col h-screen",
        !isBodyScroll && "overflow-hidden"
      )}
    >
      <HeaderMenu />

      <div className="w-full mx-auto max-w-[1290px] max-[1200px]:max-w-[1000px] max-[990px]:max-w-[840px] max-[768px]:max-w-[540px]">
        <AutoTitleWatcher />
        <HeaderPage />

        <div className="flex px-3">
          <Sidebar />

          {/* 🔑 PANEL SCROLL HANYA SAAT MODE MENU */}
          <main
            className={clsx(
              "flex-1 pr-4 min-h-0",
              !isBodyScroll && "h-[calc(100vh-112px)] overflow-y-auto custom-scrollbar"
            )}
          >
            <div className="w-full border border-gray-200 dark:border-stone-800 rounded-xl p-4">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
