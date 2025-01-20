import { MT5Hero } from "@/components/mt5/mt5-hero"
import { MT5Features } from "@/components/mt5/mt5-features"
import { MT5FeatureCards } from "@/components/mt5/mt5-feature-cards"
import { MT5TradingInstruments } from "@/components/mt5/mt5-trading-instruments"
import { MT5WhyUs } from "@/components/mt5/mt5-why-us"
import { MT5Download } from "@/components/mt5/mt5-download"

export default function MetaTrader5Page() {
  return (
    <main className="pt-16">
      <MT5Hero />
      <MT5Features />
      <MT5FeatureCards />
      <MT5TradingInstruments />
      <MT5WhyUs />
      <MT5Download />
    </main>
  )
}

