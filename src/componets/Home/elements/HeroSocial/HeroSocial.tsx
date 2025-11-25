import Image from 'next/image'
import Link from 'next/link'
import type { HeroSocial as HeroSocialType } from '@/types/home/hero'

type Props = {
    data: HeroSocialType
}

const getPlatformLabel = (platform: string) => {
    switch (platform) {
        case 'telegram':
            return 'Открыть Telegram'
        case 'youtube':
            return 'Перейти на YouTube-канал'
        default:
            return `Открыть ${platform}`
    }
}

export const HeroSocial = ({ data }: Props) => {
    const { label, logoUrl, email, links } = data

    return (
        <div className="social-card">
            <div className="social-card__top">
                <span className="social-card__label">{label}</span>

                <div className="social-card__logo">
                    <Image src={logoUrl} alt="Логотип" width={32} height={32} />
                </div>
            </div>

            <div className="social-card__bottom">
                {links.map(link => (
                    <Link
                        key={link.platform}
                        href={link.url}
                        className="social-card__icon"
                        aria-label={getPlatformLabel(link.platform)}
                    >
                        <Image
                            src={link.iconUrl}
                            alt={link.alt}
                            width={28}
                            height={28}
                        />
                    </Link>
                ))}

                <a
                    href={`mailto:${email}`}
                    className="social-card__email"
                    aria-label={`Написать письмо на ${email}`}
                >
                    {email}
                </a>
            </div>
        </div>
    )
}
