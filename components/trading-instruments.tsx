'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'

export function TradingInstruments() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": 550,
      "defaultColumn": "overview",
      "defaultScreen": "general", 
      "market": "forex",
      "showToolbar": true,
      "colorTheme": "dark",
      "locale": "en",
      "isTransparent": true
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
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trade assets from global markets
          </h2>
          <p className="text-lg text-gray-400">
            Capitalize on every opportunity with the world's most popular assets.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="tradingview-widget-container">
            <div ref={widgetContainerRef} className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                <span className="blue-text">Track all markets on TradingView</span>
              </a>
            </div>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-semibold px-8"
            >
              Register
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-black border-gray-700 hover:bg-gray-200"
            >
              Try free demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
