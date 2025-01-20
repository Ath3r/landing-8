'use client'

import { motion } from "framer-motion"

const conditions = [
  {
    title: "Leverage",
    value: "Up to 1:20",
    description: "Trade with flexible leverage options"
  },
  {
    title: "Min Deposit",
    value: "$100",
    description: "Start trading with a minimal investment"
  },
  {
    title: "Spreads From",
    value: "0.03",
    description: "Ultra-competitive pricing"
  },
  {
    title: "Execution",
    value: "0.1s",
    description: "Lightning-fast execution speed"
  }
]

export function CommoditiesConditions() {
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
            Trading Conditions
          </h2>
          <p className="text-xl text-gray-600">
            Experience premium trading conditions designed for all trader levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-100 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                {condition.title}
              </h3>
              <p className="text-3xl font-bold mb-2">{condition.value}</p>
              <p className="text-gray-600">{condition.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 