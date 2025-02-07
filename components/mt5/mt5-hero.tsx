"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Download, ArrowRight } from "lucide-react"

export function MT5Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              MetaTrader 5
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience professional-grade trading with MetaTrader 5. A powerful platform that puts the global financial markets at your fingertips, offering advanced tools for CFDs, forex, stocks, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download MT5
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-900 px-8 py-6">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/mt5-platform.jpg"
              alt="MetaTrader 5 Trading Platform"
              width={800}
              height={500}
              className="rounded-xl shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
