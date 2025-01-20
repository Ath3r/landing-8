"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ForexFeatures() {
  const features = [
    {
      title: "Trade FX majors, minors, and exotics",
      description: "with ultra-tight spreads and flexible leverage.³",
    },
    {
      title: "Access your earnings",
      description: "with no unnecessary delays.",
    },
    {
      title: "Enjoy fast and precise execution",
      description: "on trader-favorite platforms like MT4, MT5, the Nexum Web Terminal and Nexum Trade app.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Capitalize on currency pair price movements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Forex Trading Platform"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

