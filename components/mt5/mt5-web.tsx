"use client";

import { motion } from "framer-motion";
import { Monitor, BarChart, Settings, Layout, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Web Platform",
    description: "Trade directly from your browser without downloads",
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Advanced Analysis",
    description: "Professional tools and indicators for analysis",
  },
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "Customizable",
    description: "Personalize your trading workspace",
  },
  {
    icon: <Layout className="w-6 h-6 text-primary" />,
    title: "Multi-Layout",
    description: "Multiple chart layouts and workspaces",
  },
];

export function MT5Web() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="https://www.metatrader5.com/c/17/0/webterminal__593e9d19y1u.png"
              alt="MT5 Web Platform"
              width={800}
              height={600}
              className="rounded-xl shadow-xl"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              MetaTrader 5 Web
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Access your trading account instantly from any web browser
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

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8"
            >
              Launch Web Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
