'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  question: string
  answer: string
}

interface MarketFAQProps {
  faqs: FAQ[]
  title: string
  type: 'forex' | 'crypto' | 'stocks' | 'commodities' | 'indices'
}

export function MarketFAQ({ faqs, title, type }: MarketFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const getAccentColor = () => {
    switch (type) {
      case 'forex':
        return 'text-blue-500'
      case 'crypto':
        return 'text-purple-500'
      case 'stocks':
        return 'text-green-500'
      case 'indices':
        return 'text-amber-500'
      case 'commodities':
        return 'text-red-500'
      default:
        return 'text-secondary'
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Find answers to commonly asked questions about {type} trading
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-medium ${openIndex === index ? getAccentColor() : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    } ${openIndex === index ? getAccentColor() : 'text-gray-500'}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
