'use client'
import { useState } from 'react'
import PerformanceTab from './PerformanceTab'
import AboutTab from './AboutTab'
import TeamTab from './TeamTab'
import TokenomicsTab from './TokenomicsTab'
import SentimentsTab from './SentimentsTab'
import { CryptoData } from '@/types'

const Tabs = ({ coin }: { coin: CryptoData }) => {
  const [tab, setTab] = useState<string>('performance')
  const tabClickHandler = (selectedTab: string) => {
    setTab(selectedTab)
  }
  return (
    <>
      <div className="mt-2 flex items-center  border-b-2  justify-between cursor-pointer">
        <p
          className={`font-semibold px-0 py-3 text-[#3E424A] ${
            tab === 'performance'
              ? 'text-blue-500 border-blue-500 border-b-2'
              : ''
          }`}
          onClick={() => tabClickHandler('performance')}
        >
          Overview
        </p>

        <p
          className={`font-semibold px-0 py-3 text-[#3E424A] ${
            tab === 'about' ? 'text-blue-500 border-blue-500 border-b-2' : ''
          }`}
          onClick={() => tabClickHandler('about')}
        >
          News
        </p>
        <p
          className={`font-semibold px-0 py-3 text-[#3E424A] ${
            tab === 'sentiments'
              ? 'text-blue-500 border-blue-500 border-b-2'
              : ''
          }`}
          onClick={() => tabClickHandler('sentiments')}
        >
          Sentiments
        </p>
        <p
          className={`font-semibold px-0 py-3 text-[#3E424A] ${
            tab === 'team' ? 'text-blue-500 border-blue-500 border-b-2' : ''
          }`}
          onClick={() => tabClickHandler('team')}
        >
          Team
        </p>

        <p
          className={`font-semibold px-0 py-3 text-[#3E424A] ${
            tab === 'tokenomics'
              ? 'text-blue-500 border-blue-500 border-b-2'
              : ''
          }`}
          onClick={() => tabClickHandler('tokenomics')}
        >
          Tokenomics
        </p>
        <p className="font-semibold px-0 py-3 text-[#3E424A] hidden md:block">
          Fundamentals
        </p>
        <p className="font-semibold px-0 py-3 text-[#3E424A] hidden md:block">
          Technicals
        </p>
      </div>
      {tab === 'performance' && <PerformanceTab coin={coin} />}
      {tab === 'about' && <AboutTab coinName={coin.name} />}
      {tab === 'team' && <TeamTab />}
      {tab === 'tokenomics' && <TokenomicsTab />}
      {tab === 'sentiments' && <SentimentsTab />}
    </>
  )
}

export default Tabs
