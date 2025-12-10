import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function PetaMap() {
  return (
    <Breadcrumbs underline="hover" size="md">
      <BreadcrumbItem>Stock</BreadcrumbItem>
      <BreadcrumbItem>Item</BreadcrumbItem>
      <BreadcrumbItem>1234-BLA-126GB</BreadcrumbItem>
    </Breadcrumbs>
  );
}
