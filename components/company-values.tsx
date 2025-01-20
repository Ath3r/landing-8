'use client'

import { motion } from "framer-motion"

const stats = [
  { value: "2,400+", label: "Employees" },
  { value: "7", label: "offices Globally" },
  { value: "98", label: "Nationalities" },
  { value: "4", label: "Continents" },
]

const values = [
  {
    title: "Bold",
    description: "We have innovated, pushed boundaries, and challenged the status quo from day one. We follow a simple idea: if it doesn't exist, we invent it. If it does exist, we improve it."
  },
  {
    title: "Good people",
    description: "We prioritize our clients, making sure all our innovations are influenced by our desire to give them the best trading experience possible."
  },
  {
    title: "Tech professionals",
    description: "We are science-driven, using sophisticated models and data in everything we do to keep our clients protected and offer them better-than-market conditions."
  },
  {
    title: "Reliable",
    description: "We prioritize reliability in our platform, giving us a solid foundation on which to innovate. Stable spreads, fast execution, and other client-centered benefits, make trading with Nexum more dependable."
  },
]

export function CompanyValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        {/* <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div> */}

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our values guide every advancement
          </h2>
          <p className="text-xl text-gray-600">
            From business strategy to employee care, every step we take follows our 4 key values.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

