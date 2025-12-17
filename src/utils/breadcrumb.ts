import { ROUTES } from '@/config/routes'

type BreadcrumbItem = {
  label: string
  href?: string
}

export function getBreadcrumb(pathname: string): BreadcrumbItem[] {
  // 1️⃣ cari route yang PERSIS dengan pathname
  const currentRoute = ROUTES.find(r => r.path === pathname)

  if (!currentRoute) return []

  const items: BreadcrumbItem[] = []

  let route = currentRoute

  // 2️⃣ naik ke parent
  while (route) {
    items.unshift({
      label: route.label,
      href: route.path,
    })

    if (!route.parent) break

    const parent = ROUTES.find(r => r.path === route.parent)
    if (!parent) break

    route = parent
  }

  return items
}
