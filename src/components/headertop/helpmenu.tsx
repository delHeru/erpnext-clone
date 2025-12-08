import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { ChevronDownIcon } from "lucide-react";

export default function HelpMenu() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          variant="light"
          endContent={<ChevronDownIcon size={18} color="gray" />}
          size="sm"
          className="!bg-transparent hover:!bg-transparent gap-1 text-[13px] font-light text-gray-900 dark:text-gray-500"
          disableRipple
        >
          Bantuan
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="item"></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
