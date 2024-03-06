'use client'
import { useQuery } from "@tanstack/react-query"
import { CryptoData } from "@/types"
import axios from "axios"
const useGetCoinDetailsQuery = (id: string) => {
  return useQuery({
    queryKey: ["coinDetails",id],
    queryFn: async () => {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      return data as CryptoData
    }     
  })
}
export default useGetCoinDetailsQuery