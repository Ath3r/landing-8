"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface MarketFeaturesProps {
  features: Feature[]
  marketName: string
}

export function MarketFeatures({ features, marketName }: MarketFeaturesProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold">Why Trade {marketName}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Key Features and Benefits
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/register">
                Start Trading {marketName}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
