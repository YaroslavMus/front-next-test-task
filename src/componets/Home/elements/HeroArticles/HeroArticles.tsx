import Image from 'next/image'
import Link from 'next/link'
import type { HeroArticlesBlock } from '@/types/home/hero'

type Props = {
    data: HeroArticlesBlock
}

export const HeroArticles = ({ data }: Props) => {
    const { label, iconUrl, href, ctaLabel, imageUrl, imageAlt } = data

    return (
        <div className="articles-card">
            <div className="articles-card__top">
                <span className="articles-card__label">{label}</span>

                <div className="articles-card__icon">
                    <Image
                        src={iconUrl}
                        alt="Иконка раздела статей"
                        width={24}
                        height={24}
                    />
                </div>
            </div>

            <div className="articles-card__bottom">
                <Link
                    href={href}
                    className="articles-card__link"
                    aria-label={`${ctaLabel} — ${label.toLowerCase()}`}
                >
                    <span
                        className="articles-card__link-icon arrow"
                        aria-hidden="true"
                    />
                    <span className="articles-card__link-text">{ctaLabel}</span>
                </Link>

                <div className="articles-card__image-wrap">
                    <Image
                        className="articles-card__image"
                        src={imageUrl}
                        alt={imageAlt}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}
