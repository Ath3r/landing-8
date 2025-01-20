'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"

export function TradingEverywhere() {
  const platforms = [
    {
      name: "Nexum Desktop Pro",
      description: "Advanced trading platform for professionals",
      href: "/platforms/desktop"
    },
    {
      name: "Nexum Mobile",
      description: "Trade on the go with our mobile app",
      href: "/platforms/mobile"
    },
    {
      name: "Nexum Web Trader",
      description: "Access markets directly from your browser",
      href: "/platforms/web"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="RTX Trading Platform Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              priority
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Dotted Arrow Icon */}
            <div className="grid grid-cols-3 gap-1 w-12 h-12">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
              ))}
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Trade anywhere with Nexum Capitals
              </h2>
              <p className="text-xl text-gray-600">
                Access global markets instantly from any device. Your trading journey starts here.
              </p>
            </div>

            {/* Platform Links */}
            <div className="space-y-6 pt-4">
              {platforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  className="flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-xl font-medium group-hover:text-gray-600 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-500">{platform.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

