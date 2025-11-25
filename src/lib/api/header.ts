import type {
   HeaderData,
   HeaderNavItem,
   HeaderAction
} from '@/types/header/header'
import type { HeaderResponseDto } from '@/types/header/header.dto'
import { getStrapiMedia } from '@/lib/strapiMedia'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

export async function getHeader(): Promise<HeaderData> {
   if (!API_URL) throw new Error('API url is not set')

   const res = await fetch(`${API_URL}/api/header`, {
      headers: {
         'Content-Type': 'application/json',
         Authorization: `${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      next: { revalidate: 60 }
   })

   if (!res.ok) throw new Error('Failed to fetch header')

   const json = (await res.json()) as HeaderResponseDto
   const entry = json.data
   const logoUrl = entry.logo ? getStrapiMedia(entry.logo.url) : '/logo.svg'
   const logoAlt = entry.logo_alt || 'Логотип'

   const nav: HeaderNavItem[] = (entry.nav_links || [])
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map(link => ({
         id: link.id,
         label: link.label,
         href: link.href
      }))

   const actions: HeaderAction[] = (entry.actions || []).map(action => ({
      id: action.id,
      type: action.type,
      href: action.href,
      ariaLabel: action.aria_label
   }))

   return {
      logoUrl,
      logoAlt,
      nav,
      actions
   }
}
