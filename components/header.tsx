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
    Mobile: [{ name: "MetaTrader 5", href: "/platforms/metatrader5-mobile" }],
    Web: [{ name: "MetaTrader 5", href: "/platforms/metatrader5-web" }],
  }

  const markets = [
    { name: "Forex CFD", href: "/markets/forex" },
    { name: "Commodities CFD", href: "/markets/commodities" },
    { name: "Stocks CFD", href: "/markets/stocks" },
    { name: "Indices CFD", href: "/markets/indices" },
    { name: "Crypto CFD", href: "/markets/crypto" },
  ]

  const navItems = [
    { label: "Trading", href: "/trading" },
    { label: "Tools", href: "/tools" },
    { label: "Company", href: "/company" },
    { label: "Partners", href: "/partners" },
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

              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Markets Dropdown */}
                <DropdownMenu onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    Markets
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-screen p-0 border-none bg-transparent">
                    <div className="w-full bg-background/95 backdrop-blur-md py-8">
                      <div className="container mx-auto px-4">
                        <div className="max-w-2xl">
                          {markets.map((market) => (
                            <DropdownMenuItem key={market.href} asChild>
                              <Link
                                href={market.href}
                                className="block select-none rounded-md p-3 text-base font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {market.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Platforms Dropdown */}
                <DropdownMenu onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    Platforms
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-screen p-0 border-none bg-transparent">
                    <div className="w-full bg-background/95 backdrop-blur-md py-8">
                      <div className="container mx-auto px-4">
                        <div className="grid grid-cols-3 gap-8">
                          {Object.entries(platforms).map(([category, items]) => (
                            <div key={category} className="space-y-4">
                              <h3 className="text-sm font-medium text-muted-foreground">{category}</h3>
                              <div className="space-y-2">
                                {items.map((item) => (
                                  <DropdownMenuItem key={item.href} asChild>
                                    <Link
                                      href={item.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-base font-medium leading-none">{item.name}</div>
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
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Globe className="h-4 w-4 mr-2" />
                EN
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                Sign In
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Register
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

