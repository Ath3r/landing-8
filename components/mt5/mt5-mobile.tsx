'use client'

import { motion } from "framer-motion"
import { 
  Smartphone,
  Zap,
  Globe,
  LineChart
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Trading",
    description: "Trade on-the-go with our powerful mobile application"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Execution",
    description: "Experience lightning-fast trade execution on mobile"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Access",
    description: "Access markets worldwide from your smartphone"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Advanced Charts",
    description: "Professional charting tools in your pocket"
  }
]

export function MT5Mobile() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              MetaTrader 5 Mobile
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Trade anywhere, anytime with our powerful mobile trading platform
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black/90 transition-colors flex items-center gap-2">
                <Image
                  src="/app-store.svg"
                  alt="App Store"
                  width={24}
                  height={24}
                />
                App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black/90 transition-colors flex items-center gap-2">
                <Image
                  src="/play-store.svg"
                  alt="Play Store"
                  width={24}
                  height={24}
                />
                Play Store
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px]"
          >
            <Image
              src="/mt5-mobile.png"
              alt="MT5 Mobile"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 