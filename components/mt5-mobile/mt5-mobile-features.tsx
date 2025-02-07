"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, ChartBar, Globe, Bell, Lock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <ChartBar className="w-6 h-6 text-primary" />,
    title: "Advanced Charts",
    description:
      "Professional charting with multiple timeframes and technical indicators",
  },
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Price Alerts",
    description: "Real-time notifications for your preferred price levels",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Quick Trading",
    description:
      "Execute trades with one tap using our optimized mobile interface",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Secure Access",
    description: "Enhanced security with biometric authentication",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Global Markets",
    description: "Access worldwide markets from your mobile device",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Cross Platform",
    description: "Seamless sync between mobile and desktop platforms",
  },
];

export function MT5MobileFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="https://cdn.nwe.io/files/x/1a/6b/04b8d7a8e54686d5431facc907d2.jpg"
              alt="MT5 Mobile Features"
              width={600}
              height={800}
              className="rounded-xl mx-auto"
              priority
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Advanced Mobile Trading Features
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Experience professional-grade trading tools in the palm of your
                hand
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
