'use client'
import Card from '@/components/ui/card'
const CoinDetails = () => {
  return (
    <>
      <div className="my-2">
        <span className="text-sm text-[#3E5765]">
          {'Cryptocurrencies >> '}
          <span className="text-black text-medium">Bitcoin</span>
        </span>
      </div>
      <Card> this is Card</Card>
    </>
  )
}

export default CoinDetails
