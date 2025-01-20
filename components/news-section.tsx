'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    category: "Behind the markets",
    title: "Weekly market analysis: Key trends and insights",
    image: "/placeholder.svg?height=300&width=400",
    href: "/news/weekly-market-analysis"
  },
  {
    category: "Trading news",
    title: "Bitcoin reaches new heights: What traders need to know",
    image: "/placeholder.svg?height=300&width=400",
    href: "/news/bitcoin-new-heights"
  },
  {
    category: "Trading news",
    title: "Global economic outlook: Trading opportunities ahead",
    image: "/placeholder.svg?height=300&width=400",
    href: "/news/economic-outlook"
  }
]

export function NewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Keep up with Nexum Capitals
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Stay on top of our news, product and technology updates, events, partnerships, and more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/news" 
              className="text-gray-600 hover:text-gray-900 inline-flex items-center"
            >
              Read more articles
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {articles.map((article, index) => (
            <Link 
              key={article.title} 
              href={article.href}
              className="group"
            >
              <article className="bg-white rounded-lg overflow-hidden border transition-shadow hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge 
                    variant="secondary" 
                    className="mb-3"
                  >
                    {article.category}
                  </Badge>
                  <h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

