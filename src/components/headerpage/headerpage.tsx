"use client";

import { Button, Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import { ChevronsLeft, ChevronsRight, Menu } from "lucide-react";
import { useSidebar } from "@/store/sidebarContext";
import { useState } from "react";

export default function HeaderPage({ title }: { title: string }) {
  const { toggle, collapsed } = useSidebar();
  const[isHovered, setIsHovered] = useState(false);

  return (
    // <div className="flex h-15 justify-between sticky top-12 z-6 bg-white">
    //   <div className="flex items-center gap-3">
    //     <Button 
    //       onClick={toggle} 
    //       isIconOnly 
    //       variant="light" 
    //       size="sm"
    //       onMouseEnter={() => setIsHovered(true)}
    //       onMouseLeave={() => setIsHovered(false)}
    //       >
    //         {isHovered ? !collapsed ? <ChevronsLeft size={24} strokeWidth={2} /> : <ChevronsRight size={24} strokeWidth={2} /> : <Menu size={18} strokeWidth={2.5} /> }
          
    //     </Button>
    //     <div className="text-[20px] font-semibold">{title}</div>
    //   </div>

    //   <div className="flex gap-2">
    //     <div>1</div>
    //     <div>1</div>
    //     <div>1</div>
    //   </div>
    // </div>
    <Navbar className="top-12 z-6" shouldHideOnScroll isBordered>
      <NavbarContent>
        <NavbarItem>
          <div className="bg-blue-500 h-5 w-5"></div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
