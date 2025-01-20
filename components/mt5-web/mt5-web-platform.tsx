'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MT5WebPlatform() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Trading Now
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access the markets directly from your browser
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Launch Web Platform
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/mt5-web-platform.png"
              alt="MT5 Web Platform"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 