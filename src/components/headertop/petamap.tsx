'use client'

import { Breadcrumbs, BreadcrumbItem } from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getBreadcrumb } from '@/utils/breadcrumb'

export default function PetaMap() {
  const pathname = usePathname()
  const items = getBreadcrumb(pathname)

  console.log('pathname real:', pathname)
  // 🔴 RULE: TIDAK TAMPIL JIKA HANYA 1 LEVEL
  if (!items || items.length < 2) return null

  return (
    <Breadcrumbs underline="hover" size="md">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <BreadcrumbItem key={index}>
            {isLast || !item.href ? (
              <span className="font-medium text-gray-500 dark:text-gray-400">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-900 dark:text-gray-100"
              >
                {item.label}
              </Link>
            )}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumbs>
  )
}
