'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  User,
  MessageSquare,
  Send
} from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  mobile: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    mobile: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Get in touch with our team and we'll get back to you shortly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl p-6 sm:p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="pl-10 h-11 sm:h-12"
                      required
                    />
                    <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="pl-10 h-11 sm:h-12"
                      required
                    />
                    <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="relative">
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="pl-10 h-11 sm:h-12"
                    required
                  />
                  <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="min-h-[120px] sm:min-h-[150px] pl-10 resize-none"
                    required
                  />
                  <MessageSquare className="w-5 h-5 absolute left-3 top-4 text-gray-400" />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-11 sm:h-12 text-base sm:text-lg"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <motion.div 
            className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-gray-600 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              By submitting this form, you agree to our{' '}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 