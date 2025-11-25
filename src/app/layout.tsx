import type { Metadata } from 'next'
import { Header } from '@/componets/Header/Header'

export const metadata: Metadata = {
  title: 'Cryptoro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
