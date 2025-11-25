import Link from 'next/link'
import Image from 'next/image'

export const HeaderLogo = () => (
    <div className="header__logo">
        <Link className="header__logo-link" href="/">
            <Image
                className="header__logo-img"
                src="/images/logo.svg"
                width={305}
                height={40}
                alt="Cryptoro"
                priority
            />
        </Link>
    </div>
)
