import { Item } from "@/types";

export async function fetchItems(params?: {
  limit?: number;
  offset?: number;
}) {
  const searchParams = new URLSearchParams();

  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.offset) searchParams.set("offset", String(params.offset));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/items?${searchParams.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  return (await res.json()) as Item[];
}
