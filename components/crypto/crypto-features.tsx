'use client'

import { motion } from "framer-motion"
import { 
  Wallet,
  Lock,
  LineChart,
  ArrowUpDown
} from "lucide-react"
import React, { useEffect, useRef, memo } from 'react'

const tradingFeatures = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Secure Wallet", 
    description: "Store your crypto assets safely with our secure wallet solution"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Advanced Security",
    description: "Multi-layer security with 2FA and cold storage"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Real-time Charts",
    description: "Advanced charting tools with multiple timeframes"
  },
  {
    icon: <ArrowUpDown className="w-6 h-6" />,
    title: "Instant Trading",
    description: "Execute trades instantly with competitive spreads"
  }
]

const TradingViewWidget = memo(function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing widgets first
    if (container.current) {
      container.current.innerHTML = '';
    }

    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "dataSource": "Crypto",
        "blockSize": "market_cap_calc",
        "blockColor": "change",
        "locale": "en",
        "symbolUrl": "",
        "colorTheme": "dark",
        "hasTopBar": false,
        "isDataSetEnabled": false,
        "isZoomEnabled": true,
        "hasSymbolTooltip": true,
        "isMonoSize": false,
        "width": "100%",
        "height": "100%"
      }`;
    container.current.appendChild(script);

    // Cleanup function
    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
});

export function CryptoFeatures() {
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
            Popular Cryptocurrencies
          </h2>
          <p className="text-xl text-gray-600">
            Trade the most popular digital assets with real-time market data
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-[500px] relative mb-24"
        >
          <TradingViewWidget />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tradingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="w-full bg-gray-50 px-8 py-12 rounded-xl flex flex-col items-center border-t border-gray-100">
            <h3 className="text-3xl font-bold mb-3">Ready to Start Trading?</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl text-center">
              Open an account in minutes and start trading cryptocurrencies with confidence
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Open Account
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-lg border border-gray-200 hover:border-primary/20 hover:bg-gray-50 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}