// utils/breadcrumb.ts
import { ROUTES, type RouteMeta } from '@/config/routes'

export type BreadcrumbItem = {
  label: string
  href?: string
}

function matchDynamic(routePath: string, pathname: string) {
  if (!routePath.includes('[')) return null

  const regex = new RegExp(
    '^' +
      routePath
        .replace(/\[.*?\]/g, '([^/]+)')
        .replace(/\//g, '\\/') +
      '$'
  )

  return pathname.match(regex)
}

export function getBreadcrumb(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = []

  let current: RouteMeta | undefined
  let dynamicValue: string | undefined

  // exact match
  current = ROUTES.find(r => r.path === pathname)

  // dynamic match
  if (!current) {
    for (const route of ROUTES) {
      const match = matchDynamic(route.path, pathname)
      if (match) {
        current = route
        dynamicValue = match[1]
        break
      }
    }
  }

  if (!current) return items

  while (current) {
    const parentPath: string | undefined = current.parent // ✅ EXPLICIT TYPE

    items.unshift({
      label:
        current.dynamicLabel && dynamicValue
          ? dynamicValue
          : current.label,
      href: current.path.includes('[') ? undefined : current.path,
    })

    if (!parentPath) break
    current = ROUTES.find(r => r.path === parentPath)
  }

  return items
}
