'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MT5MobileHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MT5 Mobile Trading
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience professional trading on your mobile device with MetaTrader 5
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90">
                <Image
                  src="/app-store.svg"
                  alt="App Store"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                App Store
              </Button>
              <Button size="lg" className="bg-black hover:bg-black/90">
                <Image
                  src="/play-store.svg"
                  alt="Play Store"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Play Store
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px]"
          >
            <Image
              src="/mt5-mobile-hero.png"
              alt="MT5 Mobile Platform"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 