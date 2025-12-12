"use client";

import { Button, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import {
  ChevronsLeft,
  ChevronsRight,
  Menu,
} from "lucide-react";
import { useSidebar } from "@/store/sidebarContext";
import { useState } from "react";
import SidebarMobile from "../sidebar/sidebarmobile";

import { useHeaderStore } from "@/store/headerstore";
import { AnimatePresence, motion } from "framer-motion";


export default function HeaderPage() {
  const { toggle, collapsed } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);

  const headerTitle = useHeaderStore((state) => state.headerTitle);
  const headerExtra = useHeaderStore((state) => state.headerExtra);

  return (
    <Navbar
      classNames={{
        base: "w-full top-12 h-14 z-6 bg-(--heroui-background) dark:bg-(--heroui-background)",
        wrapper:
          "mx-auto max-w-[1290px] max-[1200px]:max-w-[1090px] max-[990px]:max-w-[840px] max-[768px]:max-w-[540px] px-2",
      }}
      height={60}
    >
      <NavbarBrand>
        <Button
          onClick={toggle}
          isIconOnly
          variant="light"
          size="sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-[996px]:hidden"
        >
          {isHovered ? (
            !collapsed ? (
              <ChevronsLeft size={24} strokeWidth={2} />
            ) : (
              <ChevronsRight size={24} strokeWidth={2} />
            )
          ) : (
            <Menu size={18} strokeWidth={2.5} />
          )}
        </Button>
        <SidebarMobile />
        <div className="text-[20px] font-semibold ml-1">
          <AnimatePresence mode="wait">
            <motion.h1
              key={headerTitle}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="font-bold text-xl"
            >
              {headerTitle}
            </motion.h1>
          </AnimatePresence>
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <AnimatePresence mode="wait">
          {headerExtra && (
            <motion.div
              key="header-extra"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {headerExtra}
            </motion.div>
          )}
        </AnimatePresence>
      </NavbarContent>
    </Navbar>
  );
}
