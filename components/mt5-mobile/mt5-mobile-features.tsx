'use client'

import { motion } from "framer-motion"
import { 
  Smartphone,
  Zap,
  ChartBar,
  Globe,
  Bell,
  Lock
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <ChartBar className="w-6 h-6" />,
    title: "Advanced Charts",
    description: "Professional charting with multiple timeframes and technical indicators"
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Price Alerts",
    description: "Real-time notifications for your preferred price levels"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Trading",
    description: "Execute trades with one tap using our optimized mobile interface"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Access",
    description: "Enhanced security with biometric authentication"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Markets",
    description: "Access worldwide markets from your mobile device"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Cross Platform",
    description: "Seamless sync between mobile and desktop platforms"
  }
]

export function MT5MobileFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px]"
          >
            <Image
              src="/mt5-mobile-features.png"
              alt="MT5 Mobile Features"
              fill
              className="object-contain"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Mobile Trading Features
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Experience professional-grade trading tools in the palm of your hand
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </section>
  )
} 