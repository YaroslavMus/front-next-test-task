import { HeaderLogo } from './elements/HeaderLogo'
import { HeaderNav } from './elements/HeaderNav'
import { HeaderActions } from './elements/HeaderActions'
import './Header.scss'
export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <HeaderLogo />
                <HeaderNav />
                <HeaderActions />
            </div>
        </header>
    )
}
