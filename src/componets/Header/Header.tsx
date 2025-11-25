// src/components/Header/Header.tsx
import { getHeader } from '@/lib/api/header'
import { HeaderLogo } from './elements/HeaderLogo'
import { HeaderNav } from './elements/HeaderNav'
import { HeaderActions } from './elements/HeaderActions'
import './Header.scss'

export const Header = async () => {
    const data = await getHeader()
    return (
        <header className="header">
            <div className="header__container container">
                <HeaderLogo logoUrl={data.logoUrl} logoAlt={data.logoAlt} />
                <HeaderNav items={data.nav} />
                <HeaderActions actions={data.actions} />
            </div>
        </header>
    )
}
