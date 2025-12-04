"use client";

import { ReactNode } from "react";
import HeaderPage from "@/components/headerpage/headerpage";
import Sidebar from "@/components/sidebar/sidebar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-4">
      
      {/* Page Header */}
      <HeaderPage title="Home" />

      {/* Content */}
      <div className="flex flex-row h-[calc(100vh-112px)] overflow-hidden mt-3">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="border border-gray-200 rounded-xl p-4 mr-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
