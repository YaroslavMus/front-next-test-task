import type { HomeHeroData } from '@/types/home/hero'

import { HeroMain } from './elements/HeroMain/HeroMain'
import { HeroOffers } from './elements/HeroOffers/HeroOffers'
import { HeroUniversal } from './elements/HeroUniversal/HeroUniversal'
import { HeroArticles } from './elements/HeroArticles/HeroArticles'
import { HeroSocial } from './elements/HeroSocial/HeroSocial'

import './Home.scss'

type Props = {
    data: HomeHeroData
}

export const Home = ({ data }: Props) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-grid">

                    <article className="hero-grid__card hero-grid__card--main">
                        <HeroMain data={data.main} />
                    </article>

                    <article className="hero-grid__card hero-grid__card--offers">
                        <HeroOffers
                            offer={data.offer}
                        />
                    </article>

                    <article className="hero-grid__card hero-grid__card--universal">
                        <HeroUniversal card={data.accountCard} />
                    </article>

                    <article className="hero-grid__card hero-grid__card--social">
                        <HeroSocial data={data.social} />
                    </article>

                    <article className="hero-grid__card hero-grid__card--articles">
                        <HeroArticles data={data.articlesBlock} />
                    </article>

                    <article className="hero-grid__card hero-grid__card--universal">
                        <HeroUniversal card={data.storageCard} />
                    </article>
                    {data.bottomText && <p className="hero-grid__text">
                        {data.bottomText}
                    </p>}

                </div>
            </div>
        </section>
    )
}
