"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#0E1116]">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Trade with a trusted broker today
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              See for yourself why we are the broker of choice for over all
              traders and our partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold px-8 rounded-lg text-lg"
              >
                Register
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700  text-primary hover:text-white hover:bg-white/5 font-bold px-8 rounded-lg text-lg"
              >
                Try free demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
