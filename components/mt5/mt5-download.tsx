"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function MT5Download() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl p-12 md:p-16 text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Download MetaTrader 5</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experience professional-grade trading with our most advanced platform
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6">
            <Download className="w-5 h-5 mr-2" />
            Download MetaTrader 5
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
