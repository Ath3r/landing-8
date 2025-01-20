"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ForexHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#1a2c38] overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1a2c38] to-[#2a3f4f]"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BLOB_URL}/Ipzpw.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Forex trading with low and stable spreads<sup>3</sup>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Access the global forex market and trade the world's most popular currency pairs with better-than-market
            conditions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-black hover:bg-black/90 text-white font-semibold px-8">
              Register
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
              Try free demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

