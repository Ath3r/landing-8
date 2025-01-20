"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MT5Download() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0B0F17]/90 rounded-2xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Download MetaTrader 5</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Trade without trade offs with the most popular platform.
          </p>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-black font-semibold px-8">
            Download MetaTrader 5
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

