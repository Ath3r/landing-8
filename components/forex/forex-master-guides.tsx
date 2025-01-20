"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const guides = [
  {
    image: "/placeholder.svg?height=400&width=600", // Leverage illustration with balance scale
    title: "Leverage in forex – how to use it wisely",
    href: "/guides/forex-leverage",
  },
  {
    image: "/placeholder.svg?height=400&width=600", // Chart illustration with bid/ask prices
    title: "Understanding spreads in forex – An in-depth look at brokers' fees",
    href: "/guides/forex-spreads",
  },
  {
    image: "/placeholder.svg?height=400&width=600", // Signal illustration with percentage indicators
    title: "Forex signals: Can they be trusted for trading currencies?",
    href: "/guides/forex-signals",
  },
]

export function ForexMasterGuides() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Master the art of forex trading</h2>
          <p className="text-xl text-gray-600">
            Check out our detailed trading guides designed to help you navigate through the complexities of the forex
            market and unlock the secrets of currency trading.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={guide.href} className="group block">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{guide.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

