'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function TeamSection() {
  return (
    <section className="bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto relative">
          {/* Content */}
          <motion.div 
            className="max-w-xl relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nexum Capitals Trading Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community of expert traders from across the globe. Learn from their strategies, insights, and years of market experience.
            </p>
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-semibold px-8"
            >
              Meet our experts
            </Button>
          </motion.div>

          {/* Abstract Background Design */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              whileInView={{ opacity: 0.15, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Create abstract arrow pattern */}
              <div className="relative w-[600px] h-[600px]">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-48 h-24 bg-white"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(120px)`,
                      clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
                      opacity: 0.1
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

