import { Hero } from '@/components/hero'
import { MarketsSection } from '@/components/markets-section'
import { TradingInstruments } from '@/components/trading-instruments'
import { TradingEverywhere } from '@/components/trading-everywhere'
import { TradingTools } from '@/components/trading-tools'
import { TeamSection } from '@/components/team-section'
import { NewsSection } from '@/components/news-section'

export default function Home() {
  return (
    <main>
      <Hero />
      <MarketsSection />
      <TradingInstruments />
      <TradingEverywhere />
      <TradingTools />
      <TeamSection />
      <NewsSection />
    </main>
  )
}

