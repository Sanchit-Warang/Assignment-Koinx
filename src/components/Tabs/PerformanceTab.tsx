import { CryptoData } from '@/types'
import Card from '../ui/card'
import { cn } from '@/lib/utils'
import { formatDateWithApproxYears } from '@/lib/utils'
const PerformanceTab = ({ coin }: { coin: CryptoData }) => {
  return (
    <Card className="mt-5 space-y-5 animate-in slide-in-from-left duration-300">
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
            <div className="flex items-center justify-between border-b-2 py-4">
              <p className="font-medium text-sm text-[#768396]">
                All-Time High
              </p>
              <div className="text-sm font-medium flex-col ">
                <div className="text-center">
                  <p className="space-x-2 ">
                    <span>$ {coin.market_data.ath.usd}</span>
                    <span
                      className={cn(
                        '',
                        coin.market_data.ath_change_percentage.usd < 0
                          ? 'text-red-500'
                          : 'text-green-500'
                      )}
                    >
                      {coin.market_data.ath_change_percentage.usd.toFixed(2)}%
                    </span>
                  </p>
                </div>
                <div className="font-normal text-xs">
                  <p>
                    {formatDateWithApproxYears(coin.market_data.ath_date.usd)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b-2 py-4">
              <p className="font-medium text-sm text-[#768396]">All-Time Low</p>
              <div className="text-sm font-medium flex-col ">
                <div className="text-center">
                  <p className="space-x-2 ">
                    <span>$ {coin.market_data.atl.usd}</span>
                    <span
                      className={cn(
                        '',
                        coin.market_data.atl_change_percentage.usd < 0
                          ? 'text-red-500'
                          : 'text-green-500'
                      )}
                    >
                      {coin.market_data.atl_change_percentage.usd.toFixed(2)}%
                    </span>
                  </p>
                </div>
                <div className="font-normal text-xs">
                  <p>
                    {formatDateWithApproxYears(coin.market_data.atl_date.usd)}
                  </p>
                </div>
              </div>
            </div>
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
