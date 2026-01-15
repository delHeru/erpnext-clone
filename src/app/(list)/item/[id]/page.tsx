"use client";

import ListDetailOption from "@/components/headerpage/listdetailoption";

import { usePageContext } from "@/hook/usePageContext";

export default function ItemDetailPage(){

    usePageContext({
        sidebar: "detail",
        header: <ListDetailOption />,
      });

    return (
        <>
        Item Details
        </>
    )
}