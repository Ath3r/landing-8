import { Metadata } from "next"
import { MarketHero } from "@/components/markets/market-hero"
import { MarketFeatures } from "@/components/markets/market-features"
import { MarketWidget } from "@/components/markets/market-widget"
import { MarketFAQ } from "@/components/markets/market-faq"
import { BarChart3, Lock, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Forex Trading | Nexum Capitals",
  description: "Trade forex with low and stable spreads. Access the global forex market with better-than-market conditions.",
}

export default function ForexPage() {
  const features = [
    {
      title: "Low Spreads",
      description: "Trade major currency pairs with ultra-low spreads starting from 0.0 pips",
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Fast Execution",
      description: "Lightning-fast trade execution with minimal slippage on all forex trades",
      icon: <Zap className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Secure Trading",
      description: "Your funds are protected with bank-grade security and segregated accounts",
      icon: <Lock className="w-8 h-8 text-secondary" />,
    },
  ]

  const faqs = [
    {
      question: "What is Forex trading?",
      answer: "Forex trading is the process of exchanging one currency for another through the financial markets. It's the largest and most liquid market in the world, with an average daily trading volume exceeding $5 trillion."
    },
    {
      question: "What are the main currency pairs?",
      answer: "The main currency pairs are EUR/USD (Euro/US Dollar), GBP/USD (British Pound/US Dollar), USD/JPY (US Dollar/Japanese Yen), and USD/CHF (US Dollar/Swiss Franc). These are known as the 'majors' and are the most actively traded pairs."
    },
    {
      question: "What are pips in Forex trading?",
      answer: "A pip (percentage in point) is the smallest price move that a given exchange rate makes based on market convention. Most major currency pairs are priced to four decimal places, and the pip is the last decimal point."
    },
    {
      question: "What affects currency exchange rates?",
      answer: "Currency exchange rates are affected by various factors including interest rates, economic indicators, political events, market sentiment, and trade flows between countries."
    },
    {
      question: "When is the Forex market open?",
      answer: "The Forex market is open 24 hours a day, five days a week. Trading begins in Sydney, then moves to Tokyo, London, and New York. The market is closed on weekends."
    }
  ]

  return (
    <main className="bg-gray-50">
      <MarketHero
        title="Trade Forex with Low and Stable Spreads"
        description="Access the global forex market and trade the world's most popular currency pairs with better-than-market conditions."
        type="forex"
      />
      <MarketFeatures features={features} marketName="Forex" />
      <MarketWidget type="forex" title="Forex Market Heat Map" />
      <MarketFAQ 
        faqs={faqs}
        title="Frequently Asked Questions about Forex Trading"
        type="forex"
      />
    </main>
  )
}
