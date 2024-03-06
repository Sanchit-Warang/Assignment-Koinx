'use client'
import { cn } from '@/lib/utils'
import Card from '../ui/card'
import Chip from '../ui/chip'
import useGetTrendingCoinsQuery from '@/hooks/useGetTrendingCoinsQuery'
import { Coin } from '@/types'
type TrendingCoinsProps = {
  className?: string
}

const TrendingCoins = ({ className = '' }: TrendingCoinsProps) => {
  const trendingCoins = useGetTrendingCoinsQuery()

  const trendingCoinsListJSX = () => {
    if (trendingCoins.isLoading) {
      return <>Loading ...</>
    } else if (trendingCoins.isError) {
      return <>Error</>
    } else if (trendingCoins.data) {
      return trendingCoins.data
        .slice(0, 3)
        .map((coin) => <CoinItem key={coin.item.id} coin={coin} />)
    }
  }

  trendingCoins.data
  return (
    <Card className={cn('', className)}>
      <p className="font-semibold text-2xl">{'Trending Coins (24h)'}</p>
      <div className="space-y-5">{trendingCoinsListJSX()}</div>
    </Card>
  )
}

const CoinItem = ({ coin }: { coin: Coin }) => {
  return (
    <div className="flex items-center my-4 gap-2">
      <img src={coin.item.small} className="w-10 h-10" />
      <p>
        {coin.item.name} ({coin.item.symbol})
      </p>
      <Chip
        percentage={coin.item.data.price_change_percentage_24h['usd']}
        className="ml-auto"
      ></Chip>
    </div>
  )
}

export default TrendingCoins
