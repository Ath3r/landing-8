'use client'

import { motion } from "framer-motion"
import { 
  BarChart3, 
  Clock, 
  Shield,
  Zap
} from "lucide-react"

const reasons = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Major Indices",
    description: "Trade the world's most popular stock indices including S&P 500, NASDAQ, and more"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Extended Hours",
    description: "Access markets during pre-market and after-hours trading sessions"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Platform",
    description: "Trade with confidence on our fully regulated and secure Broker"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Execution",
    description: "Experience lightning-fast trade execution with our advanced infrastructure"
  }
]

export function IndicesWhyUs() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Why Trade Indices With Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience premium trading conditions with our advanced platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 