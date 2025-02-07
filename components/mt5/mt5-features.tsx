"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  LineChart,
  BarChart3,
  Settings2,
  Globe2,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Advanced Charting",
    description:
      "38 technical indicators, 44 analytical objects, and multiple timeframes for in-depth market analysis.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Market Depth",
    description:
      "View real-time prices with Level II quotes and analyze market liquidity at different price levels.",
  },
  {
    icon: <Settings2 className="w-6 h-6 text-primary" />,
    title: "Automated Trading",
    description:
      "Create, test, and implement trading robots and indicators using the MQL5 programming language.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    title: "Multi-Asset Platform",
    description:
      "Trade forex, stocks, commodities, indices, and cryptocurrencies all from one platform.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Fast Execution",
    description:
      "Experience lightning-fast order execution with advanced order matching technology.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Copy Trading",
    description:
      "Follow and copy trades from successful traders in the MQL5 community.",
  },
];

export function MT5Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            A Powerful Multi-Asset Platform
          </h2>
          <p className="text-xl text-gray-600">
            Experience the next evolution of trading with MetaTrader 5, offering
            enhanced functionality and features that have made it the preferred
            choice for traders worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-secondary/50 transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Image
            src="https://www.metatrader5.com/c/2/0/Trading-System-in-MetaTrader5-for-Android.jpg"
            alt="MetaTrader 5 Dashboard"
            width={1200}
            height={600}
            className="rounded-xl mx-auto"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
}
