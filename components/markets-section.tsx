"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function MarketsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      tag: "Market Analysis",
      title: "Real-time market insights",
      description:
        "Access comprehensive market analysis and real-time data to make informed trading decisions.",
      position: "left",
    },
    {
      tag: "Risk Management",
      title: "Advanced risk controls",
      description:
        "Implement sophisticated risk management strategies with our cutting-edge tools and features.",
      position: "left",
    },
    {
      tag: "Trading Tools",
      title: "Professional trading suite",
      description:
        "Execute trades with precision using our advanced charting, indicators, and analysis tools.",
      position: "right",
    },
    {
      tag: "Support",
      title: "24/7 Expert assistance",
      description:
        "Get round-the-clock support from our team of experienced market professionals.",
      position: "right",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Geometric pattern background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(180deg, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            mask: 'radial-gradient(circle at center, black, transparent)',
            WebkitMask: 'radial-gradient(circle at center, black, transparent)'
          }}
        />

        {/* Accent elements */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
            Master Global Markets
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto">
            Experience professional-grade trading with tools designed for
            success in today's dynamic markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Features */}
          <div className="space-y-16">
            {features
              .filter((f) => f.position === "left")
              .map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-right"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Badge
                    variant="outline"
                    className="mb-3 text-gray-600 border-gray-400/50 px-4 py-1.5 text-sm font-medium"
                  >
                    {feature.tag}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
          </div>

          {/* Center Phone */}
          <motion.div
            className="relative mx-auto w-full max-w-[300px] md:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative w-full aspect-[3/5] bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="https://venmarltd.com/assets/img/web/comm_bg.png"
                alt="Broker"
                width={300}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-16">
            {features
              .filter((f) => f.position === "right")
              .map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-left"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Badge
                    variant="outline"
                    className="mb-3 text-gray-600 border-gray-400/50 px-4 py-1.5 text-sm font-medium"
                  >
                    {feature.tag}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
