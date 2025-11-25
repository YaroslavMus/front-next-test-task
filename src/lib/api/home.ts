// src/lib/api/home.ts
import type { HomeHeroData } from '@/types/home/hero'

export async function getHomeHero(): Promise<HomeHeroData> {
    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/api/home-hero?populate=deep`,
    //     { next: { revalidate: 60 } }
    // )

    // if (!res.ok) throw new Error('Failed to fetch home hero')

    // const json = await res.json()

    // // здесь маппинг под твой HomeHeroData
    // const data: HomeHeroData = {
    //     title: json.data.title,
    //     subtitle: json.data.subtitle,
    //     stats: [],
    //     devices: [],
    //     offers: [],
    //     accountCard: {} as any,
    //     storageCard: {} as any,
    //     social: {} as any,
    //     articles: {} as any,
    //     bottomText: '',
    // }

    return {
        title: 'Интернет-магазин оборудования для защиты криптоактивов',
        subtitle: 'Cryptoro – официальный реселлер, самый большой выбор в России',

        stats: [
            { value: '10+', label: 'лет на рынке' },
            { value: '50+', label: 'брендов' },
        ],

        devices: [
            { id: 1, imageUrl: '/images/deviceCard/item-1.png', alt: 'Устройство 1' },
            { id: 2, imageUrl: '/images/deviceCard/item-2.png', alt: 'Устройство 2' },
            { id: 3, imageUrl: '/images/deviceCard/item-3.png', alt: 'Устройство 3' },
            { id: 4, imageUrl: '/images/deviceCard/item-4.png', alt: 'Устройство 4' },
            { id: 5, imageUrl: '/images/deviceCard/item-5.png', alt: 'Устройство 5' },
            { id: 6, imageUrl: '/images/deviceCard/item-6.png', alt: 'Устройство 6' },
        ],

        offers: [
            {
                id: 1,
                title: 'SecuX Nifty NFT',
                price: 24490,
                slug: 'secux-nifty',
                href: '#',
                imageUrl: '/images/offersCard/item.png',
                imageAlt: 'SecuX Nifty NFT',
            },
            {
                id: 2,
                title: 'Cryptotag Thor',
                price: 14490,
                slug: 'cryptotag-thor',
                href: '#',
                imageUrl: '/images/offersCard/item-2.png',
                imageAlt: 'Cryptotag Thor',
            },
            {
                id: 3,
                title: 'Yubikey 5C Nano',
                price: 2490,
                slug: 'yubikey-5c-nano',
                href: '#',
                imageUrl: '/images/offersCard/item-3.png',
                imageAlt: 'Yubikey 5C Nano',
            },
            {
                id: 4,
                title: 'Trezor T Black',
                price: 8490,
                slug: 'trezor-t-black',
                href: '#',
                imageUrl: '/images/offersCard/item-4.png',
                imageAlt: 'Trezor T Black',
            },
        ],

        accountCard: {
            title: 'Защита учётных записей',
            imageUrl: '/images/card-fles.png',
            imageAlt: 'Защита учётных записей',
            href: '#',
        },

        storageCard: {
            title: 'Хранение паролей и seed-фраз',
            imageUrl: '/images/card-unver.png',
            imageAlt: 'Хранение паролей',
            href: '#',
        },

        social: {
            label: 'Социальные сети',
            logoUrl: '/images/logo-min.svg',
            telegramUrl: '#',
            youtubeUrl: '#',
            email: 'shop@cryptoro.ru',
        },

        articles: {
            link: '#',
            imageUrl: '/images/articlesCard/images.png',
        },

        bottomText:
            'Физические устройства из стали и титана надёжнее бумаги и облачных сервисов',
    }
}
