'use client'

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What cryptocurrencies can I trade?",
    answer: "You can trade major cryptocurrencies including Bitcoin, Ethereum, Ripple, and many more. Our platform provides access to a wide range of digital assets."
  },
  {
    question: "How secure is cryptocurrency trading on your platform?",
    answer: "We implement industry-leading security measures including 2FA, cold storage, and advanced encryption to ensure the safety of your assets and trades."
  },
  {
    question: "What are the trading hours for cryptocurrencies?",
    answer: "Cryptocurrency markets are open 24/7, allowing you to trade at any time that suits you. Our platform provides continuous access to the markets."
  },
  {
    question: "How can I start trading cryptocurrencies?",
    answer: "Getting started is easy. Simply create an account, complete verification, deposit funds, and you can begin trading cryptocurrencies immediately."
  }
]

export function CryptoFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about cryptocurrency trading
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
} 