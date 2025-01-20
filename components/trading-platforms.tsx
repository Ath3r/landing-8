'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"

export function TradingPlatforms() {
  const platforms = [
    {
      name: "RTX Pro Platform",
      href: "/platforms/pro"
    },
    {
      name: "RTX Mobile Trader",
      href: "/platforms/mobile"
    },
    {
      name: "RTX Web Terminal",
      href: "/platforms/web"
    }
  ]

  return (
    <section className="bg-white py-24">
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
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JiMLGDFgzDgV6ElUO1OEEJ7JU18fp4.png`}
              alt="Trading Platform Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
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
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
                <path
                  d="M12 5l0 14M5 12l7-7 7 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Master the markets
              </h2>
              <p className="text-xl text-gray-600">
                Trade with precision using our advanced suite of platforms. Available on all your devices.
              </p>
            </div>

            {/* Platform Links */}
            <div className="space-y-4 pt-4">
              {platforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <span className="text-lg font-medium">{platform.name}</span>
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

