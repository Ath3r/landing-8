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
    question: "What indices can I trade?",
    answer: "You can trade major global indices including S&P 500, NASDAQ, Dow Jones, FTSE 100, DAX 40, and more. Our platform provides access to indices from the US, Europe, and Asia."
  },
  {
    question: "What are the trading hours?",
    answer: "Trading hours vary by index. US indices are available from 9:30 AM to 4:00 PM EST with pre-market and after-hours trading. European and Asian indices follow their respective market hours."
  },
  {
    question: "How can I start trading indices?",
    answer: "To start trading indices, simply open an account, complete the verification process, and make a deposit. You'll then have access to our full range of trading instruments."
  },
  {
    question: "What tools are available for index trading?",
    answer: "We provide advanced charting tools, technical indicators, real-time market data, economic calendars, and market analysis to help you make informed trading decisions."
  }
]

export function IndicesFAQ() {
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
            Find answers to common questions about indices trading
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