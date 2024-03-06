import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/ui/NavBar'
import GetStartedCard from '@/components/RightContent/GetStartedCard'
import TrendingCoins from '@/components/RightContent/TrendingCoins'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KoinX',
  description: 'Assignment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} light bg-background `}>
        <Providers>
          <NavBar />
          <div className="mx-10  my-2 grid grid-cols-1  md:grid-cols-7  gap-4">
            <div className="col-span-1 md:col-span-5">{children}</div>
            <div className="md:mt-10 col-span-1 md:col-span-2 space-y-4">
              <GetStartedCard />
              <TrendingCoins />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
