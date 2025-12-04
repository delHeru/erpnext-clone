import "../styles/globals.css";

import type { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import HeaderMenu from "@/components/headertop/headermenu";
import ClientLayout from "./client-layout";



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
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <HeaderMenu />
            <ClientLayout>{children}</ClientLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
