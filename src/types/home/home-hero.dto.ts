export type StrapiImageDto = {
   id: number
   documentId: string
   url: string
   alternativeText: string | null
   width: number
   height: number
}

export type HomeHeroMainCardStatDto = {
   id: number
   label: string
   value: string
}

export type HomeHeroMainCardDeviceDto = {
   id: number
   alt: string
   image: StrapiImageDto
}

export type HomeHeroMainCardDto = {
   id: number
   title: string
   description: string
   cta_label: string
   cta_link: string
   stats: HomeHeroMainCardStatDto[]
   devices: HomeHeroMainCardDeviceDto[]
}

export type HomeHeroOfferItemDto = {
   id: number
   alt: string
   subtitle: string | null
   title: string
   currency: string
   price: number
   link: string
   image: StrapiImageDto
}

export type HomeHeroOffersBlockDto = {
   id: number
   title: string
   offers: HomeHeroOfferItemDto[]
}

export type HomeHeroUniversalCardDto = {
   id: number
   title: string
   link: string
   image: StrapiImageDto
}

export type HomeHeroCenterArticlesDto = {
   id: number
   title: string
   cta_label: string
   cta_link: string
   image: StrapiImageDto
   icon: StrapiImageDto
}

export type HomeHeroSocialLinkDto = {
   id: number
   platform: string
   url: string
   icon: StrapiImageDto
}

export type HomeHeroCenterSocialDto = {
   id: number
   title: string
   email_badge_text: string
   social_links: HomeHeroSocialLinkDto[]
}

export type HomeHeroEntryDto = {
   id: number
   documentId: string
   title: string | null
   createdAt: string
   updatedAt: string
   publishedAt: string
   bottom_note: string | null
   main_card: HomeHeroMainCardDto
   offers_block: HomeHeroOffersBlockDto
   bottom_left_cards: HomeHeroUniversalCardDto
   bottom_center_block: HomeHeroCenterArticlesDto
   bottom_center_block_social: HomeHeroCenterSocialDto
   bottom_right_block: HomeHeroUniversalCardDto
}

export type HomeHeroResponseDto = {
   data: HomeHeroEntryDto
}
