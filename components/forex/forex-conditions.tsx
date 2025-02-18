"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ForexConditions() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Title and Description */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Forex market conditions</h2>
              <p className="text-xl text-gray-600">
                The forex market is the largest financial market in the world. With over $5.5 trillion in daily trading
                volume, currency pair trading presents endless opportunities 24 hours a day, 5 days a week.
              </p>
            </div>

            {/* Trading Hours */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Forex trading hours</h3>
              <p className="text-gray-600">
                Forex market trading hours is from Sunday 22:05 to Friday 21:59, however, currency pairs below have
                their own trading hours:
              </p>
              <ul className="space-y-2 list-disc list-inside text-gray-600">
                <li>USDCNH, USDTHB: Monday 00:05 to Friday 21:59</li>
                <li>USDILS, GBPILS: Monday 06:00 to Friday 15:59 (daily break 16:00-06:00)</li>
              </ul>
              <p className="text-gray-600">All timings are in server time (GMT+0).</p>
              <p className="text-gray-600">
                Learn more about trading hours in our{" "}
                <Link href="/help" className="text-primary hover:underline">
                  Help Center
                </Link>
                .
              </p>
            </div>

            {/* Spreads */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Spreads³</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Spreads are always floating. Because of this, the spreads in the above table are averages based on the
                  previous trading day. For live spreads, please refer to the Broker
                </p>
                <p>
                  Please note that spreads may widen when the markets experience lower liquidity, including rollover
                  periods, economic news releases, and market openings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

