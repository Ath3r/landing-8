"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, Globe, LineChart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Mobile Trading",
    description: "Trade on-the-go with our powerful mobile application",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Fast Execution",
    description: "Experience lightning-fast trade execution on mobile",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Global Access",
    description: "Access markets worldwide from your smartphone",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Advanced Charts",
    description: "Professional charting tools in your pocket",
  },
];

export function MT5Mobile() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              MetaTrader 5 Mobile
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Trade anywhere, anytime with our powerful mobile Broker
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-3 group-hover:bg-secondary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8"
              >
                Download for iOS
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 text-gray-900"
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
            className="relative lg:order-last"
          >
            <Image
              src="https://www.forex.com/en-us/-/media/project/gain-capital/forex/feature-images/platforms/metatrader/mt4/fxus-mt4-mobile-trading.png"
              alt="MetaTrader 5 Mobile App"
              width={600}
              height={800}
              className="rounded-xl mx-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
