import Link from 'next/link'
import type { HeroMainBlock } from '@/types/home/hero'
import { HeroMainStats } from './HeroMainStats'
import { HeroMainDevices } from './HeroMainDevices'

type Props = {
    data: HeroMainBlock
}

export const HeroMain = ({ data }: Props) => {
    const { title, subtitle, buttonHref, buttonLabel, stats, devices } = data

    return (
        <div className="hero-main">
            <div className="hero-main__top">
                <div className="hero-main__text">
                    <h1 className="hero-main__title">
                        <span>{title}</span>
                        <Link href={buttonHref} className="hero-main__button" aria-label="Перейти в каталог">
                            <span className="hero-main__button-icon arrow" />
                            <span>{buttonLabel}</span>
                        </Link>
                    </h1>
                </div>
                <p className="hero-main__subtitle">{subtitle}</p>
            </div>

            <div className="hero-main__bottom">
                <HeroMainStats stats={stats} />
                <HeroMainDevices devices={devices} />
            </div>
        </div>
    )
}
