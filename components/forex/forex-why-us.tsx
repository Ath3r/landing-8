"use client"

import { motion } from "framer-motion"
import { Shield, TrendingDown, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Stop Out Protection",
    description:
      "Trade Forex online with a unique market protection feature that shields your positions against temporary market volatility and delays or avoids stop outs.",
  },
  {
    icon: TrendingDown,
    title: "Low and stable spreads",
    description:
      "Trade the forex market with low and predictable trading costs. Enjoy tight spreads that stay stable, even during economic news releases and market events.³",
  },
  {
    icon: Zap,
    title: "Fast execution",
    description:
      "Capitalize on the frequent price movements of popular currency pairs with ultra-fast execution. Get your FX trading orders executed in milliseconds on all available terminals.",
  },
]

export function ForexWhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why trade forex market with Nexum</h2>
          <p className="text-xl text-gray-600">
            Take the currency market by storm and trade currencies on award-winning Forex trading platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <feature.icon className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

