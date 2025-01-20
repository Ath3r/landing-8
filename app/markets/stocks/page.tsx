import { StocksHero } from "@/components/stocks/stocks-hero"
import { StocksFeatures } from "@/components/stocks/stocks-features"
import { StocksWhyUs } from "@/components/stocks/stocks-why-us"
import { StocksFAQ } from "@/components/stocks/stocks-faq"

export default function StocksPage() {
  return (
    <main className="pt-16">
      <StocksHero />
      <StocksFeatures />
      <StocksWhyUs />
      <StocksFAQ />
    </main>
  )
} 