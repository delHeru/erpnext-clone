import {
  //   Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { BellIcon } from "lucide-react";

export default function NotifMenu() {
  return (
    // <Badge color="danger" content="99+" size="sm">
    <div className="mr-2 mt-0">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            isIconOnly
            variant="light"
            size="sm"
            className="!bg-transparent hover:!bg-transparent"
            disableRipple
          >
            <BellIcon size={18} color="gray" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="key"></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

    // </Badge>
  );
}
