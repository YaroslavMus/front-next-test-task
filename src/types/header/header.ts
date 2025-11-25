export type HeaderNavItem = {
   id: number
   label: string
   href: string
}

export type HeaderAction = {
   id: number
   type: 'search' | 'favorites' | 'cart'
   href: string
   ariaLabel: string
}

export type HeaderData = {
   logoUrl: string
   logoAlt: string
   nav: HeaderNavItem[]
   actions: HeaderAction[]
}
