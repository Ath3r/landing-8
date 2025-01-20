'use client'

import { motion } from "framer-motion"

interface Crypto {
  name: string
  symbol: string
  spread: string
}

const cryptoList: Crypto[] = [
  { name: "Bitcoin", spread: "10", symbol: "BTC/USD" },
  { name: "Ethereum", spread: "0.8", symbol: "ETH/USD" },
  { name: "Ripple", spread: "0.001", symbol: "XRP/USD" },
  { name: "Cardano", spread: "0.002", symbol: "ADA/USD" },
  { name: "Solana", spread: "0.02", symbol: "SOL/USD" },
]

export function CryptoSpreads() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Competitive Spreads
          </h2>
          <p className="text-xl text-gray-600">
            Trade with some of the lowest spreads in the industry
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-3 p-4 bg-gray-100 font-semibold">
              <div>Cryptocurrency</div>
              <div>Symbol</div>
              <div>Spread from</div>
            </div>
            {cryptoList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-3 p-4 border-b border-gray-100"
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