"use client";

import ListDetailOption from "@/components/headerpage/listdetailoption";

import { usePageContext } from "@/app/hook/usePageContext";

import ItemList from "./_components/item-list";

export default function ItemPage() {

  usePageContext({
    sidebar: "list",
    header: <ListDetailOption />,
  });

  return (
    <>
      <ItemList />
    </>
  );
}
