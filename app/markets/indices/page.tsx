import { IndicesHero } from "@/components/indices/indices-hero"
import { IndicesFeatures } from "@/components/indices/indices-features"
import { IndicesWhyUs } from "@/components/indices/indices-why-us"
import { IndicesFAQ } from "@/components/indices/indices-faq"

export default function IndicesPage() {
  return (
    <main className="pt-16">
      <IndicesHero />
      <IndicesFeatures />
      <IndicesWhyUs />
      <IndicesFAQ />
    </main>
  )
} 