import { getHomeHero } from '@/lib/api/home'
import { Home } from '@/componets/Home/Home'
import '@/styles/index.scss'

export const revalidate = 60 // или убери, если уже в fetch

export default async function HomePage() {
  const hero = await getHomeHero()

  return (
    <div>
      <Home data={hero} />
    </div>
  )
}
