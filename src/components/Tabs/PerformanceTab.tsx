import { CryptoData } from '@/types'
import Card from '../ui/card'

const PerformanceTab = ({ coin }: { coin: CryptoData }) => {
  return (
    <Card className="mt-5 space-y-5">
      <p className="font-semibold text-2xl">Performance</p>
      <div>
        <p className="text-lg font-semibold text-[#44475B]">Fundamentals</p>
        <div className="mt-3 w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-14">
          <div className="col-span-1">
            <ListItem
              field={`${coin.name} Price`}
              value={`$ ${coin.market_data.current_price.usd}`}
            />
            <ListItem
              field={`24h Low / 24h High`}
              value={`$ ${coin.market_data.low_24h.usd} / $ ${coin.market_data.high_24h.usd}`}
            />
            <ListItem
              field={`7d Low / 7d High`}
              value={`$ ${coin.market_data.low_24h.usd} / $ ${coin.market_data.high_24h.usd}`}
            />
            <ListItem field={`Trading Volume`} value={`$23,249,202,782`} />
            <ListItem
              field={`Market Cap Rank`}
              value={`${coin.market_cap_rank}`}
            />
          </div>
          <div className="col-span-1">
            <ListItem
              field={`Market Cap`}
              value={`$ ${coin.market_data.market_cap.usd}`}
            />
            <ListItem field={`Market Cap Dominance`} value={`38.343%`} />
            <ListItem field={`Volume / Market Cap`} value={`0.0718`} />
            <ListItem
              field={`All-Time High`}
              value={`$ ${coin.market_data.current_price.usd}`}
            />
            <ListItem
              field={`All-Time Low`}
              value={`$ ${coin.market_data.current_price.usd}`}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

const ListItem = ({ field, value }: { field: string; value: string }) => {
  return (
    <div className="flex items-center justify-between border-b-2 py-4">
      <p className="font-medium text-sm text-[#768396]">{field}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  )
}

export default PerformanceTab
