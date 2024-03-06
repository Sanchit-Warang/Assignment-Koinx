'use client'
import { useState } from 'react'
import PerformanceTab from './PerformanceTab'
import { CryptoData } from '@/types'
const Tabs = ({coin}:{coin:CryptoData}) => {
  const [tab, setTab] = useState<string>('performance')
  return (
    <>
      <div className="mt-2 flex items-center  border-b-2  justify-between">
        <p className="font-semibold px-1 py-3 text-blue-500 border-blue-500 border-b-2">
          Overview
        </p>
        <p className="font-semibold px-1 py-3 text-[#3E424A]">Fundamentals</p>
        <p className="font-semibold px-1 py-3 text-[#3E424A]">News Insights</p>
        <p className="font-semibold px-1 py-3 text-[#3E424A]">Sentiments</p>
        <p className="font-semibold px-1 py-3 text-[#3E424A]">Team</p>
        <p className="font-semibold px-1 py-3 text-[#3E424A] hidden md:block">
          Technicals
        </p>
        <p className="font-semibold px-1 py-3 text-[#3E424A] hidden md:block">
          Tokenomics
        </p>
      </div>
      <PerformanceTab coin={coin} />
    </>
  )
}

export default Tabs
