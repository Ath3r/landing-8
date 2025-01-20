"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the most popular currency pairs to trade?",
    answer:
      "The most popular currency pairs to trade are EUR/USD, GBP/USD, USD/JPY, and USD/CHF. These are known as 'major pairs' and typically offer the tightest spreads and highest liquidity.",
  },
  {
    question: "What is leverage in forex trading?",
    answer:
      "Leverage in forex trading allows you to control a larger position with a smaller amount of capital. For example, with 1:100 leverage, you can control $100,000 with just $1,000 of your own capital.",
  },
  {
    question: "What is margin in online forex trading?",
    answer:
      "Margin is the amount of money required in your account to open and maintain a leveraged trading position. It acts as a deposit or collateral for the larger position you're controlling.",
  },
  {
    question: "Does my account equity affect the maximum leverage I can use?",
    answer:
      "Yes, your account equity can affect the maximum leverage available to you. Higher equity accounts may have access to different leverage tiers, and regulatory requirements may also impact available leverage.",
  },
  {
    question: "Why are there higher margin requirements around news?",
    answer:
      "Higher margin requirements are implemented around major economic news releases to protect traders from increased market volatility and potential gaps in pricing that can occur during these events.",
  },
  {
    question: "Do margin requirements change around weekends and holidays?",
    answer:
      "Yes, margin requirements may increase before weekends and holidays to protect against potential gaps when the market reopens. These changes are temporary and return to normal when regular trading resumes.",
  },
  {
    question: "When does the weekend period of increased margin requirements start and finish?",
    answer:
      "The weekend period of increased margin requirements typically starts a few hours before the market closes on Friday and ends when the market reopens on Sunday. Exact times may vary by broker.",
  },
]

export function ForexFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold">Frequently asked questions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

