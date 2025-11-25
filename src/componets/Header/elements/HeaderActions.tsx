'use client'

import Link from 'next/link'
import type { HeaderAction } from '@/types/header/header'
import { CartIcon, HeartIcon, SearchIcon } from './icons'

type Props = {
    actions: HeaderAction[]
}

const renderIcon = (type: HeaderAction['type']) => {
    switch (type) {
        case 'search':
            return <SearchIcon />
        case 'favorites':
            return <HeartIcon />
        case 'cart':
            return <CartIcon />
        default:
            return null
    }
}

export const HeaderActions = ({ actions }: Props) => {
    return (
        <div className="header__actions">
            {actions.map(action => (
                <Link
                    key={action.id}
                    href={action.href}
                    className="header__actions-link"
                    aria-label={action.ariaLabel}
                >
                    {renderIcon(action.type)}
                </Link>
            ))}
        </div>
    )
}
