export type HeroDevice = {
    id: number
    imageUrl: string
    alt: string
}

export type HeroOffer = {
    imageAlt: string
    href: string
    id: number
    title: string
    price: number
    slug: string
    imageUrl: string
}

export type HeroUniversalCard = {
    title: string
    imageUrl: string
    imageAlt: string
    href: string
}

export type HeroSocial = {
    label: string
    logoUrl: string
    telegramUrl: string
    youtubeUrl: string
    email: string
}

export type HeroArticles = {
    link: string
    imageUrl: string
}

export type HeroStat = {
    label: string
    value: string
}

export type HomeHeroData = {
    title: string
    subtitle: string
    stats: HeroStat[]
    devices: HeroDevice[]
    offers: HeroOffer[]
    accountCard: HeroUniversalCard
    storageCard: HeroUniversalCard
    social: HeroSocial
    articles: HeroArticles
    bottomText: string
}

export type HeroMainBlock = {
    title: string
    subtitle: string
    buttonLabel: string
    buttonHref: string
    stats: HeroStat[]
    devices: HeroDevice[]
}
export type HeroArticlesBlock = {
    label: string
    iconUrl: string
    href: string
    ctaLabel: string
    imageUrl: string
    imageAlt: string
}