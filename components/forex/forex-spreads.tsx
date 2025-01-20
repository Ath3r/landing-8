"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

type ForexPair = {
  symbol: string
  name: string
  spread: number
  commission: string
  margin: string
  longSwap: number
  shortSwap: number
  stopLevel: number
  swapFree?: boolean
}

const accountTypes = ["standard", "standard-cent", "pro", "zero", "raw-spread"]

const forexPairs: Record<string, Record<string, ForexPair[]>> = {
  standard: {
    majors: [
      {
        symbol: "EURUSDm",
        name: "Euro vs US Dollar",
        spread: 1.0,
        commission: "$0",
        margin: "3.33%",
        longSwap: -1.54,
        shortSwap: 0.35,
        stopLevel: 0,
        swapFree: true,
      },
      {
        symbol: "GBPUSDm",
        name: "Great Britain Pound vs US Dollar",
        spread: 1.5,
        commission: "$0",
        margin: "3.33%",
        longSwap: -2.36,
        shortSwap: 0.11,
        stopLevel: 0,
        swapFree: true,
      },
    ],
    minors: [
      {
        symbol: "EURGBPm",
        name: "Euro vs Great Britain Pound",
        spread: 1.8,
        commission: "$0",
        margin: "3.33%",
        longSwap: -1.12,
        shortSwap: 0.22,
        stopLevel: 0,
        swapFree: true,
      },
      {
        symbol: "AUDUSDm",
        name: "Australian Dollar vs US Dollar",
        spread: 1.2,
        commission: "$0",
        margin: "3.33%",
        longSwap: -1.89,
        shortSwap: 0.15,
        stopLevel: 0,
        swapFree: true,
      },
    ],
    exotics: [
      {
        symbol: "USDTRYm",
        name: "US Dollar vs Turkish Lira",
        spread: 30.0,
        commission: "$0",
        margin: "5%",
        longSwap: -350.25,
        shortSwap: 120.45,
        stopLevel: 0,
      },
      {
        symbol: "USDMXNm",
        name: "US Dollar vs Mexican Peso",
        spread: 250.0,
        commission: "$0",
        margin: "5%",
        longSwap: -45.36,
        shortSwap: 12.58,
        stopLevel: 0,
      },
    ],
  },
  "standard-cent": {
    majors: [
      {
        symbol: "EURUSDc",
        name: "Euro vs US Dollar (Cent)",
        spread: 12,
        commission: "$0",
        margin: "1%",
        longSwap: -0.15,
        shortSwap: 0.03,
        stopLevel: 0,
      },
      {
        symbol: "GBPUSDc",
        name: "Great Britain Pound vs US Dollar (Cent)",
        spread: 15,
        commission: "$0",
        margin: "1%",
        longSwap: -0.24,
        shortSwap: 0.01,
        stopLevel: 0,
      },
    ],
    minors: [
      {
        symbol: "EURGBPc",
        name: "Euro vs Great Britain Pound (Cent)",
        spread: 18,
        commission: "$0",
        margin: "1%",
        longSwap: -0.11,
        shortSwap: 0.02,
        stopLevel: 0,
      },
      {
        symbol: "AUDUSDc",
        name: "Australian Dollar vs US Dollar (Cent)",
        spread: 14,
        commission: "$0",
        margin: "1%",
        longSwap: -0.19,
        shortSwap: 0.01,
        stopLevel: 0,
      },
    ],
    exotics: [
      {
        symbol: "USDTRYc",
        name: "US Dollar vs Turkish Lira (Cent)",
        spread: 300,
        commission: "$0",
        margin: "2%",
        longSwap: -35.02,
        shortSwap: 12.04,
        stopLevel: 0,
      },
      {
        symbol: "USDMXNc",
        name: "US Dollar vs Mexican Peso (Cent)",
        spread: 2500,
        commission: "$0",
        margin: "2%",
        longSwap: -4.53,
        shortSwap: 1.25,
        stopLevel: 0,
      },
    ],
  },
  pro: {
    majors: [
      {
        symbol: "EURUSD.p",
        name: "Euro vs US Dollar (Pro)",
        spread: 0.6,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -1.54,
        shortSwap: 0.35,
        stopLevel: 0,
      },
      {
        symbol: "GBPUSD.p",
        name: "Great Britain Pound vs US Dollar (Pro)",
        spread: 0.9,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -2.36,
        shortSwap: 0.11,
        stopLevel: 0,
      },
    ],
    minors: [
      {
        symbol: "EURGBP.p",
        name: "Euro vs Great Britain Pound (Pro)",
        spread: 1.1,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -1.12,
        shortSwap: 0.22,
        stopLevel: 0,
      },
      {
        symbol: "AUDUSD.p",
        name: "Australian Dollar vs US Dollar (Pro)",
        spread: 0.8,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -1.89,
        shortSwap: 0.15,
        stopLevel: 0,
      },
    ],
    exotics: [
      {
        symbol: "USDTRY.p",
        name: "US Dollar vs Turkish Lira (Pro)",
        spread: 25.0,
        commission: "$3.5",
        margin: "5%",
        longSwap: -350.25,
        shortSwap: 120.45,
        stopLevel: 0,
      },
      {
        symbol: "USDMXN.p",
        name: "US Dollar vs Mexican Peso (Pro)",
        spread: 200.0,
        commission: "$3.5",
        margin: "5%",
        longSwap: -45.36,
        shortSwap: 12.58,
        stopLevel: 0,
      },
    ],
  },
  zero: {
    majors: [
      {
        symbol: "EURUSD.z",
        name: "Euro vs US Dollar (Zero)",
        spread: 0.3,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -1.54,
        shortSwap: 0.35,
        stopLevel: 0,
      },
      {
        symbol: "GBPUSD.z",
        name: "Great Britain Pound vs US Dollar (Zero)",
        spread: 0.4,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -2.36,
        shortSwap: 0.11,
        stopLevel: 0,
      },
    ],
    minors: [
      {
        symbol: "EURGBP.z",
        name: "Euro vs Great Britain Pound (Zero)",
        spread: 0.5,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -1.12,
        shortSwap: 0.22,
        stopLevel: 0,
      },
      {
        symbol: "AUDUSD.z",
        name: "Australian Dollar vs US Dollar (Zero)",
        spread: 0.4,
        commission: "$3.5",
        margin: "3.33%",
        longSwap: -1.89,
        shortSwap: 0.15,
        stopLevel: 0,
      },
    ],
    exotics: [
      {
        symbol: "USDTRY.z",
        name: "US Dollar vs Turkish Lira (Zero)",
        spread: 15.0,
        commission: "$3.5",
        margin: "5%",
        longSwap: -350.25,
        shortSwap: 120.45,
        stopLevel: 0,
      },
      {
        symbol: "USDMXN.z",
        name: "US Dollar vs Mexican Peso (Zero)",
        spread: 150.0,
        commission: "$3.5",
        margin: "5%",
        longSwap: -45.36,
        shortSwap: 12.58,
        stopLevel: 0,
      },
    ],
  },
  "raw-spread": {
    majors: [
      {
        symbol: "EURUSD.r",
        name: "Euro vs US Dollar (Raw)",
        spread: 0.0,
        commission: "$7",
        margin: "3.33%",
        longSwap: -1.54,
        shortSwap: 0.35,
        stopLevel: 0,
      },
      {
        symbol: "GBPUSD.r",
        name: "Great Britain Pound vs US Dollar (Raw)",
        spread: 0.1,
        commission: "$7",
        margin: "3.33%",
        longSwap: -2.36,
        shortSwap: 0.11,
        stopLevel: 0,
      },
    ],
    minors: [
      {
        symbol: "EURGBP.r",
        name: "Euro vs Great Britain Pound (Raw)",
        spread: 0.2,
        commission: "$7",
        margin: "3.33%",
        longSwap: -1.12,
        shortSwap: 0.22,
        stopLevel: 0,
      },
      {
        symbol: "AUDUSD.r",
        name: "Australian Dollar vs US Dollar (Raw)",
        spread: 0.1,
        commission: "$7",
        margin: "3.33%",
        longSwap: -1.89,
        shortSwap: 0.15,
        stopLevel: 0,
      },
    ],
    exotics: [
      {
        symbol: "USDTRY.r",
        name: "US Dollar vs Turkish Lira (Raw)",
        spread: 10.0,
        commission: "$7",
        margin: "5%",
        longSwap: -350.25,
        shortSwap: 120.45,
        stopLevel: 0,
      },
      {
        symbol: "USDMXN.r",
        name: "US Dollar vs Mexican Peso (Raw)",
        spread: 100.0,
        commission: "$7",
        margin: "5%",
        longSwap: -45.36,
        shortSwap: 12.58,
        stopLevel: 0,
      },
    ],
  },
}

export function ForexSpreads() {
  const [activeTab, setActiveTab] = useState("standard")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    majors: true,
    minors: false,
    exotics: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Forex market spreads and swaps
        </motion.h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start mb-8 bg-transparent border-b rounded-none h-auto p-0 space-x-8">
            {accountTypes.map((type) => (
              <TabsTrigger
                key={type}
                value={type}
                className="border-b-2 border-transparent data-[state=active]:border-primary rounded-none bg-transparent h-auto pb-4 px-0"
              >
                {type
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </TabsTrigger>
            ))}
          </TabsList>

          {accountTypes.map((type) => (
            <TabsContent key={type} value={type}>
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="grid grid-cols-8 gap-4 p-4 border-b bg-gray-50 text-sm font-medium text-gray-500">
                  <div className="col-span-2">Symbol</div>
                  <div>Avg. spread³</div>
                  <div>Commission</div>
                  <div>Margin</div>
                  <div>Long swap</div>
                  <div>Short swap</div>
                  <div>Stop level*</div>
                </div>

                {["majors", "minors", "exotics"].map((section) => (
                  <div key={section} className="border-b">
                    <button
                      onClick={() => toggleSection(section)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <span className="font-medium capitalize">{section}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${expandedSections[section] ? "transform rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedSections[section] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {forexPairs[type][section].map((pair) => (
                            <div key={pair.symbol} className="grid grid-cols-8 gap-4 p-4 border-t text-sm">
                              <div className="col-span-2">
                                <div className="font-medium">{pair.symbol}</div>
                                <div className="text-gray-500 text-xs">{pair.name}</div>
                                {pair.swapFree && (
                                  <Badge variant="secondary" className="mt-1 text-xs">
                                    Swap-free available
                                  </Badge>
                                )}
                              </div>
                              <div>{pair.spread}</div>
                              <div>{pair.commission}</div>
                              <div>{pair.margin}</div>
                              <div>{pair.longSwap}</div>
                              <div>{pair.shortSwap}</div>
                              <div>{pair.stopLevel}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

