'use client'

import { useEffect, useRef } from 'react'

interface MarketWidgetProps {
  type: 'forex' | 'crypto' | 'stocks' | 'commodities' | 'indices'
  title: string
}

export function MarketWidget({ type, title }: MarketWidgetProps) {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;

    // Configure widget based on market type
    switch (type) {
      case 'forex':
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
        script.innerHTML = JSON.stringify({
          width: "100%",
          height: 400,
          currencies: [
            "EUR",
            "USD",
            "JPY", 
            "GBP",
            "CHF",
            "AUD",
            "CAD",
            "NZD",
            "CNY"
          ],
          isTransparent: true,
          colorTheme: "dark",
          locale: "en"
        });
        break;

      case 'crypto':
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.innerHTML = JSON.stringify({
          width: "100%",
          height: 400,
          defaultColumn: "overview",
          screener_type: "crypto_mkt",
          displayCurrency: "USD",
          colorTheme: "dark",
          isTransparent: true,
          locale: "en"
        });
        break;

      case 'stocks':
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.innerHTML = JSON.stringify({
          width: "100%",
          height: 400,
          symbolsGroups: [
            {
              name: "Major Stocks",
              symbols: [
                { name: "NASDAQ:AAPL" },
                { name: "NASDAQ:MSFT" },
                { name: "NASDAQ:GOOGL" },
                { name: "NASDAQ:AMZN" },
                { name: "NYSE:TSLA" }
              ]
            }
          ],
          colorTheme: "dark",
          isTransparent: true,
          locale: "en"
        });
        break;

      case 'indices':
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.innerHTML = JSON.stringify({
          width: "100%",
          height: 400,
          symbolsGroups: [
            {
              name: "Major Indices",
              symbols: [
                { name: "FOREXCOM:SPXUSD" },
                { name: "FOREXCOM:NSXUSD" },
                { name: "FOREXCOM:DJI" },
                { name: "INDEX:NKY" },
                { name: "INDEX:DEU30" }
              ]
            }
          ],
          colorTheme: "dark",
          isTransparent: true,
          locale: "en"
        });
        break;

      case 'commodities':
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.innerHTML = JSON.stringify({
          width: "100%",
          height: 400,
          symbolsGroups: [
            {
              name: "Commodities",
              symbols: [
                { name: "COMEX:GC1!" },
                { name: "TVC:SILVER" },
                { name: "NYMEX:CL1!" },
                { name: "NYMEX:NG1!" },
                { name: "COMEX:HG1!" }
              ]
            }
          ],
          colorTheme: "dark",
          isTransparent: true,
          locale: "en"
        });
        break;
    }

    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(script);
    }

    return () => {
      if (widgetContainerRef.current && script.parentNode === widgetContainerRef.current) {
        widgetContainerRef.current.removeChild(script);
      }
    };
  }, [type]);

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          {title}
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="tradingview-widget-container">
            <div ref={widgetContainerRef} className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank" className="text-gray-400 hover:text-gray-300 text-sm">
                Powered by TradingView
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
