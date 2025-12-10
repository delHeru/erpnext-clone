"use client";

import { useSidebar } from "@/store/sidebarContext";
import { ChevronDown, ChevronRight, Menu, ChevronUp } from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { MENU_DATA } from "@/config/menu";

export default function Sidebar() {
  const { collapsed } = useSidebar();

  const pathname = usePathname();

  // State untuk mengontrol toggle menu
  // Kita inisialisasi agar HR dan Payroll terbuka sesuai gambar referensi Anda
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    PUBLIC: true,
    HR: true,
    Accounting: true, // Saya buka sesuai gambar ke-2
  });

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // Mencari judul halaman aktif untuk ditampilkan di Header Sidebar (sebelah hamburger)
  const activeItem = MENU_DATA[0].items.find(
    (item) => item.href === pathname
  ) || { name: "Home" };

  return (
    <aside
      className={`max-[996px]:hidden
        ${collapsed ? "w-0" : "w-55 h-screen flex flex-col"
      }`}
    >
      {/* 2. Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-6 custom-scrollbar mr-5">
        {MENU_DATA.map((section) => (
          <div key={section.category} className="mt-0">
            {/* Section Header (PUBLIC) dengan Toggle */}
            <button
              onClick={() => toggleMenu(section.category)}
              className="flex items-center gap-1 w-full px-1 py-1 text-sm uppercase hover:text-gray-700 transition-colors cursor-pointer"
            >
              <ChevronDown size={16} strokeWidth={1.5}
                className={clsx(
                  "transition-transform",
                  !openMenus[section.category] && "-rotate-90"
                )}
              />
              {section.category}
            </button>

            {/* List Menu */}
            {openMenus[section.category] && (
              <ul>
                {section.items.map((item) => {
                  const isActive = pathname === item.href; // Cek URL aktif
                  const hasSubmenu = item.items && item.items.length > 0;
                  const isSubOpen = openMenus[item.name];

                  return (
                    <li key={item.name}>
                      {/* Parent Item */}
                      <div
                        onClick={() =>
                          hasSubmenu ? toggleMenu(item.name) : null
                        }
                        className={clsx(
                          "group flex items-center justify-between px-1 py-1.5 rounded-md cursor-pointer transition-all text-sm mr-3 mt-0.5 dark:text-gray-200",
                          // Active State: Background abu-abu muda, teks hitam (seperti 'Home' di gambar)
                          isActive && !hasSubmenu
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        )}
                      >
                        {hasSubmenu ? (
                          // Jika ada submenu (Dropdown)
                          <div className="flex items-center w-full gap-3 select-none">
                            <item.icon size={16} strokeWidth={1.5} className="group-hover:text-gray-700" />
                            <span className="flex-1">{item.name}</span>
                            {isSubOpen ? (
                              <ChevronUp size={16} strokeWidth={1.5} />
                            ) : (
                              <ChevronDown size={16} strokeWidth={1.5} />
                            )}
                          </div>
                        ) : (
                          // Jika link biasa
                          <Link
                            href={item.href || "#"}
                            className="flex items-center w-full gap-3"
                          >
                            <item.icon
                            size={16} strokeWidth={1.5}
                              className={clsx(
                                isActive
                                  ? "text-gray-800"
                                  : "text-gray-900 group-hover:text-gray-700 dark:text-gray-100"
                              )}
                            />
                            <span>{item.name}</span>
                          </Link>
                        )}
                      </div>

                      {/* Submenu Children */}
                      {hasSubmenu && isSubOpen && (
                        <div className="relative ml-3 pl-3 mt-1 mb-1">
                          {/* Garis vertikal tipis di kiri submenu (seperti gambar HR) */}
                          <div className="absolute left-0 top-1 bottom-1 w-px bg-gray-300"></div>

                          <ul className="space-y-0.5">
                            {item.items.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href || "#"}
                                  className="flex items-center gap-3 px-1 py-1 rounded-md text-sm hover:text-gray-900 hover:bg-zinc-100 transition-colors mr-3"
                                >
                                  {/* Render icon jika ada, jika tidak kosongkan */}
                                  {sub.icon ? (
                                    <sub.icon size={16} strokeWidth={1.5} 
                                    className={clsx(
                                isActive
                                  ? "text-gray-800"
                                  : "text-gray-900 group-hover:text-gray-700 dark:text-gray-100"
                              )} />
                                  ) : (
                                    // Fallback icon jika tidak ada di data (opsional: dot/circle)
                                    <div className="w-4 h-4" />
                                  )}
                                  <span>{sub.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
