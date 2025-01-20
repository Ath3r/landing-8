'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CompanyCareersCard() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/placeholder.svg?height=400&width=1200')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0B0F17] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Shape the future of online trading
            </h2>
            <p className="text-gray-400 text-lg">
              Are you up for a real challenge? Apply to join our talented engineers, programmers, marketers, and thought leaders and reshape how trading will look like tomorrow.
            </p>
          </div>
          
          <Link href="/careers">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black font-semibold px-8 whitespace-nowrap"
            >
              View careers
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

