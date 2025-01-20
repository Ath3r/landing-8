'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MT5WebHero() {
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
              MT5 Web Trading
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Trade directly from your browser with our advanced web platform
            </p>
            <Button size="lg">
              Launch Web Platform
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px]"
          >
            <Image
              src="/mt5-web-hero.png"
              alt="MT5 Web Platform"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 