'use client'
import Card from '@/components/ui/card'
import useGetCoinDetailsQuery from '@/hooks/useGetCoinDetailsQuery'
import TradingViewWidget from './Graphs/TradingViewWidget'
import { useState } from 'react'
import Chip from './ui/chip'
import Tabs from './Tabs/Tabs'

type Props = {
  id?: string
}

const CoinDetails = ({ id = 'bitcoin' }: Props) => {
  const coinDetails = useGetCoinDetailsQuery(id)
  const [activeInterval, setActiveInterval] = useState<string>('24H')

  const handleIntervalChange = (interval: string) => {
    setActiveInterval(interval)
  }

  const cardDetailsJSX = () => {
    if (coinDetails.isLoading) {
      return <>Loading ...</>
    } else if (coinDetails.isError) {
      return <>Error</>
    } else if (coinDetails.data) {
      return (
        <>
          <div className="flex items-center gap-2">
            <img
              src={coinDetails.data?.image.small}
              className="w-9 h-9"
              alt=""
            />
            <p className="font-semibold text-2xl">{coinDetails.data?.name}</p>
            <p className="text-base text-[#5D667B] font-semibold">
              {coinDetails.data?.symbol.toUpperCase()}
            </p>
            <div className="ml-6 rounded-lg bg-[#768396] text-white font-medium p-2">
              {`Rank #${coinDetails.data?.market_cap_rank}`}
            </div>
          </div>
          <div className="mt-6 pb-7 border-b-2">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-[28px]">
                ${`${coinDetails.data?.market_data.current_price.usd}`}
              </p>
              {coinDetails.data && (
                <Chip
                  className="h-7 ml-8"
                  percentage={
                    coinDetails.data?.market_data
                      .price_change_percentage_24h_in_currency.usd
                  }
                />
              )}
              <p className="text-sm font-medium text-[#768396]">{'(24H)'}</p>
            </div>
            <div>
              <p className="text-sm font-medium">
                ₹{coinDetails.data?.market_data.current_price.inr}
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center mb-5 font-semibold">
              <p>
                {coinDetails.data?.name} {'Price Chart (USD)'}
              </p>
              <div className="ml-auto flex items-center gap-4 font-medium text-sm text-[#5D667B]">
                <button
                  className={activeInterval === '1H' ? 'text-[#0141CF]' : ''}
                  onClick={() => handleIntervalChange('1H')}
                >
                  1H
                </button>
                <button
                  className={activeInterval === '24H' ? 'text-[#0141CF]' : ''}
                  onClick={() => handleIntervalChange('24H')}
                >
                  24H
                </button>
                <button
                  className={activeInterval === '7D' ? 'text-[#0141CF]' : ''}
                  onClick={() => handleIntervalChange('7D')}
                >
                  7D
                </button>
                <button
                  className={activeInterval === '1M' ? 'text-[#0141CF]' : ''}
                  onClick={() => handleIntervalChange('1M')}
                >
                  1M
                </button>
                <button
                  className={activeInterval === '3M' ? 'text-[#0141CF]' : ''}
                  onClick={() => handleIntervalChange('3M')}
                >
                  3M
                </button>
                <button
                  className={activeInterval === '1Y' ? 'text-[#0141CF]' : ''}
                  onClick={() => handleIntervalChange('1Y')}
                >
                  1Y
                </button>
              </div>
            </div>
            {coinDetails.data && (
              <TradingViewWidget
                interval={activeInterval}
                symbol={coinDetails.data?.symbol}
              />
            )}
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="my-2">
        <span className="text-sm text-[#3E5765]">
          {'Cryptocurrencies >> '}
          <span className="text-black text-medium">
            {coinDetails.data?.name}
          </span>
        </span>
      </div>
      <Card>{cardDetailsJSX()}</Card>
      {coinDetails.data && <Tabs coin={coinDetails.data} />}
    </>
  )
}

export default CoinDetails
