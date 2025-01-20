"use client"

import { motion } from "framer-motion"
import { ArrowDownToLine, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: ArrowDownToLine,
    title: "Instant withdrawals",
    description:
      "Remain in control of your funds. Simply choose your preferred payment method, make a withdrawal request, and enjoy instant automatic approval.¹",
  },
  {
    icon: Zap,
    title: "Ultra-fast execution",
    description:
      "Stay ahead of trends with lightning-fast execution. Get your orders executed in milliseconds on all available platforms at Exness.",
  },
  {
    icon: Shield,
    title: "Stop Out Protection",
    description:
      "Enjoy our unique Stop Out Protection feature. Delay and sometimes completely avoid stop outs while trading with Exness.",
  },
]

export function MT5WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Exness</h2>
          <p className="text-xl text-gray-600">
            Better-than-market conditions, unique features and cutting-edge security, partnered with our dedication to
            transparency and excellent customer service, are the reasons traders continue to choose Exness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-100 border-0">
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

