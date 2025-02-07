"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu, X, DollarSign, Gem, LineChart, BarChart3, Bitcoin, Monitor, Smartphone, Globe } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "../app/logo.png";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const platforms = {
    Desktop: [{ name: "MetaTrader 5", href: "/platforms/metatrader5", icon: Monitor }],
    Mobile: [{ name: "MetaTrader 5", href: "/platforms/mt5-mobile", icon: Smartphone }],
    Web: [{ name: "MetaTrader 5", href: "/platforms/mt5-web", icon: Globe }],
  };

  const markets = [
    { name: "Forex CFD", href: "/markets/forex", icon: DollarSign },
    { name: "Commodities CFD", href: "/markets/commodities", icon: Gem },
    { name: "Stocks CFD", href: "/markets/stocks", icon: LineChart },
    { name: "Indices CFD", href: "/markets/indices", icon: BarChart3 },
    { name: "Crypto CFD", href: "/markets/crypto", icon: Bitcoin },
  ];

  const navItems = [
    { label: "Company", href: "/company" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-background/60 backdrop-blur-md z-40" />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-48 h-16">
                  <Image
                    src={logo}
                    alt="Nexum Capitals Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-6">
                <div
                  onMouseEnter={() => setHoveredMenu("markets")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <DropdownMenu open={hoveredMenu === "markets"}>
                    <DropdownMenuTrigger className="text-base font-medium text-gray-600 hover:text-black transition-colors data-[state=open]:text-black">
                      Markets
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-screen p-0 border-none shadow-lg"
                      sideOffset={16}
                    >
                      <div className="w-full bg-white py-8">
                        <div className="container mx-auto px-4">
                          <div className="max-w-4xl">
                            <h2 className="text-2xl font-bold mb-8 px-6">
                              Trading Markets
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                              {markets.map((market) => (
                                <DropdownMenuItem key={market.href} asChild>
                                  <Link
                                    href={market.href}
                                    className="flex items-center gap-6 select-none rounded-xl p-6 text-lg font-medium leading-relaxed no-underline outline-none transition-all hover:bg-gray-50 group"
                                  >
                                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
                                      <market.icon className="w-8 h-8 text-gray-700 group-hover:text-gray-900" />
                                    </div>
                                    <div className="space-y-1">
                                      <div className="text-xl font-semibold">
                                        {market.name}
                                      </div>
                                      <p className="text-sm text-gray-500">
                                        Trade the world's most popular{" "}
                                        {market.name.toLowerCase()} markets
                                      </p>
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
                </div>

                <div
                  onMouseEnter={() => setHoveredMenu("platforms")}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <DropdownMenu open={hoveredMenu === "platforms"}>
                    <DropdownMenuTrigger className="text-base font-medium text-gray-600 hover:text-black transition-colors data-[state=open]:text-black">
                      Platforms
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-screen p-0 border-none shadow-lg"
                      sideOffset={16}
                    >
                      <div className="w-full bg-white py-8">
                        <div className="container mx-auto px-4">
                          <div className="grid grid-cols-3 gap-8">
                            {Object.entries(platforms).map(
                              ([category, items]) => (
                                <div key={category} className="space-y-4">
                                  <h3 className="text-base font-semibold text-gray-500">
                                    {category}
                                  </h3>
                                  <div className="space-y-3">
                                    {items.map((item) => (
                                      <DropdownMenuItem key={item.href} asChild>
                                        <Link
                                          href={item.href}
                                          className="flex items-center gap-3 select-none rounded-md p-4 no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                                        >
                                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                                            <item.icon className="w-5 h-5 text-gray-700" />
                                          </div>
                                          <div>
                                            <div className="text-lg font-medium leading-none mb-1">
                                              {item.name}
                                            </div>
                                            <p className="text-sm text-gray-500">
                                              Learn more about our trading platform
                                            </p>
                                          </div>
                                        </Link>
                                      </DropdownMenuItem>
                                    ))}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Link
                  href="/company"
                  className="text-base font-medium text-gray-600 hover:text-black transition-colors"
                >
                  Company
                </Link>

                <Link
                  href="/contact"
                  className="text-base font-medium text-gray-600 hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-base font-medium text-gray-600 hover:text-black hover:bg-transparent"
              >
                Sign in
              </Button>
              <Button
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-medium px-6 rounded"
              >
                Register
              </Button>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>

              {isMobileMenuOpen && (
                <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-[100] overflow-y-auto">
                  <div className="container mx-auto px-4 py-6">
                    <nav className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Markets</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {markets.map((market) => (
                            <Link
                              key={market.href}
                              href={market.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-black transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                                <market.icon className="w-5 h-5 text-gray-700" />
                              </div>
                              <div>
                                <div className="font-medium">{market.name}</div>
                                <p className="text-sm text-gray-500">
                                  Trade {market.name.toLowerCase()}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Platforms</h3>
                        <div className="space-y-6">
                          {Object.entries(platforms).map(
                            ([category, items]) => (
                              <div key={category} className="space-y-3">
                                <h4 className="text-base font-medium text-gray-500">
                                  {category}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-black transition-colors"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                                        <item.icon className="w-5 h-5 text-gray-700" />
                                      </div>
                                      <div>
                                        <div className="font-medium">
                                          {item.name}
                                        </div>
                                        <p className="text-sm text-gray-500">
                                          Learn more
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">More</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {navItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-black transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
                                <div className="w-6 h-6 rounded-full bg-gray-200" />
                              </div>
                              <div>
                                <div className="font-medium">{item.label}</div>
                                <p className="text-sm text-gray-500">
                                  Learn more
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </nav>

                    <div className="mt-8 pt-6 border-t space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-center text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sign In
                      </Button>
                      <Button
                        className="w-full justify-center text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
