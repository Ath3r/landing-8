"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Globe } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const platforms = {
    Desktop: [{ name: "MetaTrader 5", href: "/platforms/metatrader5" }],
    Mobile: [{ name: "MetaTrader 5", href: "/platforms/mt5-mobile" }],
    Web: [{ name: "MetaTrader 5", href: "/platforms/mt5-web" }],
  }

  const markets = [
    { name: "Forex CFD", href: "/markets/forex" },
    { name: "Commodities CFD", href: "/markets/commodities" },
    { name: "Stocks CFD", href: "/markets/stocks" },
    { name: "Indices CFD", href: "/markets/indices" },
    { name: "Crypto CFD", href: "/markets/crypto" },
  ]

  const navItems = [
    { label: "Company", href: "/company" },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <>
      {/* Enhanced backdrop blur when dropdown is open */}
      {isDropdownOpen && <div className="fixed inset-0 bg-background/60 backdrop-blur-md z-40" />}

      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold">Nexum Capitals</span>
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                {/* Markets Dropdown */}
                <DropdownMenu onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                    Markets
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-screen p-0 border-none bg-transparent">
                    <div className="w-full bg-background/95 backdrop-blur-md py-12">
                      <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                          <h2 className="text-2xl font-bold mb-8 px-6">Trading Markets</h2>
                          <div className="grid grid-cols-2 gap-4">
                            {markets.map((market) => (
                              <DropdownMenuItem key={market.href} asChild>
                                <Link
                                  href={market.href}
                                  className="flex items-center gap-6 select-none rounded-xl p-6 text-lg font-medium leading-relaxed no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                                >
                                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                                  </div>
                                  <div className="space-y-1">
                                    <div className="text-xl font-semibold">{market.name}</div>
                                    <p className="text-sm text-muted-foreground">Trade the world's most popular {market.name.toLowerCase()} markets</p>
                                  </div>
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Platforms Dropdown */}
                <DropdownMenu onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                    Platforms
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-screen p-0 border-none bg-transparent">
                    <div className="w-full bg-background/95 backdrop-blur-md py-8">
                      <div className="container mx-auto px-4">
                        <div className="grid grid-cols-3 gap-8">
                          {Object.entries(platforms).map(([category, items]) => (
                            <div key={category} className="space-y-4">
                              <h3 className="text-base font-semibold text-muted-foreground">{category}</h3>
                              <div className="space-y-3">
                                {items.map((item) => (
                                  <DropdownMenuItem key={item.href} asChild>
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-3 select-none rounded-md p-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                                        <div className="w-6 h-6 rounded-full bg-primary/20" />
                                      </div>
                                      <div>
                                        <div className="text-lg font-medium leading-none mb-1">
                                          {item.name}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                          Learn more about our trading platform
                                        </p>
                                      </div>
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Regular Nav Items */}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="lg" className="text-lg text-muted-foreground hover:text-primary">
                Sign In
              </Button>
              <Button size="lg" className="text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                Register
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
