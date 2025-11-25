export type HeroDevice = {
   id: number
   imageUrl: string
   alt: string
}

export type HeroOffer = {
   id: number
   title: string
   price: number
   currency: string
   link: string
   imageUrl: string
   imageAlt: string
}

export type HeroUniversalCard = {
   title: string
   imageUrl: string
   imageAlt: string
   href: string
}

export type HeroSocialLink = {
   platform: string
   url: string
   iconUrl: string
   alt: string
}
export type HeroSocial = {
   label: string
   logoUrl: string
   email: string
   links: HeroSocialLink[]
}

export type HeroStat = {
   label: string
   value: string
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
   iconUrl: string | null
   href: string
   ctaLabel: string
   imageUrl: string | null
   imageAlt: string
}
export type HeroOffersBlock = {
   title: string
   items: HeroOffer[]
}
export type HomeHeroData = {
   main: HeroMainBlock
   offer: HeroOffersBlock
   accountCard: HeroUniversalCard
   storageCard: HeroUniversalCard
   social: HeroSocial
   articlesBlock: HeroArticlesBlock
   bottomText: string
}
