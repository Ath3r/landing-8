'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselItems = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of financial technology"
  },
  {
    title: "Integrity",
    description: "Building trust through transparent operations"
  },
  {
    title: "Excellence",
    description: "Delivering superior trading experiences"
  }
]

export function CompanyHero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Brand and Carousel */}
            <div className="text-white">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Nexum Capitals
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Empowering traders with cutting-edge technology and unparalleled support
              </motion.p>
              <div className="h-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold mb-2">{carouselItems[current].title}</h2>
                    <p className="text-gray-300">{carouselItems[current].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right side: Abstract Design */}
            <div className="relative h-[400px] lg:h-[600px] z-0">
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4F46E5" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.3C32.4,86,16.2,88,-0.4,88.7C-17,89.4,-34,88.8,-48.1,81.6C-62.2,74.4,-73.5,60.5,-80.8,45.5C-88.1,30.5,-91.4,15.3,-89.7,0.9C-88,-13.4,-81.4,-26.8,-73.3,-38.7C-65.1,-50.6,-55.5,-61,-43.7,-68.5C-31.8,-76,-15.9,-80.6,-0.2,-80.3C15.5,-79.9,30.9,-74.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#60A5FA" d="M45.3,-77.1C58.9,-69.8,70.3,-57.8,79.2,-43.8C88.1,-29.8,94.5,-14.9,93.4,-0.6C92.3,13.6,83.7,27.3,74.3,39.7C65,52.1,54.8,63.3,42.3,71.3C29.8,79.3,14.9,84.1,0.1,83.9C-14.7,83.8,-29.4,78.7,-43.3,71.1C-57.1,63.5,-70.1,53.4,-79.3,40.1C-88.5,26.8,-93.9,13.4,-93.7,0.1C-93.5,-13.2,-87.7,-26.4,-79.6,-38.1C-71.4,-49.8,-60.9,-60,-48.4,-67.5C-35.8,-75,-17.9,-79.8,-1,-78.3C15.9,-76.7,31.8,-71.8,45.3,-77.1Z" transform="translate(100 100)" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

