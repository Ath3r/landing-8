import { MT5MobileHero } from "@/components/mt5-mobile/mt5-mobile-hero"
import { MT5MobileFeatures } from "@/components/mt5-mobile/mt5-mobile-features"
import { MT5MobileAdvantages } from "@/components/mt5-mobile/mt5-mobile-advantages"
import { MT5MobileInstruments } from "@/components/mt5-mobile/mt5-mobile-instruments"
import { MT5MobileDownload } from "@/components/mt5-mobile/mt5-mobile-download"

export default function MT5MobilePage() {
  return (
    <main className="pt-16">
      <MT5MobileHero />
      <MT5MobileFeatures />
      <MT5MobileAdvantages />
      <MT5MobileInstruments />
      <MT5MobileDownload />
    </main>
  )
} 