import Image from 'next/image'
import Link from 'next/link'
import type { HeroArticlesBlock } from '@/types/home/hero'

type Props = {
    data: HeroArticlesBlock
}

export const HeroArticles = ({ data }: Props) => {
    const { label, iconUrl, href, ctaLabel, imageUrl, imageAlt } = data

    const safeImageUrl = imageUrl || null
    const safeIconUrl = iconUrl || null

    return (
        <div className="articles-card">
            <div className="articles-card__top">
                <span className="articles-card__label">{label}</span>

                {safeIconUrl && (
                    <div className="articles-card__icon">
                        <Image
                            src={safeIconUrl}
                            alt="Иконка раздела статей"
                            width={24}
                            height={24}
                        />
                    </div>
                )}
            </div>

            <div className="articles-card__bottom">
                <Link href={href} className="articles-card__link" aria-label={ctaLabel}>
                    <span className="articles-card__link-icon arrow"></span>
                    <span className="articles-card__link-text">{ctaLabel}</span>
                </Link>

                <div className="articles-card__image-wrap">
                    {safeImageUrl && (
                        <Image
                            className="articles-card__image"
                            src={safeImageUrl}
                            alt={imageAlt}
                            width={300}
                            height={300}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
