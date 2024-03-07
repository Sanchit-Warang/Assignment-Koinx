'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Coin } from "@/types"

const useGetTrendingCoinsQuery = () => {
  return useQuery({
    queryKey: ['trendingCoins'],
    queryFn: async () => {
      const { data } = await axios.get<{ coins: Coin[] }>(
        'https://api.coingecko.com/api/v3/search/trending'
      )
      return data.coins
    },
  })
}

export default useGetTrendingCoinsQuery