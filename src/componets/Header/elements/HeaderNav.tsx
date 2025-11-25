'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

const NAV_LINKS = [
    { href: '/', label: 'Главная' },
    { href: '/catalog', label: 'Каталог' },
    { href: '/brands', label: 'Бренды' },
    { href: '/delivery', label: 'Доставка и оплата' },
    { href: '/help', label: 'Помощь' },
    { href: '/company', label: 'Компания' },
]

export const HeaderNav = () => {
    const pathname = usePathname()

    return (
        <nav className="header__nav" aria-label="Основная навигация">
            {NAV_LINKS.map(link => {
                const isActive = pathname === link.href
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn('header__nav-link', { active: isActive })}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </nav>
    )
}
