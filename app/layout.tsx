import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ChatAssistant } from '@/components/chat-assistant'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexum Capitals - Advanced Broker',
  description: 'Trade with Nexum Capitals, the world\'s most innovative Broker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/* <ChatAssistant /> */}
      </body>
    </html>
  )
}

