export const ROUTES = [
  { path: '/home', label: 'Home' },

  { path: '/accounting', label: 'Accounting' },
  {
    path: '/accounting/payables',
    label: 'Payables',
    parent: '/accounting',
  },

  { path: '/stock', label: 'Stock' },
  { path: '/item', label: 'Item', parent: '/stock' },
]
