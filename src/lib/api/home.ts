import type { HomeHeroData, HeroOffer } from '@/types/home/hero'
import type { HomeHeroResponseDto } from '@/types/home/home-hero.dto'
import { getStrapiMedia } from '../strapiMedia'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

export async function getHomeHero(): Promise<HomeHeroData> {
   if (!API_URL) {
      throw new Error('API url is not set')
   }

   const res = await fetch(`${API_URL}/api/home?populate=deep`, {
      headers: {
         'Content-Type': 'application/json',
         Authorization: `${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      next: { revalidate: 60 }
   })

   if (!res.ok) {
      throw new Error('Failed to fetch home hero')
   }

   const json = (await res.json()) as HomeHeroResponseDto
   const entry = json.data

   const main = entry.main_card
   const offersBlock = entry.offers_block
   const bottomLeft = entry.bottom_left_cards
   const bottomRight = entry.bottom_right_block
   const center = entry.bottom_center_block
   const social = entry.bottom_center_block_social

   const mapped: HomeHeroData = {
      main: {
         title: main.title,
         subtitle: main.description,
         buttonLabel: main.cta_label,
         buttonHref: main.cta_link,
         stats: main.stats.map(s => ({
            label: s.label,
            value: s.value
         })),
         devices: main.devices.map(d => ({
            id: d.id,
            imageUrl: getStrapiMedia(d.image?.url),
            alt: d.alt
         }))
      },

      offer: {
         title: offersBlock.title,
         items: offersBlock.offers.map<HeroOffer>(o => ({
            id: o.id,
            title: o.title,
            price: o.price,
            currency: o.currency,
            link: o.link,
            imageUrl: getStrapiMedia(o.image?.url),
            imageAlt: o.alt || o.image?.alternativeText || ''
         }))
      },

      accountCard: {
         title: bottomLeft.title,
         href: bottomLeft.link,
         imageUrl: getStrapiMedia(bottomLeft.image?.url),
         imageAlt: bottomLeft.image?.alternativeText || bottomLeft.title
      },

      storageCard: {
         title: bottomRight.title,
         href: bottomRight.link,
         imageUrl: getStrapiMedia(bottomRight.image?.url),
         imageAlt: bottomRight.image?.alternativeText || bottomRight.title
      },

      social: {
         label: social.title,
         logoUrl: '/images/logo-min.svg',
         email: social.email_badge_text,
         links: social.social_links.map(link => ({
            platform: link.platform,
            url: link.url,
            iconUrl: getStrapiMedia(link.icon?.url),
            alt: link.icon?.alternativeText ?? link.platform
         }))
      },

      articlesBlock: {
         label: center.title,
         iconUrl: getStrapiMedia(center.icon?.url),
         href: center.cta_link,
         ctaLabel: center.cta_label,
         imageUrl: getStrapiMedia(center.image?.url),
         imageAlt: bottomLeft.image?.alternativeText || 'Актуальная статья'
      },

      bottomText: entry.bottom_note ?? ''
   }

   return mapped
}
