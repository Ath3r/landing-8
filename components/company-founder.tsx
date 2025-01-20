'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function CompanyFounder() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Founder Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Founder</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300">John Doe</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                John Doe founded Nexum Capitals in 2008 with a vision to revolutionize the trading industry. With over 20 years of experience in finance and technology, John has been at the forefront of innovation in the CFD trading space.
              </p>
              <p>
                Under John's leadership, Nexum Capitals has grown from a small startup to a global leader in online trading, serving over 800,000 active traders worldwide. His commitment to ethics, technology, and trader empowerment has set new standards in the industry.
              </p>
              <p>
                "Our goal is to create an ecosystem where traders can thrive, backed by cutting-edge technology and unwavering support. We're not just a trading platform; we're a partner in our clients' financial journeys." - John Doe
              </p>
            </div>
          </motion.div>

          {/* Right side - Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="John Doe, Founder of Nexum Capitals"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

