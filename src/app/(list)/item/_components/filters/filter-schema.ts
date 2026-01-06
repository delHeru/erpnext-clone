export type ItemFilterField = {
  key: string;
  label: string;
  type: "text" | "select" | "boolean" | "tags" | "number";
  options?: {
    label: string;
    value: string;
  }[];
};

export const itemFilterSchema: ItemFilterField[] = [
  {
    key: "search",
    label: "Search",
    type: "text",
  },
  {
    key: "category",
    label: "Category",
    type: "select",
    options: [
      { label: "Medicine", value: "medicine" },
      { label: "Supplement", value: "supplement" },
      { label: "Medical Device", value: "device" },
    ],
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ],
  },
  {
    key: "has_stock",
    label: "Has Stock",
    type: "boolean",
  },
  {
    key: "tags",
    label: "Tags",
    type: "tags",
  },
];
