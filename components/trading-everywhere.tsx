"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function TradingEverywhere() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState("desktop");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const platforms = [
    {
      name: "MT5 Desktop",
      description: "Advanced Broker for professionals",
      href: "/platforms/metatrader5",
      image: "https://www.metatrader5.com/i/web-trading/web-trading-main.jpg",
      id: "desktop",
    },
    {
      name: "MT5 Mobile",
      description: "Trade on the go with our mobile app",
      href: "/platforms/mt5-mobile",
      image: "https://acttrader.com/static/img/mobile_banner-01.a2f7711.png",
      id: "mobile",
    },
    {
      name: "MT5 WebTrader",
      description: "Access markets directly from your browser",
      href: "/platforms/mt5-web",
      image: "https://www.pmfinancials.mu/assets/mt5-browser-screenshot.png",
      id: "web",
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
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Geometric pattern background */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Accent elements */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
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
              {platforms.map((platform) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeImage === platform.id ? 1 : 0,
                    scale: activeImage === platform.id ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
                  className="w-1.5 h-1.5 rounded-full bg-white"
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                Trade anywhere with MT5
              </h2>
              <p className="text-xl text-white/80">
                Access global markets instantly from any device. Your trading
                journey starts here.
              </p>
            </div>

            {/* Platform Links */}
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 pt-4"
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  variants={itemAnimation}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onHoverStart={() => setActiveImage(platform.id)}
                >
                  <Link
                    href={platform.href}
                    className={`flex items-center justify-between group ${
                      index % 2 === 0
                        ? "bg-secondary/10 hover:bg-secondary/20"
                        : "bg-white/10 hover:bg-white/20"
                    } rounded-2xl p-6 transition-colors`}
                  >
                    <div>
                      <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-white/70">{platform.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
