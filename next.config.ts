import type { NextConfig } from 'next'
import path from 'path'

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig: NextConfig = {
   sassOptions: {
      includePaths: [path.join(process.cwd(), 'styles')]
   },
   images: {
      // для работы с локальным Strapi в dev
      dangerouslyAllowLocalIP: isDev,
      remotePatterns: [
         {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/**'
         },
         {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '1337',
            pathname: '/uploads/**'
         }
      ]
   }
}

export default nextConfig
