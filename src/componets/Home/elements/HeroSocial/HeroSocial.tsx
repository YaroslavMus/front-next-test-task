import Image from 'next/image'
import Link from 'next/link'
import type { HeroSocial as HeroSocialType } from '@/types/home/hero'

type Props = {
    data: HeroSocialType
}

export const HeroSocial = ({ data }: Props) => {
    const { label, logoUrl, telegramUrl, youtubeUrl, email } = data

    return (
        <div className="social-card">
            <div className="social-card__top">
                <span className="social-card__label">{label}</span>

                <div className="social-card__logo">
                    <Image
                        src={logoUrl}
                        alt="Логотип"
                        width={32}
                        height={32}
                    />
                </div>
            </div>

            <div className="social-card__bottom">
                <Link
                    href={telegramUrl}
                    className="social-card__icon"
                    aria-label="Открыть Telegram"
                >
                    <Image
                        src="/images/socialCard/icon-telegram.svg"
                        alt=""
                        width={28}
                        height={28}
                        aria-hidden="true"
                    />
                </Link>

                <Link
                    href={youtubeUrl}
                    className="social-card__icon"
                    aria-label="Перейти на YouTube канал"
                >
                    <Image
                        src="/images/socialCard/icon-youtube.svg"
                        alt=""
                        width={28}
                        height={28}
                        aria-hidden="true"
                    />
                </Link>

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
