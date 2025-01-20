'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MT5MobileDownload() {
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
              Download MT5 Mobile
            </h2>
            <p className="text-xl text-gray-600">
              Start trading on your mobile device today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">iOS App</h3>
                <p className="text-gray-600">
                  Download MT5 for iPhone and iPad
                </p>
                <Button size="lg" className="bg-black hover:bg-black/90">
                  <Image
                    src="/app-store.svg"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Download on App Store
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Android App</h3>
                <p className="text-gray-600">
                  Download MT5 for Android devices
                </p>
                <Button size="lg" className="bg-black hover:bg-black/90">
                  <Image
                    src="/play-store.svg"
                    alt="Play Store"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Get it on Play Store
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <Image
                src="/mt5-mobile-download.png"
                alt="MT5 Mobile App"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 