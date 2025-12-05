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
    <div className="w-full 
              max-w-full 
              md:max-w-xs 
              lg:max-w-sm mr-4 mt-0">
      <Input
        placeholder="Search or type a command (Ctrl + G)"
        className="max-w-sm"
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
    </div>

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
