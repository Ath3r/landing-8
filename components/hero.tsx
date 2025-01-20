'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upgrade the way you trade
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trade with the world's largest retail broker and benefit from better-than-market conditions.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="text-lg px-8">
              Register
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Try free demo
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2">800,000+ active traders</h3>
              <p className="text-sm text-muted-foreground">Join our growing community</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2">Multiple regulatory licenses</h3>
              <p className="text-sm text-muted-foreground">Trade with confidence</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2">24/7 customer support</h3>
              <p className="text-sm text-muted-foreground">We're here to help</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2">PCI DSS certified</h3>
              <p className="text-sm text-muted-foreground">Your security is our priority</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

