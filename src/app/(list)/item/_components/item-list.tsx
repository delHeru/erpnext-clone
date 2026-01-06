"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useItemList } from "./state/use-item-list";
import { itemColumns } from "./table/item-columns";

import ItemTable from "./table/item-table";
import TableFooter from "./table/table-footer";

export default function ItemList() {
  const router = useRouter();

  const {
    rows,
    total,
    loading,
    init,
    loadMore,
  } = useItemList({ initialLimit: 20 });

  // 🔹 lifecycle page: initial load
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div className="flex flex-col gap-3">
      {/* TABLE */}
      <ItemTable
        rows={rows}
        columns={itemColumns}
        loading={loading}
        onRowClick={(item) =>
          router.push(`/item/${item.id}`)
        }
      />

      {/* FOOTER */}
      <TableFooter
        shown={rows.length}
        total={total}
        loading={loading}
        onLoadMore={loadMore}
      />
    </div>
  );
}
