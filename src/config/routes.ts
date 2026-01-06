export type RouteMeta = {
  path: string
  label: string
  parent?: string
  dynamicLabel?: boolean
}

export const ROUTES: RouteMeta[] = [
  { path: '/home', label: 'Home' },

  // Accounting (TOP LEVEL)
  { path: '/accounting', label: 'Accounting' },

  // Payables FLAT, tapi logically di bawah Accounting
  {
    path: '/payables',
    label: 'Payables',
    parent: '/accounting',
  },
  {
    path: '/receivables',
    label: 'Receivables',
    parent: '/accounting',
  },

  { path: '/buying', label: 'Buying' },

  
  // ===== STOCK =====
  { path: '/stock', label: 'Stock' },
  { path: '/item', label: 'Item', parent: '/stock' },

  // ===== ITEM DETAIL (DYNAMIC) =====
  {
    path: '/item/[code]',
    label: 'Item Detail',
    parent: '/item',
    dynamicLabel: true, // ⬅️ label diganti param
  },
]
