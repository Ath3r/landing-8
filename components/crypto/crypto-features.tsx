'use client'

import { motion } from "framer-motion"
import { 
  Wallet,
  Lock,
  LineChart,
  ArrowUpDown
} from "lucide-react"
import { useEffect, useRef } from 'react'

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

export function CryptoFeatures() {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;

    const widgetConfig = {
      "symbols": [
        ["Bitcoin", "BINANCE:BTCUSDT|1D"],
        ["Ethereum", "BINANCE:ETHUSDT|1D"],
        ["Ripple", "BINANCE:XRPUSDT|1D"],
        ["Cardano", "BINANCE:ADAUSDT|1D"],
        ["Solana", "BINANCE:SOLUSDT|1D"],
        ["Polkadot", "BINANCE:DOTUSDT|1D"]
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
          <div 
            ref={widgetContainerRef}
            className="w-full h-full"
          />
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