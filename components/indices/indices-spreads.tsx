'use client'

import { motion } from "framer-motion"

interface Index {
  name: string
  symbol: string
  spread: string
}

const indicesList: Index[] = [
  { name: "S&P 500", spread: "0.4", symbol: "US500" },
  { name: "Dow Jones", spread: "1.4", symbol: "US30" },
  { name: "NASDAQ", spread: "1.0", symbol: "US100" },
  { name: "FTSE 100", spread: "0.8", symbol: "UK100" },
  { name: "DAX 40", spread: "0.8", symbol: "GER40" },
]

export function IndicesSpreads() {
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
              <div>Index</div>
              <div>Symbol</div>
              <div>Spread from</div>
            </div>
            {indicesList.map((item, index) => (
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