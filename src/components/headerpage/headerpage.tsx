"use client";

import { Button } from "@heroui/react";
import { ChevronsLeft, ChevronsRight, Menu } from "lucide-react";
import { useSidebar } from "@/store/sidebarContext";
import { useState } from "react";

export default function HeaderPage({ title }: { title: string }) {
  const { toggle, collapsed } = useSidebar();
  const[isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-row h-16 bg-amber-400 justify-between items-center">
      <div className="flex items-center gap-3">
        <Button 
          onClick={toggle} 
          isIconOnly 
          variant="light" 
          size="sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? !collapsed ? <ChevronsLeft size={24} strokeWidth={2} /> : <ChevronsRight size={24} strokeWidth={2} /> : <Menu size={18} strokeWidth={2.5} /> }
          
        </Button>
        <div className="text-[20px] font-semibold">{title}</div>
      </div>

      <div className="flex gap-2">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}
