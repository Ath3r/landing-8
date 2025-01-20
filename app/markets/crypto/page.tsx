import { CryptoHero } from "@/components/crypto/crypto-hero"
import { CryptoFeatures } from "@/components/crypto/crypto-features"
import { CryptoWhyUs } from "@/components/crypto/crypto-why-us"
import { CryptoFAQ } from "@/components/crypto/crypto-faq"

export default function CryptoPage() {
  return (
    <main className="pt-16">
      <CryptoHero />
      <CryptoFeatures />
      <CryptoWhyUs />
      <CryptoFAQ />
    </main>
  )
} 