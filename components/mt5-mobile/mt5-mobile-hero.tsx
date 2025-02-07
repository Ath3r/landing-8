'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MT5MobileHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
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

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              MT5 Mobile Trading
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience professional trading on your mobile device with MetaTrader 5
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6">
                Download for iOS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-900 px-8 py-6">
                Download for Android
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/mt5-mobile-hero.jpg"
              alt="MT5 Mobile Platform"
              className="rounded-xl shadow-xl mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}