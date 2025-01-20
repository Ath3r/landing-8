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
    question: "What stocks can I trade?",
    answer: "You can trade stocks from major global exchanges including NYSE, NASDAQ, LSE, and more. Our platform offers access to thousands of stocks across different sectors and regions."
  },
  {
    question: "What are the trading hours?",
    answer: "Trading hours vary by exchange. US markets are open from 9:30 AM to 4:00 PM EST, with pre-market and after-hours trading available. Other markets follow their local trading hours."
  },
  {
    question: "Is there a minimum deposit to start trading stocks?",
    answer: "The minimum deposit to start trading stocks is $100. However, we recommend maintaining a higher balance to build a diversified portfolio."
  },
  {
    question: "Are there any commissions on stock trades?",
    answer: "We offer commission-free stock trading. You only pay the spread, which is among the most competitive in the industry."
  }
]

export function StocksFAQ() {
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
            Find answers to common questions about stock trading
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