"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface MarketHeroProps {
  title: string
  description: string
  type: 'forex' | 'crypto' | 'stocks' | 'commodities' | 'indices'
}

export function MarketHero({ title, description, type }: MarketHeroProps) {
  const getGradient = () => {
    switch (type) {
      case 'forex':
        return 'from-blue-950 via-gray-900 to-blue-950'
      case 'crypto':
        return 'from-purple-950 via-gray-900 to-purple-950'
      case 'stocks':
        return 'from-green-950 via-gray-900 to-green-950'
      case 'indices':
        return 'from-amber-950 via-gray-900 to-amber-950'
      case 'commodities':
        return 'from-red-950 via-gray-900 to-red-950'
      default:
        return 'from-gray-900 via-gray-800 to-gray-900'
    }
  }

  const getAccentColor = () => {
    switch (type) {
      case 'forex':
        return 'bg-blue-500/30'
      case 'crypto':
        return 'bg-purple-500/30'
      case 'stocks':
        return 'bg-green-500/30'
      case 'indices':
        return 'bg-amber-500/30'
      case 'commodities':
        return 'bg-red-500/30'
      default:
        return 'bg-secondary/30'
    }
  }

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${getGradient()}`}>
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glowing Orb Effect */}
      <div className={`absolute -top-20 -right-20 w-60 h-60 ${getAccentColor()} rounded-full blur-3xl`} />
      <div className={`absolute -bottom-20 -left-20 w-60 h-60 ${getAccentColor()} rounded-full blur-3xl`} />

      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto pb-12">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
