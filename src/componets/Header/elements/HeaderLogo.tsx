import Image from 'next/image'
import Link from 'next/link'

type Props = {
    logoUrl: string
    logoAlt: string
}

export const HeaderLogo = ({ logoUrl, logoAlt }: Props) => (
    <div className="header__logo">
        <Link className="header__logo-link" href="/">
            <Image
                className="header__logo-img"
                src={logoUrl}
                alt={logoAlt}
                width={150}
                height={32}
            />
        </Link>
    </div>
)
