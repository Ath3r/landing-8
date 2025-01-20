'use client'

import { motion } from "framer-motion"

const stats = [
  { value: "800,000+", label: "Active traders" },
  { value: "15+", label: "Years of excellence" },
  { value: "24/7", label: "Customer support" },
  { value: "100+", label: "Countries served" },
  { value: "$500M+", label: "Daily trading volume" },
  { value: "0.0", label: "Commission on trades" },
]

export function CompanyStats() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nexum Capitals by the Numbers
          </h2>
          <p className="text-xl text-gray-600">
            Our commitment to excellence reflects in our growth and global impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

