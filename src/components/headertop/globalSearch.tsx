import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@heroui/react";
import { SearchIcon } from "lucide-react";

export default function GlobalSearch() {
  return (
      <Input
        placeholder="Search or type a command (Ctrl + G)"
        classNames={{
          base: "h-[27px] min-h-[27px]",
          inputWrapper: "h-full py-0 !min-h-0 rounded-md",
          input: "h-full !leading-[28px] text-[13px] font-light",
        }}
        startContent={
          <SearchIcon size={16} color="gray" className="mr-1.5 ml-1" />
        }
        isClearable
      />

    // <Dropdown placement="bottom-start">
    //   <DropdownTrigger>
    //   </DropdownTrigger>
    //   <DropdownMenu aria-label="Search Filters">
    //     <DropdownItem key="customer">Customer</DropdownItem>
    //     <DropdownItem key="supplier">Supplier</DropdownItem>
    //     <DropdownItem key="item">Item</DropdownItem>
    //     <DropdownItem key="invoice">Invoice</DropdownItem>
    //   </DropdownMenu>
    // </Dropdown>
  );
}
