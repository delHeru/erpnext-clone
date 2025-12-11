"use client";

import { Button, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  Ellipsis,
  List,
  Menu,
  Plus,
  RefreshCcw,
} from "lucide-react";
import { useSidebar } from "@/store/sidebarContext";
import { useState } from "react";
import SidebarMobile from "../sidebar/sidebarmobile";

export default function HeaderPage({ title }: { title: string }) {
  const { toggle, collapsed } = useSidebar();
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="text-[20px] font-semibold ml-1">{title}</div>
      </NavbarBrand>
      <NavbarContent className="gap-2" justify="end">
        <Button
          className="def-butt"
          size="sm"
          startContent={<List size={16} strokeWidth={1} />}
          endContent={<ChevronsUpDown size={16} strokeWidth={1} />}
        >
          List View
        </Button>

        <Button className="def-butt" isIconOnly size="sm">
          <RefreshCcw size={16} strokeWidth={1} />
        </Button>
        <Button className="def-butt" isIconOnly size="sm">
          <Ellipsis size={16} strokeWidth={1} />
        </Button>
        <Button
          className="bg-[#171717] text-white dark:bg-white dark:text-[#171717]"
          size="sm"
          startContent={<Plus size={16} />}
        >
          Add Item
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
