import { getHomeHero } from '@/lib/api/home'
import { Home } from '@/componets/Home/Home'
import '@/styles/index.scss'


export default async function HomePage() {
  const hero = await getHomeHero()

  return (
    <div>
      <Home data={hero} />
    </div>
  )
}
