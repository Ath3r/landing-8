'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function CompanyAbout() {
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
              alt="Nexum Capitals office environment"
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
              The Nexum way is about balance
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                We set out in 2008 to balance ethics and technology to reimagine how the ideal trading experience could be. Today, as a leader in the industry of CFD trading, servicing over 800,000 active traders, we know we're on the right path.
              </p>
              <p>
                We built our proprietary trading features so we could offer something unique, something no other broker had ever attempted. We were the first to offer traders instant withdrawals*, stop out protection and more. Features that give traders an edge.
              </p>
              <p>
                Trading is just one part of the picture. We believe in creating ecosystems of benefit for traders, partners, and employees to thrive within. Making what once was deemed impossible, a reality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

