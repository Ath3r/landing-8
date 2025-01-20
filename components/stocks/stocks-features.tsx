'use client'

import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'

export function StocksFeatures() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    const widgetConfig = {
      "exchanges": [],
      "dataSource": "SPX500",
      "grouping": "sector",
      "blockSize": "market_cap_basic",
      "blockColor": "change",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "light",
      "hasTopBar": false,
      "isDataSetEnabled": false,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "isMonoSize": false,
      "width": "100%",
      "height": 500
    };

    // Create a container div for TradingView
    const container = document.createElement('div');
    container.className = 'tradingview-widget-container';
    
    // Create widget div
    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    container.appendChild(widget);

    // Set up the script
    script.innerHTML = JSON.stringify(widgetConfig);
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js';
    
    // Append elements
    if (widgetContainerRef.current) {
      widgetContainerRef.current.innerHTML = ''; // Clear existing content
      widgetContainerRef.current.appendChild(container);
      container.appendChild(script);
    }

    return () => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Market Overview
          </h2>
          <p className="text-xl text-gray-600">
            Real-time heatmap of market performance across sectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-[500px] relative"
        >
          <div 
            ref={widgetContainerRef}
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  )
}