'use client'

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { motion } from "framer-motion"

const instruments = [
  { name: "Forex", leverage: "Up to 1:2000", spread: "From 0.0 pips", swapFree: "Yes" },
  { name: "Stocks", leverage: "Up to 1:20", spread: "From 0.1%", swapFree: "Yes" },
  { name: "Indices", leverage: "Up to 1:100", spread: "From 0.1 points", swapFree: "Yes" },
  { name: "Commodities", leverage: "Up to 1:100", spread: "From 0.01 points", swapFree: "Yes" },
  { name: "Cryptocurrencies", leverage: "Up to 1:20", spread: "From 0.5%", swapFree: "No" },
]

export function GlobalMarketsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trade assets from global markets
          </h2>
          <p className="text-xl text-gray-600">
            Capitalize on every opportunity with the world's most popular assets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Instruments</TableHead>
                <TableHead>Leverage</TableHead>
                <TableHead>Avg. spread</TableHead>
                <TableHead>Swap-free</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {instruments.map((instrument) => (
                <TableRow key={instrument.name}>
                  <TableCell className="font-medium">{instrument.name}</TableCell>
                  <TableCell>{instrument.leverage}</TableCell>
                  <TableCell>{instrument.spread}</TableCell>
                  <TableCell>{instrument.swapFree}</TableCell>
                  <TableCell>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
                      Learn more
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="px-8">
            Register
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Try demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

