'use client'

import { motion } from "framer-motion"
import { 
  Gem, 
  Droplet, 
  Wheat, 
  Factory
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Precious Metals",
    description: "Trade gold, silver, and platinum with precision",
    image: "https://source.unsplash.com/random/800x600?gold,metal",
    stats: {
      volume: "$84B",
      daily: "24/7", 
      markets: "5+"
    }
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Energy",
    description: "Access global oil and natural gas markets",
    image: "https://source.unsplash.com/random/800x600?oil,energy",
    stats: {
      volume: "$120B",
      daily: "24/5",
      markets: "10+"
    }
  },
  {
    icon: <Wheat className="w-6 h-6" />,
    title: "Agriculture", 
    description: "Trade essential agricultural commodities",
    image: "https://source.unsplash.com/random/800x600?agriculture,farm",
    stats: {
      volume: "$45B",
      daily: "24/5",
      markets: "15+"
    }
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Industrial Metals",
    description: "Invest in copper, aluminum, and more",
    image: "https://source.unsplash.com/random/800x600?industrial,metal",
    stats: {
      volume: "$65B",
      daily: "24/5",
      markets: "8+"
    }
  }
]

export function CommoditiesFeatures() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Available Markets
          </h2>
          <p className="text-xl text-gray-600">
            Trade a wide range of commodities on our platform
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover opacity-20 transition-all duration-500 group-hover:opacity-30 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100 group-hover:border-primary/20 transition-colors">
                    <div className="text-sm text-gray-500 mb-1">Daily Volume</div>
                    <div className="text-xl font-bold text-primary">{feature.stats.volume}</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100 group-hover:border-primary/20 transition-colors">
                    <div className="text-sm text-gray-500 mb-1">Trading Hours</div>
                    <div className="text-xl font-bold text-primary">{feature.stats.daily}</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100 group-hover:border-primary/20 transition-colors">
                    <div className="text-sm text-gray-500 mb-1">Markets</div>
                    <div className="text-xl font-bold text-primary">{feature.stats.markets}</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-xl font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group-hover:scale-[1.02]">
                  Start Trading {feature.title} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="w-full bg-gray-50 px-8 py-12 rounded-xl flex flex-col items-center border-t border-gray-100">
            <h3 className="text-3xl font-bold mb-3">Ready to Start Trading?</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl text-center">
              Open an account in minutes and start trading commodities with confidence
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Open Account
              </button>
              <button className="bg-white text-primary px-8 py-3 rounded-lg border border-gray-200 hover:border-primary/20 hover:bg-gray-50 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}