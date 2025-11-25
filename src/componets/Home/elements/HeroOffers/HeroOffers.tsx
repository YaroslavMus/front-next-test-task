import Image from 'next/image'
import type { HeroOffer } from '@/types/home/hero'
import { HeroOffersItem } from './HeroOffersItem'

type Props = {
    label: string
    logoUrl: string
    offers: HeroOffer[]
}

export const HeroOffers = ({ label, logoUrl, offers }: Props) => {
    return (
        <div className="offers-card">
            <div className="offers-card__top">
                <span className="offers-card__label">{label}</span>

                <div className="offers-card__logo">
                    <Image
                        src={logoUrl}
                        alt="Логотип"
                        width={32}
                        height={32}
                    />
                </div>
            </div>

            <div className="offers-card__list">
                {offers.map((offer) => (
                    <HeroOffersItem key={offer.id} offer={offer} />
                ))}
            </div>
        </div>
    )
}
