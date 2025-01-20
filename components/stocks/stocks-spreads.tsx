'use client'

import { motion } from "framer-motion"

interface Stock {
  name: string
  symbol: string
  spread: string
}

const stocksList: Stock[] = [
  { name: "Apple Inc.", spread: "0.01", symbol: "AAPL" },
  { name: "Microsoft", spread: "0.01", symbol: "MSFT" },
  { name: "Amazon", spread: "0.01", symbol: "AMZN" },
  { name: "Tesla", spread: "0.01", symbol: "TSLA" },
  { name: "Meta", spread: "0.01", symbol: "META" },
]

export function StocksSpreads() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Competitive Spreads
          </h2>
          <p className="text-xl text-gray-400">
            Trade with some of the lowest spreads in the industry
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
            <div className="grid grid-cols-3 p-4 bg-gray-800/50 font-semibold text-gray-300">
              <div>Stock</div>
              <div>Symbol</div>
              <div>Spread from</div>
            </div>
            {stocksList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-3 p-4 border-b border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div>{item.name}</div>
                <div>{item.symbol}</div>
                <div>{item.spread}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 