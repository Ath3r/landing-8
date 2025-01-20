"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  // Removed features array
]

export function MT5Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">A powerful multi-asset platform</h2>
          <p className="text-xl text-gray-600">
            The fifth generation of the MetaTrader platforms, MetaTrader 5 offers increased functionalities and features
            from its predecessor and quickly became one of the most popular trading platforms by online foreign exchange
            traders and brokerage services around the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="MetaTrader 5 Platform Features"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Usage of MetaTrader 5</h3>
              <p className="text-gray-600">
                Fundamental and technical analysis, trading signals, algorithmic trading - the trading platform provides
                an arsenal of tools that enhance the trading experience. The platform also has broadcasts of the latest
                financial news reports for traders to keep up-to-date on the markets.
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                With the trading signals and copy trading capability in MetaTrader 5, traders can follow the signals of
                successful traders and copy their trading strategies and orders, which will be automatically reproduced
                on your account.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

