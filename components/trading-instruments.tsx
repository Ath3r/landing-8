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
      "height": "100%",
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
    <section className="bg-gray-900 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Trade assets from global markets
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Capitalize on every opportunity with the world's most popular assets.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="tradingview-widget-container">
            <div 
              ref={widgetContainerRef} 
              className="tradingview-widget-container__widget h-[400px] sm:h-[450px] md:h-[550px]"
            ></div>
            <div className="tradingview-widget-copyright">
              <a 
                href="https://www.tradingview.com/" 
                rel="noopener nofollow" 
                target="_blank"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-400 transition-colors"
              >
                Track all markets on TradingView
              </a>
            </div>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 h-11 sm:h-12 text-base sm:text-lg"
            >
              Register
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-gray-700 hover:bg-gray-800 h-11 sm:h-12 text-base sm:text-lg"
            >
              Try free demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
