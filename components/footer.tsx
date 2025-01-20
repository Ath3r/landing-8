'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { 
  Building2, 
  Mail, 
  Phone,
  Shield,
  Globe,
  FileText,
  Twitter,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react"

const footerLinks = {
  markets: [
    { name: "Forex", href: "/markets/forex" },
    { name: "Commodities", href: "/markets/commodities" },
    { name: "Stocks", href: "/markets/stocks" },
    { name: "Indices", href: "/markets/indices" },
    { name: "Crypto", href: "/markets/crypto" },
  ],
  platforms: [
    { name: "MetaTrader 5", href: "/platforms/metatrader5" },
    { name: "MT5 Mobile", href: "/platforms/mt5-mobile" },
    { name: "MT5 Web", href: "/platforms/mt5-web" },
  ],
  company: [
    { name: "About Us", href: "/company" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Nexum Capitals</span>
            </Link>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-white">Registered Office</p>
                  <p>123 Trading Street</p>
                  <p>Financial District</p>
                  <p>London, EC1A 1BB</p>
                  <p>United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:support@nexumcapitals.com" className="hover:text-white transition-colors">
                  support@nexumcapitals.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+442012345678" className="hover:text-white transition-colors">
                  +44 20 1234 5678
                </a>
              </div>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Markets</h3>
            <ul className="space-y-4">
              {footerLinks.markets.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Platforms</h3>
            <ul className="space-y-4">
              {footerLinks.platforms.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            {/* Registration Info */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <p>
                  Nexum Capitals Limited is registered in England and Wales (Company No. 12345678)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <p>
                  Authorized and regulated by the Financial Conduct Authority (FCA No. 123456)
                </p>
              </div>
            </div>

            {/* Risk Warning */}
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 shrink-0 text-primary mt-1" />
              <p className="text-sm">
                Risk Warning: Trading CFDs and other leveraged products carries a high level of risk to your capital and may not be suitable for all investors. Please ensure that you fully understand the risks involved and seek independent advice if necessary. Past performance is not indicative of future results.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-sm text-center pt-4 border-t border-gray-800">
              © {new Date().getFullYear()} Nexum Capitals Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
