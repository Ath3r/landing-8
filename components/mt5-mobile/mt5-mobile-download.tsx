"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MT5MobileDownload() {
  return (
    <section className="py-24 bg-white">
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

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Download MT5 Mobile
            </h2>
            <p className="text-xl text-gray-600">
              Start trading on your mobile device today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  iOS App
                </h3>
                <p className="text-gray-600">
                  Download MT5 for iPhone and iPad
                </p>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6"
                >
                  Download for iOS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Android App
                </h3>
                <p className="text-gray-600">
                  Download MT5 for Android devices
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-100 text-gray-900 px-8 py-6"
                >
                  Download for Android
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://www.metatrader5.com/i/web-trading/web-trading-main_2x.jpg"
                alt="MT5 Mobile Apps"
                className="rounded-xl mx-auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
