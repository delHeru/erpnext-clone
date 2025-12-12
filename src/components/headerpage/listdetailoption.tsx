import { Button } from "@heroui/react";
import { ChevronsUpDown, Ellipsis, List, Plus, RefreshCcw } from "lucide-react";

export default function ListDetailOption() {
  return (
    <div className="flex gap-2">
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
    </div>
  )

}