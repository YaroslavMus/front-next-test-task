import type { HeroStat } from '@/types/home/hero'

type Props = {
    stats: HeroStat[]
}

export const HeroMainStats = ({ stats }: Props) => {
    return (
        <div className="hero-main__stats">
            {stats.map((stat) => (
                <div key={stat.label} className="hero-main__stat">
                    <span className="hero-main__stat-value">{stat.value}</span>
                    <span className="hero-main__stat-label">{stat.label}</span>
                </div>
            ))}
        </div>
    )
}
