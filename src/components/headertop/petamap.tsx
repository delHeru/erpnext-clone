import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function PetaMap() {
  return (
    <Breadcrumbs className="ml-8" underline="hover" size="sm">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Music</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
  );
}
