"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function TradingTools() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const tools = [
    {
      name: "Advanced Charting",
      description: "Analyze markets with powerful technical tools",
      href: "#",
      image: "https://www.radexmarkets.com/images/mt5-tools-pad.png",
      id: "charting",
    },
    {
      name: "Risk Management",
      description: "Protect your investments with smart risk controls",
      href: "#",
      image: "https://www.radexmarkets.com/images/mt5-tools-pad.png",
      id: "risk",
    },
    {
      name: "AI-Powered Insights",
      description: "Get market predictions backed by machine learning",
      href: "#",
      image: "https://www.radexmarkets.com/images/mt5-tools-pad.png",
      id: "ai",
    },
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Geometric pattern background */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-purple-50/50" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/90 to-transparent" />
        </div>

        {/* Accent elements */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Animated Dots */}
            <motion.div
              className="grid grid-cols-3 gap-1 w-12 h-12"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gray-900"
                  animate={{
                    scale: [1, 1.5, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}
            </motion.div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
                Powerful tools at your fingertips
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600">
                Elevate your trading strategy with our suite of advanced tools
                and features.
              </p>
            </div>

            {/* Tool Links */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 pt-4"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemAnimation}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={tool.href}
                    className="flex items-center justify-between group bg-white/80 backdrop-blur rounded-2xl p-6 hover:bg-white transition-colors shadow-lg"
                  >
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-gray-900"
            >
              <Image
                src="https://www.radexmarkets.com/images/mt5-tools-pad.png"
                alt="MT5 Trading Tools"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
