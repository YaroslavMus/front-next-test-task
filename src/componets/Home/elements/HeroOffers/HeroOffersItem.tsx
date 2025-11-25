import Image from 'next/image'
import Link from 'next/link'
import type { HeroOffer } from '@/types/home/hero'

type Props = {
    offer: HeroOffer
}

export const HeroOffersItem = ({ offer }: Props) => {
    return (
        <Link
            href={offer.link}
            className="offers-card__item"
            aria-label={`Открыть предложение: ${offer.title}`}
        >
            <Image
                className="offers-card__item-img"
                src={offer.imageUrl}
                alt={offer.imageAlt}
                width={80}
                height={80}
            />

            <div className="offers-card__item-info">
                <div className="offers-card__item-title">{offer.title}</div>
                <div className="offers-card__item-price">{offer.price} ₽</div>
            </div>

            <span className="offers-card__item-arrow arrow" aria-hidden="true" />
        </Link>
    )
}
