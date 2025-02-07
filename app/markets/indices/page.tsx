import { Metadata } from "next"
import { MarketHero } from "@/components/markets/market-hero"
import { MarketFeatures } from "@/components/markets/market-features"
import { MarketWidget } from "@/components/markets/market-widget"
import { MarketFAQ } from "@/components/markets/market-faq"
import { BarChart2, Percent, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Indices Trading | Nexum Capitals",
  description: "Trade global indices with competitive spreads. Access major market indices worldwide.",
}

export default function IndicesPage() {
  const features = [
    {
      title: "Major Indices",
      description: "Trade popular indices like S&P 500, FTSE 100, DAX, and more",
      icon: <BarChart2 className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Competitive Spreads",
      description: "Trade indices with low spreads and minimal trading costs",
      icon: <Percent className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Market Analysis",
      description: "Access comprehensive market analysis and trading insights",
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
    },
  ]

  const faqs = [
    {
      question: "What are stock market indices?",
      answer: "Stock market indices are measurements of the performance of a group of stocks from a particular exchange, region, or sector. They serve as benchmarks for the overall market or specific market segments."
    },
    {
      question: "What are the major global indices?",
      answer: "Major global indices include the S&P 500 and Dow Jones (USA), FTSE 100 (UK), DAX 40 (Germany), Nikkei 225 (Japan), and many others. Each represents the performance of their respective markets."
    },
    {
      question: "How are indices calculated?",
      answer: "Indices are typically calculated using weighted averages of their constituent stocks. The weighting can be based on market capitalization, price, or other factors depending on the index."
    },
    {
      question: "Why trade indices?",
      answer: "Trading indices allows you to gain exposure to an entire market or sector with a single trade, providing diversification and reducing the risk associated with individual stocks."
    },
    {
      question: "When can I trade indices?",
      answer: "Trading hours for indices typically follow their respective market hours. For example, S&P 500 futures trade nearly 24 hours a day during weekdays, while the actual index values update during U.S. market hours."
    }
  ]

  return (
    <main className="bg-gray-50">
      <MarketHero
        title="Trade Global Indices"
        description="Access major market indices worldwide with competitive spreads and advanced trading tools."
        type="indices"
      />
      <MarketFeatures features={features} marketName="Indices" />
      <MarketWidget type="indices" title="Global Indices Overview" />
      <MarketFAQ 
        faqs={faqs}
        title="Frequently Asked Questions about Indices Trading"
        type="indices"
      />
    </main>
  )
}