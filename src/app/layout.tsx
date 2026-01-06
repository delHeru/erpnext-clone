import "../styles/globals.css";

import type { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { SidebarProvider } from "@/store/sidebarContext";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import HeaderMenu from "@/components/headertop/headermenu";
import HeaderPage from "@/components/headerpage/headerpage";
import Sidebar from "@/components/sidebar/sidebar";
import AutoTitleWatcher from "@/components/autotitlewatcher";
import { SidebarModeProvider } from "@/store/sidebarModeContext";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s - ${siteConfig.name}",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "text-foreground bg-(--heroui-background) font-sans antialiased overflow-y-auto",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <SidebarProvider>
            <SidebarModeProvider>
              <div className="flex flex-col">
                <HeaderMenu />
              <div className="w-full h-[100v] mx-auto max-w-[1290px] max-[1200px]:max-w-[1000px] max-[990px]:max-w-[840px] max-[768px]:max-w-[540px]">
                {/* Page Header */}
                <AutoTitleWatcher />
                <HeaderPage />

                {/* Content */}
                <div className="flex px-3">
                  {/* Sidebar */}
                  
                  <Sidebar />

                  {/* Main Content */}
                  <main className="flex-1">
                    <div className="w-full border border-gray-200 dark:border-stone-800 rounded-xl p-4">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
              </div>
              
            </SidebarModeProvider>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
