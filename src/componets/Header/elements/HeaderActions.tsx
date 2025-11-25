'use client'

import Link from 'next/link'
import { SearchIcon } from './icons/SearchIcon'
import { HeartIcon } from './icons/HeartIcon'
import { CartIcon } from './icons/CartIcon'
import { useState } from 'react'
import cn from 'classnames'

export const HeaderActions = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="header__actions">
            <Link className="header__actions-link" href="/search" aria-label="Поиск">
                <SearchIcon />
            </Link>

            <Link className="header__actions-link" href="/favorites" aria-label="Избранное">
                <HeartIcon />
            </Link>

            <Link className="header__actions-link" href="/cart" aria-label="Корзина">
                <CartIcon />
            </Link>

            <button
                type="button"
                className={cn('header__actions-link', 'burger', { active: isMenuOpen })}
                onClick={() => setIsMenuOpen(v => !v)}
                aria-label="Меню"
                aria-expanded={isMenuOpen}
            >
                <span />
                <span />
            </button>
        </div>
    )
}
