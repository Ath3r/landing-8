"use client"

import { motion } from "framer-motion"
import { Code2, ArrowLeftRight, BarChart3, LineChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Code2,
    title: "MetaEditor",
    description:
      "On MetaTrader 5, you can develop trading robots and technical indicators through the specialized MetaEditor tool. As the tool is linked with the platform, new programs will automatically appear in your MetaTrader 5 and can be executed instantly.",
  },
  {
    icon: ArrowLeftRight,
    title: "Hedging system",
    description:
      "In MetaTrader 5 with Exness, you can experience trading using the hedging mode system. Hedging allows you to open multiple positions, even exact opposite positions, for a trading instrument.",
  },
  {
    icon: BarChart3,
    title: "Fundamental analysis",
    description:
      "Capture market opportunities with fundamental analysis tools on the MetaTrader 5, such as the built-in Economic Calendar. Keep abreast of the latest news events, expected market impacts and forecasts.",
  },
  {
    icon: LineChart,
    title: "Indicators & analytical object tools",
    description:
      "Enhance your trading experience with 38 built-in indicators, 22 analytical tools and 46 graphical objects when you trade financial instruments in the trading platform.",
  },
]

export function MT5FeatureCards() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <feature.icon className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

