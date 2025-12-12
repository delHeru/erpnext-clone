export function routeToTitle(path: string): string {
  if (path === "/") return "Home";

  return path
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" / ");
}
