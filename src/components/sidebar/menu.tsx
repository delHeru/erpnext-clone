'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { MENU_DATA } from '@/config/menu'

type MenuLinksProps = {
  onCloseDrawer: () => void
}

export default function MenuPage({ onCloseDrawer }: MenuLinksProps) {
  const pathname = usePathname()

  // ========================================
  // USER TOGGLE STATE (ONLY USER ACTION)
  // ========================================
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    PUBLIC: true,
  })

  const toggleMenu = (key: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // ========================================
  // AUTO OPEN FROM URL (DERIVED, NO STATE)
  // ========================================
  const autoOpenMenus = useMemo(() => {
    const result: Record<string, boolean> = {}

    MENU_DATA.forEach(section => {
      section.items.forEach(item => {
        if (item.items?.some(sub => sub.href === pathname)) {
          result[item.name] = true
          result[section.category] = true
        }
      })
    })

    return result
  }, [pathname])

  // ========================================
  // FINAL OPEN CHECK (USER > URL > DEFAULT)
  // ========================================
  const isMenuOpen = (key: string) =>
    openMenus[key] ?? autoOpenMenus[key] ?? false

  return (
    <div className="flex-1 pb-6">
      {MENU_DATA.map(section => {
        const isSectionOpen = isMenuOpen(section.category)

        return (
          <div key={section.category} className="mb-2">
            {/* ============================= */}
            {/* SECTION HEADER */}
            {/* ============================= */}
            <button
              type="button"
              onClick={() => toggleMenu(section.category)}
              className="flex items-center gap-1 w-full px-1 py-1 text-sm uppercase"
            >
              <ChevronDown
                size={16}
                strokeWidth={1.5}
                className={clsx(
                  'transition-transform',
                  isSectionOpen && 'rotate-180'
                )}
              />
              {section.category}
            </button>

            {/* ============================= */}
            {/* SECTION ITEMS */}
            {/* ============================= */}
            {isSectionOpen && (
              <ul>
                {section.items.map(item => {
                  const hasSubmenu = !!item.items?.length
                  const isSubOpen = isMenuOpen(item.name)
                  const isParentActive = pathname === item.href

                  return (
                    <li key={item.name}>
                      {/* ============================= */}
                      {/* PARENT MENU */}
                      {/* ============================= */}
                      <div
                        className={clsx(
                          'group flex items-center justify-between px-1 py-1.5 rounded-md text-sm mr-3 mt-0.5 transition-colors',
                          isParentActive
                            ? 'bg-gray-100 text-gray-900 dark:bg-zinc-800 dark:text-gray-100'
                            : 'text-gray-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-gray-100'
                        )}
                      >
                        <Link
                          href={item.href || '#'}
                          onClick={onCloseDrawer}
                          className="flex items-center gap-3 flex-1"
                        >
                          <item.icon size={16} strokeWidth={1.5} />
                          <span>{item.name}</span>
                        </Link>

                        {hasSubmenu && (
                          <button
                            type="button"
                            onClick={e => {
                              e.stopPropagation()
                              toggleMenu(item.name)
                            }}
                            className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700"
                          >
                            {isSubOpen ? (
                              <ChevronUp size={16} strokeWidth={1.5} />
                            ) : (
                              <ChevronDown size={16} strokeWidth={1.5} />
                            )}
                          </button>
                        )}
                      </div>

                      {/* ============================= */}
                      {/* SUBMENU */}
                      {/* ============================= */}
                      {hasSubmenu && isSubOpen && (
                        <div className="relative ml-3 pl-3 mt-1 mb-1">
                          <div className="absolute left-0 top-1 bottom-1 w-px bg-gray-300" />

                          <ul className="space-y-0.5">
                            {item.items!.map(sub => {
                              const isSubActive =
                                sub.href === pathname

                              return (
                                <li key={sub.name}>
                                  <Link
                                    href={sub.href || '#'}
                                    onClick={onCloseDrawer}
                                    className={clsx(
                                      'flex items-center gap-3 px-1 py-1 rounded-md text-sm transition-colors mr-3',
                                      isSubActive
                                        ? 'bg-gray-200 text-gray-900'
                                        : 'hover:bg-zinc-100 text-gray-900'
                                    )}
                                  >
                                    {sub.icon ? (
                                      <sub.icon
                                        size={16}
                                        strokeWidth={1.5}
                                      />
                                    ) : (
                                      <div className="w-4 h-4" />
                                    )}
                                    <span>{sub.name}</span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
