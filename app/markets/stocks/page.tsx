import { Metadata } from "next"
import { MarketHero } from "@/components/markets/market-hero"
import { MarketFeatures } from "@/components/markets/market-features"
import { MarketWidget } from "@/components/markets/market-widget"
import { MarketFAQ } from "@/components/markets/market-faq"
import { LineChart, Globe, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Stock Trading | Nexum Capitals",
  description: "Trade global stocks with competitive fees. Access major markets and popular stocks worldwide.",
}

export default function StocksPage() {
  const features = [
    {
      title: "Global Markets",
      description: "Access stocks from major exchanges worldwide including NYSE, NASDAQ, and more",
      icon: <Globe className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Real-Time Data",
      description: "Make informed decisions with real-time market data and advanced charting",
      icon: <LineChart className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Extended Hours",
      description: "Trade during pre-market and after-hours sessions for maximum flexibility",
      icon: <Clock className="w-8 h-8 text-secondary" />,
    },
  ]

  const faqs = [
    {
      question: "What is stock trading?",
      answer: "Stock trading involves buying and selling shares of publicly traded companies. When you buy a stock, you're purchasing a small ownership stake in a company, with the goal of profiting from price appreciation and dividends."
    },
    {
      question: "What are the main stock markets?",
      answer: "The main stock markets include the New York Stock Exchange (NYSE), NASDAQ, London Stock Exchange (LSE), Tokyo Stock Exchange (TSE), and many others. The NYSE and NASDAQ are the world's largest by market capitalization."
    },
    {
      question: "What affects stock prices?",
      answer: "Stock prices are affected by various factors including company earnings, economic indicators, industry trends, market sentiment, interest rates, and global events."
    },
    {
      question: "What is a dividend?",
      answer: "A dividend is a portion of a company's earnings that is paid out to shareholders. Not all companies pay dividends, as some prefer to reinvest profits back into the business."
    },
    {
      question: "When can I trade stocks?",
      answer: "Stock market hours vary by exchange. For example, the NYSE and NASDAQ are open Monday through Friday, 9:30 AM to 4:00 PM Eastern Time, excluding holidays."
    }
  ]

  return (
    <main className="bg-gray-50">
      <MarketHero
        title="Trade Global Stocks with Ease"
        description="Access major stock markets worldwide with competitive fees and advanced trading tools."
        type="stocks"
      />
      <MarketFeatures features={features} marketName="Stocks" />
      <MarketWidget type="stocks" title="Stock Market Overview" />
      <MarketFAQ 
        faqs={faqs}
        title="Frequently Asked Questions about Stock Trading"
        type="stocks"
      />
    </main>
  )
}