import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    Accounts: [
      { name: "Standard accounts", href: "/accounts/standard" },
      { name: "Professional accounts", href: "/accounts/professional" },
      { name: "Demo trading account", href: "/accounts/demo" },
      { name: "Social Trading accounts", href: "/accounts/social" },
    ],
    Conditions: [
      { name: "Deposits and withdrawals", href: "/conditions/deposits" },
      { name: "Fees", href: "/conditions/fees" },
      { name: "Client protection", href: "/conditions/protection" },
    ],
    Markets: [
      { name: "Forex CFD", href: "/markets/forex" },
      { name: "Commodities CFD", href: "/markets/commodities" },
      { name: "Stocks CFD", href: "/markets/stocks" },
      { name: "Indices CFD", href: "/markets/indices" },
      { name: "Crypto CFD", href: "/markets/crypto" },
    ],
    Platforms: [
      { name: "RTX Pro Platform", href: "/platforms/pro" },
      { name: "RTX Mobile Trader", href: "/platforms/mobile" },
      { name: "RTX Web Terminal", href: "/platforms/web" },
    ],
    Tools: [
      { name: "Analytical tools", href: "/tools/analytical" },
      { name: "Economic calendar", href: "/tools/calendar" },
      { name: "Trading calculator", href: "/tools/calculator" },
      { name: "Currency converter", href: "/tools/converter" },
    ],
    About: [
      { name: "About us", href: "/about" },
      { name: "Why RTX Trade", href: "/about/why-rtx" },
      { name: "RTX reviews", href: "/about/reviews" },
      { name: "Contact us", href: "/contact" },
      { name: "Help Center", href: "/help" },
    ],
    Corporate: [
      { name: "Regulation", href: "/corporate/regulation" },
      { name: "Legal documents", href: "/corporate/legal" },
      { name: "Compensation fund", href: "/corporate/compensation" },
    ],
    Solutions: [
      { name: "Premier Program", href: "/solutions/premier" },
      { name: "Social Trading", href: "/solutions/social-trading" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Youtube, href: "https://youtube.com" },
  ]

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Brand Logo and Name */}
        <div className="flex items-center justify-center mb-12">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Nexum Capitals Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-gray-900">Nexum Capitals</span>
          </Link>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-gray-900">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.href}
                href={social.href}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t text-sm text-gray-500">
          <p>
            Risk Warning: Trading financial instruments carries a high level of risk to your capital with the possibility of losing more than your initial investment. Trading is not suitable for everyone and may result in losses. You should ensure you understand the risks involved and seek independent advice if necessary.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Nexum Capitals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

