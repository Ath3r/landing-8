"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const instruments = [
  {
    title: "Forex",
    description:
      "There are more than 100 currency pairs available for CFD trading on MT5 in Exness. We offer major currency pairs, including EURUSD, GBPUSD and USDJPY, and minor currency pairs. There is also a long list of exotic pairs available for you to trade CFDs on.",
    href: "/markets/forex",
  },
  {
    title: "Metals",
    description:
      "On MT5 with Exness, you can trade CFDs on metals in the form of currency pairs, which include XAUUSD, XAUEUR, XAUGBP and XAUAUD for gold and XAGUSD, XAGEUR, XAGGBP and XAGAUD for silver. You can also trade on platinum (XPT) and palladium (XPD) in currency pairs.",
    href: "/markets/metals",
  },
  {
    title: "Energies",
    description:
      "Hedge your portfolio on MT5 with Exness and trade CFDs on popular energies like brent crude oil (UKOIL), crude oil (USOIL) and natural gas (XNGUSD) with better-than-market conditions.",
    href: "/markets/energies",
  },
  {
    title: "Stocks",
    description:
      "Gain exposure to a large selection of stock CFDs while trading on MT5 with Exness. Trade CFDs on stocks from different industries, such as technology (APPL, META), consumer discretionary (TSLA), consumer staples (KO) and others.",
    href: "/markets/stocks",
  },
]

export function MT5TradingInstruments() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What you can trade on MT5</h2>
          <p className="text-xl text-gray-600">
            At Exness, you can enjoy trading CFDs on more than 200 instruments, which include trading forex currency
            pairs, metals, cryptocurrencies, stocks, indices and energies.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {instruments.map((instrument, index) => (
            <motion.div
              key={instrument.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b pb-8 last:border-b-0"
            >
              <h3 className="text-2xl font-bold mb-4">{instrument.title}</h3>
              <p className="text-gray-600 mb-4">{instrument.description}</p>
              <Link href={instrument.href} className="inline-flex items-center text-primary hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

