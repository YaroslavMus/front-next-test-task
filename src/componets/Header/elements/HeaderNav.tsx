"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { HeaderNavItem } from '@/types/header/header'

type Props = {
    items: HeaderNavItem[]
}

export const HeaderNav = ({ items }: Props) => {
    const pathname = usePathname()

    return (
        <nav className="header__nav">
            {items.map(item => {
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </nav>
    )
}
