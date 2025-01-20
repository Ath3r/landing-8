'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const guides = [
  {
    title: "Getting Started with Stock Trading",
    description: "Learn the basics of stock trading and market analysis",
    image: "/images/stocks/guide-1.jpg"
  },
  {
    title: "Advanced Stock Trading Strategies",
    description: "Master technical and fundamental analysis techniques",
    image: "/images/stocks/guide-2.jpg"
  },
  {
    title: "Portfolio Management",
    description: "Learn how to build and manage a diversified portfolio",
    image: "/images/stocks/guide-3.jpg"
  }
]

export function StocksMasterGuides() {
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
            Enhance your stock trading knowledge with our comprehensive guides
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