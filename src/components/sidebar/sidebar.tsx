"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { label: "Home", href: "/", icon: Home },
    { label: "Documents", href: "/documents", icon: FileText },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside
      className="
        w-[220px]
        border-r
        border-default-200
        bg-white
        h-full
        overflow-y-auto
        shrink-0
      "
    >
      <nav className="px-3 py-4 space-y-1 text-[13px]">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-2 px-3 py-2 rounded
                transition-colors

                ${active
                  ? "bg-default-100 font-medium"
                  : "hover:bg-default-100"}
              `}
            >
              <Icon size={16} strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
