import Image from 'next/image'
import type { HeroOffersBlock } from '@/types/home/hero'
import { HeroOffersItem } from './HeroOffersItem'

type Props = {
    offer: HeroOffersBlock
}

export const HeroOffers = ({ offer }: Props) => {
    return (
        <div className="offers-card">
            <div className="offers-card__top">
                <span className="offers-card__label">{offer.title}</span>

                <div className="offers-card__logo">
                    <Image
                        src="/images/logo-min.svg"
                        alt="Логотип"
                        width={32}
                        height={32}
                    />
                </div>
            </div>

            <div className="offers-card__list">
                {offer.items.map((item) => (
                    <HeroOffersItem key={item.id} offer={item} />
                ))}
            </div>
        </div>
    )
}
