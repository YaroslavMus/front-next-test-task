import type { HomeHeroData } from '@/types/home/hero'
import { HeroMain } from './elements/HeroMain/HeroMain'
import { HeroOffers } from './elements/HeroOffers/HeroOffers'
import { HeroUniversal } from './elements/HeroUniversal/HeroUniversal'
import { HeroArticles } from './elements/HeroArticles/HeroArticles'
import { HeroSocial } from './elements/HeroSocial/HeroSocial'

import "./Home.scss"
type Props = {
    data: HomeHeroData
}

export const Home = ({ data }: Props) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-grid">
                    <article className="hero-grid__card hero-grid__card--main">
                        <HeroMain
                            data={{
                                title: 'Интернет-магазин оборудования для защиты криптоактивов',
                                subtitle: 'Cryptoro – официальный реселлер, самый большой выбор в России',
                                buttonLabel: 'В каталог',
                                buttonHref: '/catalog',
                                stats: [
                                    { value: '10+', label: 'лет на рынке' },
                                    { value: '50+', label: 'брендов' },
                                ],
                                devices: [
                                    {
                                        id: 1,
                                        imageUrl: '/images/deviceCard/item-1.png',
                                        alt: 'Устройство 1',
                                    },
                                    {
                                        id: 2,
                                        imageUrl: '/images/deviceCard/item-2.png',
                                        alt: 'Устройство 2',
                                    },
                                    {
                                        id: 3,
                                        imageUrl: '/images/deviceCard/item-3.png',
                                        alt: 'Устройство 3',
                                    },
                                    {
                                        id: 4,
                                        imageUrl: '/images/deviceCard/item-4.png',
                                        alt: 'Устройство 4',
                                    },
                                    {
                                        id: 5,
                                        imageUrl: '/images/deviceCard/item-5.png',
                                        alt: 'Устройство 5',
                                    },
                                    {
                                        id: 6,
                                        imageUrl: '/images/deviceCard/item-6.png',
                                        alt: 'Устройство 6',
                                    },
                                ],
                            }}
                        />
                    </article>
                    <article className="hero-grid__card hero-grid__card--offers">
                        <HeroOffers
                            label="Выгодные предложения"
                            logoUrl="/images/logo-min.svg"
                            offers={data.offers}
                        />
                    </article>
                    <article className="hero-grid__card hero-grid__card--universal">
                        <HeroUniversal card={data.accountCard} />
                    </article>
                    <article className="hero-grid__card hero-grid__card--social">
                        <HeroSocial data={data.social} />
                    </article>
                    <article className="hero-grid__card hero-grid__card--articles">
                        <HeroArticles
                            data={{
                                label: 'Актуальные статьи',
                                iconUrl: '/images/articlesCard/icon-articles.svg',
                                href: '/articles',
                                ctaLabel: 'Читать',
                                imageUrl: '/images/articlesCard/images.png',
                                imageAlt: 'Актуальная статья',
                            }}
                        />
                    </article>
                    <article className="hero-grid__card hero-grid__card--universal">
                        <HeroUniversal card={data.storageCard} />
                    </article>
                </div>
            </div>
        </section>
    )
}
