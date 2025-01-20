'use client'

import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'

export function IndicesFeatures() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    const widgetConfig = {
      "symbols": [
        ["S&P 500", "SPX500|1D"],
        ["NASDAQ", "IXIC|1D"],
        ["Dow Jones", "DJI|1D"],
        ["FTSE 100", "UKX|1D"],
        ["DAX 40", "GDAXI|1D"],
        ["Nikkei 225", "NI225|1D"]
      ],
      "chartOnly": false,
      "width": "100%",
      "height": 500,
      "locale": "en",
      "colorTheme": "light",
      "autosize": false,
      "showVolume": false,
      "showMA": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "fontSize": "10",
      "noTimeScale": false,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "gridLineColor": "rgba(240, 243, 250, 0)",
      "backgroundColor": "rgba(255, 255, 255, 0)"
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
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    
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
            Global Markets Overview
          </h2>
          <p className="text-xl text-gray-600">
            Track real-time performance of major global indices
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