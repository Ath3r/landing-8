import { ForexHero } from "@/components/forex/forex-hero"
import { ForexFeatures } from "@/components/forex/forex-features"
import { ForexSpreads } from "@/components/forex/forex-spreads"
import { ForexConditions } from "@/components/forex/forex-conditions"
import { ForexWhyUs } from "@/components/forex/forex-why-us"
import { ForexMasterGuides } from "@/components/forex/forex-master-guides"
import { ForexFAQ } from "@/components/forex/forex-faq"

export default function ForexPage() {
  return (
    <main className="pt-16">
      <ForexHero />
      <ForexFeatures />
      <ForexSpreads />
      <ForexConditions />
      <ForexWhyUs />
      <ForexMasterGuides />
      <ForexFAQ />
    </main>
  )
}

