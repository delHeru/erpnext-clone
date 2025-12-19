import { getBreadcrumb } from '@/utils/breadcrumb'

export function routeToTitle(pathname: string): string {
  const items = getBreadcrumb(pathname)

  // fallback
  if (!items.length) {
    if (pathname === '/' || pathname === '/home') return 'Home'
    return ''
  }

  // 🔑 AMBIL ITEM TERAKHIR SAJA
  return items[items.length - 1].label
}
