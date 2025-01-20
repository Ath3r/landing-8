import { MT5WebHero } from "@/components/mt5-web/mt5-web-hero"
import { MT5WebFeatures } from "@/components/mt5-web/mt5-web-features"
import { MT5WebAdvantages } from "@/components/mt5-web/mt5-web-advantages"
import { MT5WebInstruments } from "@/components/mt5-web/mt5-web-instruments"
import { MT5WebPlatform } from "@/components/mt5-web/mt5-web-platform"

export default function MT5WebPage() {
  return (
    <main className="pt-16">
      <MT5WebHero />
      <MT5WebFeatures />
      <MT5WebAdvantages />
      <MT5WebInstruments />
      <MT5WebPlatform />
    </main>
  )
} 