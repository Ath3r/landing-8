"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ForexFeatures() {
  const features = [
    {
      title: "Trade FX majors, minors, and exotics",
      description: "with ultra-tight spreads and flexible leverage.³",
    },
    {
      title: "Access your earnings",
      description: "with no unnecessary delays.",
    },
    {
      title: "Enjoy fast and precise execution",
      description: "on trader-favorite platforms like MT5.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Capitalize on currency pair price movements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="space-y-8 sm:space-y-10 md:space-y-12 order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Forex Trading Platform"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
