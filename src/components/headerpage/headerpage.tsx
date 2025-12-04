"use client";

import { Button } from "@heroui/react";
import { Menu } from "lucide-react";
import { useSidebar } from "@/store/sidebarContext";

export default function HeaderPage({ title }: { title: string }) {
  const { toggle } = useSidebar();

  console.log("HeaderPage mounted, toggle exists?", toggle);

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex items-center gap-3">
        <Button onClick={toggle} isIconOnly variant="light" size="sm">
          <Menu size={18} strokeWidth={2.5} />
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
