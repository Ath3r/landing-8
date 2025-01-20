'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MT5WebPlatform() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Start Trading Now
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Access the markets directly from your browser
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-6">
              Launch Web Platform
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl"
          >
            <div className="aspect-[16/9]">
              <Image
                src="/mt5-web-platform.png"
                alt="MT5 Web Platform"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 