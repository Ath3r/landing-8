'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const guides = [
  {
    title: "Getting Started with Commodity Trading",
    description: "Learn the basics of commodity trading and how to get started",
    image: "/images/commodities/guide-1.jpg"
  },
  {
    title: "Advanced Commodity Trading Strategies",
    description: "Master advanced trading techniques and analysis methods",
    image: "/images/commodities/guide-2.jpg"
  },
  {
    title: "Risk Management in Commodity Trading",
    description: "Learn how to protect your investments and manage risks",
    image: "/images/commodities/guide-3.jpg"
  }
]

export function CommoditiesMasterGuides() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Guides
          </h2>
          <p className="text-xl text-gray-600">
            Enhance your trading knowledge with our comprehensive guides
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative h-48">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <Button variant="outline" size="sm">Read More</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 