'use client'

import { motion } from "framer-motion"
import { 
  Monitor,
  BarChart,
  Settings,
  Layout
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Web Platform",
    description: "Trade directly from your browser without downloads"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Advanced Analysis",
    description: "Professional tools and indicators for analysis"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Customizable",
    description: "Personalize your trading workspace"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Multi-Layout",
    description: "Multiple chart layouts and workspaces"
  }
]

export function MT5Web() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 relative h-[600px]"
          >
            <Image
              src="/mt5-web.png"
              alt="MT5 Web Platform"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              MetaTrader 5 Web
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access advanced trading features directly from your browser
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

            <button className="mt-8 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Launch Web Platform
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 