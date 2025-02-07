'use client'

import { motion } from "framer-motion"
import { 
  LineChart,
  BarChart,
  CandlestickChart,
  TrendingUp
} from "lucide-react"

const instruments = [
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Forex",
    description: "Trade major, minor, and exotic currency pairs"
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Commodities",
    description: "Access global commodity markets"
  },
  {
    icon: <CandlestickChart className="w-6 h-6 text-primary" />,
    title: "Stocks",
    description: "Trade shares of top global companies"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Indices",
    description: "Trade major world indices"
  }
]

export function MT5WebInstruments() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trading Instruments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access multiple markets from your browser
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-secondary/50 transition-colors group"
            >
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                {instrument.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                {instrument.title}
              </h3>
              <p className="text-gray-600">
                {instrument.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}