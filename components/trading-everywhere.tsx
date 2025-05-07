"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function TradingEverywhere() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState("desktop");

  const platforms = [
    {
      name: "MT5 Desktop",
      description: "Advanced Broker for professionals",
      href: "/platforms/metatrader5",
      image: "https://www.metatrader5.com/i/web-trading/web-trading-main.jpg",
      id: "desktop",
    },
    {
      name: "MT5 Mobile",
      description: "Trade on the go with our mobile app",
      href: "/platforms/mt5-mobile",
      image: "https://acttrader.com/static/img/mobile_banner-01.a2f7711.png",
      id: "mobile",
    },
    {
      name: "MT5 WebTrader",
      description: "Access markets directly from your browser",
      href: "/platforms/mt5-web",
      image: "https://www.pmfinancials.mu/assets/mt5-browser-screenshot.png",
      id: "web",
    },
  ];

  const currentPlatformImage = platforms.find(p => p.id === activeImage)?.image;
  const currentPlatformName = platforms.find(p => p.id === activeImage)?.name;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Geometric pattern background */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Accent elements - blurs removed */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-white/10 rounded-full" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-white/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image - animations removed */}
          <div
            className="relative"
          >
            <div
              className="relative aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-gray-900"
            >
              {currentPlatformImage && (
                <Image
                  src={currentPlatformImage}
                  alt={currentPlatformName || "Platform image"}
                  fill
                  className="object-contain p-8"
                  priority
                />
              )}
            </div>
          </div>

          {/* Right side - Content - animations removed */}
          <div
            className="space-y-8"
          >
            {/* Animated Dots removed */}

            {/* Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                Trade anywhere with MT5
              </h2>
              <p className="text-xl text-white/80">
                Access global markets instantly from any device. Your trading
                journey starts here.
              </p>
            </div>

            {/* Platform Links - animations removed */}
            <div
              className="space-y-6 pt-4"
            >
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  onMouseEnter={() => setActiveImage(platform.id)}
                >
                  <Link
                    href={platform.href}
                    className={`flex items-center justify-between group ${
                      index % 2 === 0
                        ? "bg-secondary/10 hover:bg-secondary/20"
                        : "bg-white/10 hover:bg-white/20"
                    } rounded-2xl p-6 transition-colors`}
                  >
                    <div>
                      <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-white/70">{platform.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
