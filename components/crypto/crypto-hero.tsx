'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CryptoHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trade Cryptocurrencies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access the world's leading cryptocurrencies with competitive spreads
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Start Trading</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 