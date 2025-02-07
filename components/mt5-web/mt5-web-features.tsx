'use client'

import { motion } from "framer-motion"
import { 
  Monitor,
  BarChart,
  Settings,
  Layout,
  Globe,
  Zap
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Browser-Based",
    description: "Trade directly from your browser without downloads"
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Advanced Charts",
    description: "Professional charting tools and indicators"
  },
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "Customizable",
    description: "Personalize your trading workspace"
  },
  {
    icon: <Layout className="w-6 h-6 text-primary" />,
    title: "Multi-Layout",
    description: "Multiple chart layouts and workspaces"
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Cross-Platform",
    description: "Access your account from any device"
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Fast Loading",
    description: "Optimized performance for web browsers"
  }
]

export function MT5WebFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Advanced Web Trading Features
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Experience professional trading directly in your browser
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/mt5-web-features.jpg"
              alt="MT5 Web Features"
              width={800}
              height={600}
              className="rounded-xl shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}