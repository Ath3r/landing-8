'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { motion } from "framer-motion"

export function TradingInstruments() {
  const instruments = [
    {
      symbol: "XAUUSD",
      name: "Gold vs US Dollar",
      leverage: "Customizable",
      spread: "11.2",
      swapFree: "Available",
      category: "Metals",
      icon: "🔶"
    },
    {
      symbol: "USOIL",
      name: "Crude Oil",
      leverage: "1:200",
      spread: "1.2",
      swapFree: "Available",
      category: "Energies",
      icon: "⚫"
    },
    {
      symbol: "EURUSD",
      name: "Euro vs US Dollar",
      leverage: "Customizable",
      spread: "0.6",
      swapFree: "Available",
      category: "Currencies",
      icon: "🔵"
    },
    {
      symbol: "US30",
      name: "US Wall Street 30 Index",
      leverage: "1:400",
      spread: "1.9",
      swapFree: "Available",
      category: "Indices",
      icon: "📊"
    },
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      leverage: "1:20",
      spread: "0.9",
      swapFree: "Swap applied",
      category: "Stocks",
      icon: "🍎"
    }
  ]

  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trade assets from global markets
          </h2>
          <p className="text-lg text-gray-400">
            Capitalize on every opportunity with the world's most popular assets.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 text-sm font-medium text-gray-400">Instruments</th>
                  <th className="text-left py-4 text-sm font-medium text-gray-400">Leverage</th>
                  <th className="text-left py-4 text-sm font-medium text-gray-400">Avg. spread³, pips</th>
                  <th className="text-left py-4 text-sm font-medium text-gray-400">Swap-free</th>
                  <th className="text-right py-4 text-sm font-medium text-gray-400"></th>
                </tr>
              </thead>
              <tbody>
                {instruments.map((instrument, index) => (
                  <motion.tr 
                    key={instrument.symbol}
                    className="border-b border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{instrument.icon}</span>
                        <div>
                          <div className="font-medium text-white">{instrument.symbol}</div>
                          <div className="text-sm text-gray-400">{instrument.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="text-white">{instrument.leverage}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-white">{instrument.spread}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-white">{instrument.swapFree}</span>
                    </td>
                    <td className="py-4 text-right">
                      <Button 
                        variant="link" 
                        className="text-gray-400 hover:text-gray-400 hover:underline"
                      >
                        {instrument.category}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white font-semibold px-8"
            >
              Register
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-black border-gray-700 hover:bg-gray-200"
            >
              Try free demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

