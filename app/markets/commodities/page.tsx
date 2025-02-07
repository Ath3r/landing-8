import { Metadata } from "next"
import { MarketHero } from "@/components/markets/market-hero"
import { MarketFeatures } from "@/components/markets/market-features"
import { MarketWidget } from "@/components/markets/market-widget"
import { MarketFAQ } from "@/components/markets/market-faq"
import { Gem, Droplet, CircleDollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Commodities Trading | Nexum Capitals",
  description: "Trade commodities with competitive spreads. Access major commodities markets worldwide.",
}

export default function CommoditiesPage() {
  const features = [
    {
      title: "Precious Metals",
      description: "Trade gold, silver, platinum, and other precious metals with tight spreads",
      icon: <Gem className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Energy Markets",
      description: "Access major energy markets including crude oil, natural gas, and more",
      icon: <Droplet className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Competitive Pricing",
      description: "Trade commodities with low spreads and transparent pricing",
      icon: <CircleDollarSign className="w-8 h-8 text-secondary" />,
    },
  ]

  const faqs = [
    {
      question: "What are commodities?",
      answer: "Commodities are raw materials or primary agricultural products that can be bought and sold. They include precious metals (gold, silver), energy products (oil, natural gas), and agricultural products (wheat, coffee)."
    },
    {
      question: "What are the main types of commodities?",
      answer: "The main types include: Precious Metals (gold, silver, platinum), Energy (crude oil, natural gas), Base Metals (copper, aluminum), and Agricultural (corn, wheat, soybeans, coffee)."
    },
    {
      question: "What affects commodity prices?",
      answer: "Commodity prices are affected by supply and demand factors, weather conditions, geopolitical events, currency fluctuations, and global economic conditions."
    },
    {
      question: "Why trade commodities?",
      answer: "Trading commodities can provide portfolio diversification, inflation hedging, and opportunities to profit from global supply and demand dynamics."
    },
    {
      question: "How are commodities traded?",
      answer: "Commodities can be traded through futures contracts, CFDs, ETFs, or by investing in companies that produce commodities. Each method has its own advantages and risks."
    }
  ]

  return (
    <main className="bg-gray-50">
      <MarketHero
        title="Trade Global Commodities"
        description="Access major commodities markets worldwide with competitive spreads and advanced trading tools."
        type="commodities"
      />
      <MarketFeatures features={features} marketName="Commodities" />
      <MarketWidget type="commodities" title="Global Commodities Overview" />
      <MarketFAQ 
        faqs={faqs}
        title="Frequently Asked Questions about Commodities Trading"
        type="commodities"
      />
    </main>
  )
}