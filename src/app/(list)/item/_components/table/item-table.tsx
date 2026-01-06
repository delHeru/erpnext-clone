"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@heroui/react";

import type { Item } from "../state/use-item-list";
import type { ItemColumn } from "./item-columns";

type ItemTableProps = {
  rows: Item[];
  columns: ItemColumn[];
  loading?: boolean;
  onRowClick?: (item: Item) => void;
};

export default function ItemTable({
  rows,
  columns,
  loading,
  onRowClick,
}: ItemTableProps) {
  return (
    <Table
      aria-label="Item list table"
      removeWrapper
      classNames={{
        table: "min-w-full",
      }}
    >
      {/* HEADER */}
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={mapAlign(column.align)}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>

      {/* BODY */}
      <TableBody
        items={rows}
        loadingState={loading ? "loading" : "idle"}
        loadingContent={<Spinner />}
        emptyContent={!loading && "No items found"}
      >
        {(item) => (
          <TableRow
  key={item.id}
  className="cursor-pointer hover:bg-default-100"
  onClick={() => onRowClick?.(item)}
>
  {(columnKey) => {
    const column = columns.find(
      (c) => c.key === columnKey
    );

    const value =
      item[columnKey as keyof Item];

    return (
      <TableCell>
        {renderCell(value, column)}
      </TableCell>
    );
  }}
</TableRow>

        )}
      </TableBody>
    </Table>
  );
}

/* =====================
   CELL RENDERER
   ===================== */

function renderCell(
  value: Item[keyof Item],
  column?: ItemColumn
): React.ReactNode {
  if (!column) return null;

  switch (column.type) {
    case "number":
      return (
        <span className="text-right block">
          {typeof value === "number" ? value : "-"}
        </span>
      );

    case "badge":
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium
            ${
              value === "active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-700"
            }`}
        >
          {String(value)}
        </span>
      );

    case "date":
      return (
        <span className="text-sm text-default-500">
          {value
            ? new Date(String(value)).toLocaleDateString()
            : "-"}
        </span>
      );

    case "text":
    default:
      return (
        <span
          className={
            column.primary ? "font-medium" : undefined
          }
        >
          {value != null ? String(value) : "-"}
        </span>
      );
  }
}

function mapAlign(
  align?: "left" | "center" | "right"
): "start" | "center" | "end" | undefined {
  switch (align) {
    case "left":
      return "start";
    case "right":
      return "end";
    case "center":
      return "center";
    default:
      return undefined;
  }
}
