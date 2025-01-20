import { CommoditiesHero } from "@/components/commodities/commodities-hero"
import { CommoditiesFeatures } from "@/components/commodities/commodities-features"
import { CommoditiesWhyUs } from "@/components/commodities/commodities-why-us"
import { CommoditiesFAQ } from "@/components/commodities/commodities-faq"

export default function CommoditiesPage() {
  return (
    <main className="pt-16">
      <CommoditiesHero />
      <CommoditiesFeatures />
      <CommoditiesWhyUs />
      <CommoditiesFAQ />
    </main>
  )
} 