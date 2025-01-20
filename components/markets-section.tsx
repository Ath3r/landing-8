'use client'

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

export function MarketsSection() {
  const features = [
    {
      tag: "Withdrawals",
      title: "Instant withdrawals",
      description: "Get your deposits and withdrawals approved the moment you click the button.",
      position: "left"
    },
    {
      tag: "Spreads",
      title: "The best spreads on gold",
      description: "Trade with the tightest & most stable spreads in the market.",
      position: "left"
    },
    {
      tag: "Execution speed",
      title: "Ultra-fast execution",
      description: "Execute your orders in milliseconds, no matter how big they are.",
      position: "right"
    },
    {
      tag: "Swaps",
      title: "No overnight fees",
      description: "Hold your leveraged positions for as long as you like, swap-free. T&C apply.",
      position: "right"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="bg-gray-900 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thrive in the gold & oil markets
          </h2>
          <p className="text-lg text-gray-400">
            Trading conditions can make or break a strategy, that's why you need the best.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Features */}
          <div className="space-y-16">
            {features.filter(f => f.position === "left").map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="text-right"
                variants={itemVariants}
              >
                <Badge variant="outline" className="mb-2 text-gray-300 border-gray-300">
                  {feature.tag}
                </Badge>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Phone */}
          <motion.div
            className="relative mx-auto w-full max-w-[300px] md:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=300"
              alt="Trading Platform Interface"
              width={300}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>

          {/* Right Features */}
          <div className="space-y-16">
            {features.filter(f => f.position === "right").map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="text-left"
                variants={itemVariants}
              >
                <Badge variant="outline" className="mb-2 text-gray-300 border-gray-300">
                  {feature.tag}
                </Badge>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

