'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, X, ThumbsUp } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-20 right-4 z-50"
          >
            <Card className="w-[350px] shadow-lg">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  <h3 className="font-semibold">RTX Assistant</h3>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4 cursor-pointer hover:text-primary" />
                  <X 
                    className="h-4 w-4 cursor-pointer hover:text-primary" 
                    onClick={() => setIsOpen(false)}
                  />
                </div>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto">
                <div className="flex gap-2 mb-4">
                  <Bot className="h-6 w-6 shrink-0" />
                  <div className="bg-muted p-3 rounded-lg">
                    <p>Hello! I'm the RTX AI Assistant. How can I assist you today?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Type your message..." 
                    className="flex-1"
                  />
                  <Button size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className="fixed bottom-4 right-4 z-50 rounded-full h-14 w-14 p-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>
    </>
  )
}

