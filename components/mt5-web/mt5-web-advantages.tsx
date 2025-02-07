'use client'

import { motion } from "framer-motion"
import { 
  Globe,
  Zap,
  Lock,
  Monitor
} from "lucide-react"

const advantages = [
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Universal Access",
    description: "Trade from any browser on any device without installation"
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Fast Loading",
    description: "Optimized web platform for quick access to markets"
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Secure Platform",
    description: "Enhanced security with SSL encryption and 2FA"
  },
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Full Featured",
    description: "All the power of MT5 directly in your browser"
  }
]

export function MT5WebAdvantages() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Choose MT5 Web
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience professional trading directly in your browser
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-secondary/50 transition-colors group"
            >
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}