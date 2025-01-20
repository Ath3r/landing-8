'use client'

import { useEffect, useRef } from 'react'
import { motion } from "framer-motion"

export function ForexSpreads() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": 400,
      "currencies": [
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
      "isTransparent": true,
      "colorTheme": "dark",
      "locale": "en"
    });

    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(script);
    }

    return () => {
      if (widgetContainerRef.current && script.parentNode === widgetContainerRef.current) {
        widgetContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Forex Market Heat Map
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="tradingview-widget-container">
            <div ref={widgetContainerRef} className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                <span className="blue-text">Track all markets on TradingView</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
