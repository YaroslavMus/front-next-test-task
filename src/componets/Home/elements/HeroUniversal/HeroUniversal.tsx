import Image from 'next/image'
import Link from 'next/link'
import type { HeroUniversalCard as HeroUniversalCardType } from '@/types/home/hero'

type Props = {
    card: HeroUniversalCardType
}

export const HeroUniversal = ({ card }: Props) => {
    const { title, imageUrl, imageAlt, href } = card
    return (
        <>
            <div className="universal-card">
                <div className="universal-card-content">
                    <h3 className="universal-card__title">{title}</h3>

                    <Image
                        className="universal-card__image"
                        src={imageUrl}
                        alt={imageAlt}
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            <Link
                href={href}
                className="btn-arrow"
                aria-label={`Перейти к разделу: ${title}`}
            >
                <span className="btn-arrow__icon" aria-hidden="true" />
            </Link>
        </>
    )
}
