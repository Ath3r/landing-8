import { Hero } from "@/components/hero";
import { MarketsSection } from "@/components/markets-section";
import { TradingInstruments } from "@/components/trading-instruments";
import { TradingEverywhere } from "@/components/trading-everywhere";
import { TradingTools } from "@/components/trading-tools";
import { TeamSection } from "@/components/team-section";
import { NewsSection } from "@/components/news-section";

export default function Home() {
  const patternStyle = {
    background: "white",
    backgroundImage:
      "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)",
    backgroundSize: "24px 24px",
  };

  return (
    <main>
      <div style={patternStyle}>
        <Hero />
      </div>

      <div style={patternStyle}>
        <MarketsSection />
      </div>

      <TradingInstruments />

      <TradingEverywhere />

      <TradingTools />

      <div style={patternStyle}>
        <TeamSection />
      </div>

      <NewsSection />
    </main>
  );
}
