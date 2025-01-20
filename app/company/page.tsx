import { CompanyHero } from '@/components/company-hero'
import { CompanyAbout } from '@/components/company-about'
import { CompanyFounder } from '@/components/company-founder'
import { CompanyInfoLeftImage } from '@/components/company-info-left-image'
import { CompanyStats } from '@/components/company-stats'
import { CompanyValues } from '@/components/company-values'
import { CompanyCareersCard } from '@/components/company-careers-card'
import { CompanyImageShowcase } from '@/components/company-image-showcase'

export default function CompanyPage() {
  return (
    <main>
      <CompanyHero />
      <CompanyAbout />
      <CompanyFounder />
      <CompanyInfoLeftImage />
      <CompanyStats />
      <CompanyValues />
      <CompanyImageShowcase />
      <CompanyCareersCard />
    </main>
  )
}

