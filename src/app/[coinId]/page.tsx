'use client'
import { useParams } from 'next/navigation'
import CoinDetails from '@/components/CoinDetails'

const CoinPage = () => {
  const { coinId } = useParams()
  console.log(coinId)
  const coinIdString = Array.isArray(coinId) ? coinId[0] : coinId
  return <CoinDetails id={coinIdString} />
}

export default CoinPage
