export type ItemColumn = {
  key: string;
  label: string;
  primary?: boolean;
  type?: "text" | "number" | "badge" | "date";
  align?: "left" | "right" | "center";
  sortable?: boolean;
};

export const itemColumns: ItemColumn[] = [
  {
    key: "item_name",
    label: "Item Name",
    primary: true,
    sortable: true,
  },
  {
    key: "item_code",
    label: "Item Code",
    sortable: true,
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "stock",
    label: "Stock",
    type: "number",
    align: "right",
  },
  {
    key: "status",
    label: "Status",
    type: "badge",
  },
  {
    key: "modified",
    label: "Last Modified",
    type: "date",
    sortable: true,
  },
];