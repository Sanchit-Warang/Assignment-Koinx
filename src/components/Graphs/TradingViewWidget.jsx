'use client'
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react'
import { cn } from '@/lib/utils'

function TradingViewWidget({
  symbol,
  interval = '24H',
  className = '',
  h = '40vh',
  w = '100%',
}) {
  const container = useRef()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
    {
      "autosize": true,
      "symbol": "${symbol}",
      "interval": "${interval}",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "3",
      "locale": "en",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "hide_legend": true,
      "allow_symbol_change": true,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    }`
    container.current.appendChild(script)
    return () => {
      script.remove()
      if (container.current) {
        container.current.innerHTML = ''
      }
    }
  }, [interval, symbol, h, w])

  return (
    <div className={cn('w-full')} style={{ height: h }}>
      <div
        className={cn('tradingview-widget-container', className)}
        ref={container}
        style={{ height: '100%', width: '100%' }}
      ></div>
    </div>
  )
}

export default memo(TradingViewWidget)
