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
    question: "What commodities can I trade?",
    answer: "You can trade a wide range of commodities including precious metals (Gold, Silver), energy products (Crude Oil, Natural Gas), and industrial metals (Copper). Each commodity has its own trading conditions and requirements."
  },
  {
    question: "What are the trading hours?",
    answer: "Commodity trading hours vary by product. Most commodities can be traded 24/5, while some specific products might have different trading sessions based on their primary exchange hours."
  },
  {
    question: "What is the minimum deposit to start trading commodities?",
    answer: "The minimum deposit to start trading commodities is $100. However, we recommend maintaining a higher balance to properly manage your risk and take advantage of trading opportunities."
  },
  {
    question: "What leverage is available for commodity trading?",
    answer: "We offer leverage up to 1:20 for commodity trading. The exact leverage available may vary depending on your account type and the specific commodity being traded."
  }
]

export function CommoditiesFAQ() {
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
            Find answers to common questions about commodity trading
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