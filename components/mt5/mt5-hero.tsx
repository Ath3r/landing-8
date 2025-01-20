"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MT5Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#E5E9EC] overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">MetaTrader 5 (MT5)</h1>
            <p className="text-xl text-gray-600 mb-8">
              Trade CFDs on your favourite trading instruments using the MetaTrader 5. A powerful platform for currency
              pairs and other financial instruments CFD trading, the MetaTrader 5 is free to download on Exness.
            </p>
            <Button size="lg" className="bg-black hover:bg-black/90 text-white font-semibold px-8">
              Download MetaTrader 5
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="MetaTrader 5 Interface"
              width={800}
              height={500}
              className="rounded-lg shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

