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
    icon: <LineChart className="w-6 h-6" />,
    title: "Forex",
    description: "Trade major, minor, and exotic currency pairs"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Commodities",
    description: "Access global commodity markets"
  },
  {
    icon: <CandlestickChart className="w-6 h-6" />,
    title: "Stocks",
    description: "Trade shares of top global companies"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Indices",
    description: "Trade major world indices"
  }
]

export function MT5MobileInstruments() {
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
            Trading Instruments
          </h2>
          <p className="text-xl text-gray-600">
            Access multiple markets from your mobile device
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instruments.map((instrument, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {instrument.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{instrument.title}</h3>
              <p className="text-gray-600">{instrument.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 