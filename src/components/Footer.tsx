'use client'
import Card from './ui/card'
import Carousel from './ui/carousel'
import { Coin } from '@/types'
import useGetTrendingCoinsQuery from '@/hooks/useGetTrendingCoinsQuery'
import Chip from './ui/chip'
import Link from 'next/link'

const Footer = () => {
  const trendingCoins = useGetTrendingCoinsQuery()
  return (
    <div className="w-full bg-white p-10 space-y-3">
      <p className="font-semibold text-2xl">You May Also Like</p>
      {trendingCoins.data && (
        <Carousel>
          {trendingCoins.data.map((coin) => (
            <CoinCard coin={coin} key={coin.item.id} />
          ))}
        </Carousel>
      )}
      <p className="font-semibold text-2xl">Trending Coins</p>
      {trendingCoins.data && (
        <Carousel>
          {trendingCoins.data.map((coin) => (
            <CoinCard coin={coin} key={coin.item.id} />
          ))}
        </Carousel>
      )}
    </div>
  )
}

const CoinCard = ({ coin }: { coin: Coin }) => {
  return (
    <Link href={`/${coin.item.id}`}>
      <Card className="p-4 h-[10rem] max-w-[300px] min-w-[300px] border-2">
        <div className="flex gap-2 items-center">
          <img className="w-7 h-7" src={coin.item.small} alt="" />
          <p>{coin.item.symbol}</p>
          <Chip
            percentage={coin.item.data.price_change_percentage_24h['usd']}
          ></Chip>
        </div>
        <img src={coin.item.data.sparkline} className="w-full h-[80%]" alt="" />
      </Card>
    </Link>
  )
}

export default Footer
