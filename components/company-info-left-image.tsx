'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function CompanyInfoLeftImage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Nexum Capitals trading platform"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Cutting-edge Technology
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                At Nexum Capitals, we leverage the latest advancements in financial technology to provide our traders with a superior trading experience. Our proprietary trading platform is designed to be both powerful and user-friendly, catering to traders of all levels.
              </p>
              <p>
                We've invested heavily in developing features that give our traders a competitive edge in the market. From advanced charting tools to real-time market analysis, our platform is equipped with everything you need to make informed trading decisions.
              </p>
              <p>
                Our commitment to innovation doesn't stop at our trading platform. We're constantly exploring new technologies, including artificial intelligence and machine learning, to enhance our services and provide even more value to our traders.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

