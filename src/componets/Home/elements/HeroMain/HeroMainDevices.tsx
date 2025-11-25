import Image from 'next/image'
import type { HeroDevice } from '@/types/home/hero'

type Props = {
    devices: HeroDevice[]
}

export const HeroMainDevices = ({ devices }: Props) => {
    return (
        <ul className="hero-main__devices">
            {devices.map((device, index) => (
                <li
                    key={device.id}
                    className="hero-main__device"
                    style={{ '--i': index + 1 } as React.CSSProperties}
                    aria-label={`Устройство: ${device.alt}`}
                >
                    <Image
                        src={device.imageUrl}
                        alt={device.alt}
                        width={80}
                        height={80}
                        className="hero-main__device-img"
                    />
                </li>
            ))}
        </ul>
    )
}
