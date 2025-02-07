import { Metadata } from "next"
import { MarketHero } from "@/components/markets/market-hero"
import { MarketFeatures } from "@/components/markets/market-features"
import { MarketWidget } from "@/components/markets/market-widget"
import { MarketFAQ } from "@/components/markets/market-faq"
import { Coins, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Cryptocurrency Trading | Nexum Capitals",
  description: "Trade cryptocurrencies with advanced tools and competitive fees. Access the world's leading digital assets.",
}

export default function CryptoPage() {
  const features = [
    {
      title: "Wide Selection",
      description: "Trade popular cryptocurrencies including Bitcoin, Ethereum, and emerging altcoins",
      icon: <Coins className="w-8 h-8 text-secondary" />,
    },
    {
      title: "24/7 Trading",
      description: "Access cryptocurrency markets around the clock with real-time execution",
      icon: <Zap className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Advanced Security",
      description: "Trade with confidence knowing your digital assets are protected by cutting-edge security",
      icon: <Shield className="w-8 h-8 text-secondary" />,
    },
  ]

  const faqs = [
    {
      question: "What is cryptocurrency trading?",
      answer: "Cryptocurrency trading involves speculating on the price movements of various digital currencies like Bitcoin, Ethereum, and others through a trading platform. Traders can profit from both rising and falling markets."
    },
    {
      question: "What are the main cryptocurrencies?",
      answer: "The main cryptocurrencies include Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), and many others. Bitcoin is the largest by market capitalization and the most widely traded."
    },
    {
      question: "How is cryptocurrency different from traditional currencies?",
      answer: "Cryptocurrencies are digital assets that use cryptography for security. Unlike traditional currencies, they are decentralized and not controlled by any government or central bank."
    },
    {
      question: "What affects cryptocurrency prices?",
      answer: "Cryptocurrency prices are affected by factors such as market demand, regulatory news, technological developments, adoption rates, and overall market sentiment."
    },
    {
      question: "Is cryptocurrency trading available 24/7?",
      answer: "Yes, the cryptocurrency market operates 24 hours a day, 7 days a week, as it's a global, decentralized market without a central authority controlling trading hours."
    }
  ]

  return (
    <main className="bg-gray-50">
      <MarketHero
        title="Trade Cryptocurrencies with Confidence"
        description="Access the world's leading digital assets with advanced trading tools and competitive fees."
        type="crypto"
      />
      <MarketFeatures features={features} marketName="Crypto" />
      <MarketWidget type="crypto" title="Cryptocurrency Market Overview" />
      <MarketFAQ 
        faqs={faqs}
        title="Frequently Asked Questions about Cryptocurrency Trading"
        type="crypto"
      />
    </main>
  )
}