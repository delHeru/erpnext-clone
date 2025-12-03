"use client";

import { Button } from "@heroui/react";
import { Menu } from "lucide-react";

export default function HeaderPage() {
  return (
    <div className="flex flex-row gap-2 mt-[-3px] justify-between">
      <div className="flex flex-row items-center">
        <div className="ml-[-8px]">
          <Button
            isIconOnly
            variant="light"
            size="sm"
            className="!bg-transparent hover:!bg-transparent"
            disableRipple
          >
            <Menu color="gray" size={19} stroke-width="2.5" />
          </Button>
        </div>
        <div className="ml-1 text-[20px] font-bold">Item</div>
      </div>
      <div className="flex flex-row items-center justify-end gap-2">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}
