"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function TradingInstruments() {
  const sectionRef = useRef<HTMLElement>(null);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: true,
      colorTheme: "dark",
      locale: "en",
      isTransparent: true,
    });

    if (widgetContainerRef.current) {
      widgetContainerRef.current.appendChild(script);
    }

    return () => {
      if (
        widgetContainerRef.current &&
        script.parentNode === widgetContainerRef.current
      ) {
        widgetContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Unique geometric pattern background */}
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
            Trade assets from global markets
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto">
            Capitalize on every opportunity with the world's most popular
            assets.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="tradingview-widget-container">
            <div
              ref={widgetContainerRef}
              className="tradingview-widget-container__widget h-[400px] sm:h-[450px] md:h-[550px]"
            ></div>
            <div className="tradingview-widget-copyright p-4">
              <a
                href="https://www.tradingview.com/"
                rel="noopener nofollow"
                target="_blank"
                className="text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors"
              >
                Track all markets on TradingView
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 h-12 text-lg rounded-full"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-gray-900 border-gray-300 hover:bg-gray-50 h-12 text-lg rounded-full"
          >
            Try Free Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
