"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container h-screen">
          {/* Video Slide */}
          <div className="embla__slide relative w-full flex-[0_0_100%]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
              <div className="max-w-4xl text-center text-white">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, type: "spring" }}
                >
                  Elevate Your Financial Horizons
                </motion.h1>
                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 px-2"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Experience precision trading with our advanced platform and
                  global market insights.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="text-lg sm:text-xl px-8 sm:px-10 py-6 sm:py-8 text-primary bg-secondary hover:bg-secondary hover:text-primary font-bold rounded-full transform transition hover:scale-105"
                  >
                    Login to Portal
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg text-primary sm:text-xl px-8 sm:px-10 py-6 sm:py-8 border-2 border-white font-bold rounded-full transform transition hover:scale-105"
                  >
                    Begin Your Trading Journey
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const platforms = {
    Desktop: [{ name: "MetaTrader 5", href: "/platforms/metatrader5" }],
    Mobile: [{ name: "MetaTrader 5", href: "/platforms/mt5-mobile" }],
    Web: [{ name: "MetaTrader 5", href: "/platforms/mt5-web" }],
  };

  const markets = [
    { name: "Forex CFD", href: "/markets/forex" },
    { name: "Commodities CFD", href: "/markets/commodities" },
    { name: "Stocks CFD", href: "/markets/stocks" },
    { name: "Indices CFD", href: "/markets/indices" },
    { name: "Crypto CFD", href: "/markets/crypto" },
  ];

  const navItems = [
    { label: "Company", href: "/company" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Enhanced backdrop blur when dropdown is open */}
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-background/60 backdrop-blur-md z-40" />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Nexum Capitals</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Markets Dropdown */}
              <DropdownMenu onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                  Markets
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen p-0 border-none bg-transparent">
                  <div className="w-full bg-background/95 backdrop-blur-md py-12">
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
                                className="flex items-center gap-6 select-none rounded-xl p-6 text-lg font-medium leading-relaxed no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                              >
                                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                  <div className="w-10 h-10 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                                </div>
                                <div className="space-y-1">
                                  <div className="text-xl font-semibold">
                                    {market.name}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
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
                            <h3 className="text-base font-semibold text-muted-foreground">
                              {category}
                            </h3>
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

              {/* Desktop Buttons */}
              <Button
                variant="ghost"
                size="lg"
                className="text-lg text-muted-foreground hover:text-primary"
              >
                Sign In
              </Button>
              <Button
                size="lg"
                className="text-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Register
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
                <div className="h-full flex flex-col">
                  <SheetHeader className="p-6 border-b">
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="px-6 py-4">
                      <div className="space-y-6">
                        {/* Markets Section */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Markets
                          </h3>
                          <div className="space-y-2">
                            {markets.map((market) => (
                              <Link
                                key={market.href}
                                href={market.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                              >
                                {market.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Platforms Section */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Platforms
                          </h3>
                          {Object.entries(platforms).map(
                            ([category, items]) => (
                              <div key={category} className="mb-4">
                                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                  {category}
                                </h4>
                                <div className="space-y-2">
                                  {items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Nav Items */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Company
                          </h3>
                          <div className="space-y-2">
                            {navItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="border-t p-6 space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-center text-lg h-12"
                    >
                      Sign In
                    </Button>
                    <Button className="w-full justify-center text-lg h-12">
                      Register
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
