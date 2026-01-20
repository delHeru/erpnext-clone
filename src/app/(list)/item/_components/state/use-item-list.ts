"use client";

import { useRef, useState } from "react";

async function fetchItemsApi({
  offset,
  limit,
  filters,
}: {
  offset: number;
  limit: number;
  filters: ItemFilters;
}) {
  const params = new URLSearchParams();

  params.set("offset", String(offset));
  params.set("limit", String(limit));

  if (filters.search) params.set("search", filters.search);
  if (filters.category) params.set("category", filters.category);
  if (filters.status) params.set("status", filters.status);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/items?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return res.json() as Promise<{
    data: Item[];
    total: number;
  }>;
}


/* =====================
   TYPES
   ===================== */

export type Item = {
  id: string;
  item_name: string;
  item_code: string;
  category: string;
  stock: number;
  status: "active" | "inactive";
  modified: string;
};

export type ItemFilters = {
  search?: string;
  category?: string;
  status?: "active" | "inactive";
  has_stock?: boolean;
  tags?: string[];
};

type UseItemListOptions = {
  initialLimit?: number;
};

/* =====================
   HOOK
   ===================== */

export function useItemList(options?: UseItemListOptions) {
  const limit = options?.initialLimit ?? 20;

  const [rows, setRows] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);
  const [filters, setFiltersState] = useState<ItemFilters>({});
  const [loading, setLoading] = useState(false);

  const offsetRef = useRef(0);

  async function fetchItems(replace = false) {
    setLoading(true);

    const result = await fetchItemsApi({
      offset: replace ? 0 : offsetRef.current,
      limit,
      filters,
    });

    setRows((prev) =>
      replace ? result.data : [...prev, ...result.data]
    );

    setTotal(result.total);

    offsetRef.current = replace
      ? result.data.length
      : offsetRef.current + result.data.length;

    setLoading(false);
  }

  /* =====================
     PUBLIC ACTIONS
     ===================== */

  function init() {
    offsetRef.current = 0;
    setRows([]);
    fetchItems(true);
  }

  function setFilters(next: ItemFilters) {
    offsetRef.current = 0;
    setRows([]);
    setFiltersState(next);
    fetchItems(true);
  }

  function loadMore() {
    if (rows.length >= total || loading) return;
    fetchItems(false);
  }

  return {
    rows,
    total,
    loading,
    filters,
    init,
    setFilters,
    loadMore,
    hasMore: rows.length < total,
  };
}

/* =====================
   MOCK BACKEND
   ===================== */

   
// async function mockFetchItems({
//   offset,
//   limit,
// }: {
//   offset: number;
//   limit: number;
//   filters: ItemFilters;
// }) {
//   await new Promise((r) => setTimeout(r, 400));

//   const total = 51;

//   const data: Item[] = Array.from({ length: limit }).map((_, i) => {
//     const index = offset + i + 1;
//     return {
//       id: String(index),
//       item_name: `Item ${index}`,
//       item_code: `ITM-${index}`,
//       category: "Medicine",
//       stock: Math.floor(Math.random() * 100),
//       status: index % 2 === 0 ? "active" : "inactive",
//       modified: new Date().toISOString(),
//     };
//   });

//   return { data, total };
// }
