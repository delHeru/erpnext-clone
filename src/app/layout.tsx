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
          "text-foreground bg-background font-sans antialiased overflow-hidden",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <SidebarProvider>
            <div className="relative flex flex-col border-b border-gray-200 dark:border-stone-800">
              <HeaderMenu />
              <div className="w-full mx-auto max-w-[1290px] max-[1200px]:max-w-[1090px] max-[990px]:max-w-[840px] max-[768px]:max-w-[540px]">
                {/* Page Header */}
                <HeaderPage title="Home" />

                {/* Content */}
                <div className="flex flex-1 flex-col lg:flex-row gap-4 mt-4">
                  {/* Sidebar */}
                  <Sidebar />

                  {/* Main Content */}
                  <main className="flex-1">
                    <div className="border border-gray-200 dark:border-stone-800 rounded-xl p-4">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
