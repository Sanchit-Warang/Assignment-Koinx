'use client'
import { useQuery } from '@tanstack/react-query'
import { CurrencyPriceResponse } from '@/types'
import axios from 'axios'

const useGetCoinPriceQuery = (id: string) => {
  return useQuery({
    queryKey: ['coinPrice', id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd%2Cinr&include_24hr_change=true`
      )
      return data as CurrencyPriceResponse
    },
  })
}

export default useGetCoinPriceQuery
