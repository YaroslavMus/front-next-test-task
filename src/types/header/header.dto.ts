export type StrapiImageDto = {
   id: number
   url: string
   alternativeText: string | null
   width: number
   height: number
}

export type HeaderNavLinkDto = {
   id: number
   label: string
   href: string
   order?: number | null
}

export type HeaderActionDto = {
   id: number
   type: 'search' | 'favorites' | 'cart'
   href: string
   aria_label: string
}

export type HeaderDto = {
   id: number
   logo: StrapiImageDto | null
   logo_alt: string | null
   nav_links: HeaderNavLinkDto[]
   actions: HeaderActionDto[]
}

export type HeaderResponseDto = {
   data: HeaderDto
}
