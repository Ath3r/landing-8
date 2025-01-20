"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/placeholder.svg?height=1600&width=2400",
    alt: "Global Impact",
  },
  {
    src: "/placeholder.svg?height=1600&width=2400",
    alt: "Trading Excellence",
  },
  {
    src: "/placeholder.svg?height=1600&width=2400",
    alt: "Community Growth",
  },
]

export function CompanyImageShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
    }),
  }

  const navigate = (newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1)
    setCurrentIndex(newIndex)
  }

  const next = () => navigate((currentIndex + 1) % images.length)
  const prev = () => navigate((currentIndex - 1 + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Main Content */}
      <div className="relative w-full min-h-screen">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.5, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-8 bg-white">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 text-black transition-all duration-200"
                  onClick={prev}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 text-black transition-all duration-200"
                  onClick={next}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(index)}
                    className={`
                      h-1 rounded-full transition-all duration-300
                      ${index === currentIndex ? "w-8 bg-black" : "w-4 bg-gray-400 hover:bg-gray-600"}
                    `}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="w-24 text-gray-600 text-xs tabular-nums">
                {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

