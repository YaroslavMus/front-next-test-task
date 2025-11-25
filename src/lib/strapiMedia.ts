const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getStrapiMedia = (url?: string | null): string => {
   if (!url) return ''
   if (url.startsWith('https')) return url
   if (!API_URL) return url
   return `${API_URL}${url}`
}
