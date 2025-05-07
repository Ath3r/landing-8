"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function TradingTools() {
  const sectionRef = useRef<HTMLElement>(null);

  const tools = [
    {
      name: "Advanced Charting",
      description: "Analyze markets with powerful technical tools",
      href: "#",
      image: "https://www.radexmarkets.com/images/mt5-tools-pad.png",
      id: "charting",
    },
    {
      name: "Risk Management",
      description: "Protect your investments with smart risk controls",
      href: "#",
      image: "https://www.radexmarkets.com/images/mt5-tools-pad.png",
      id: "risk",
    },
    {
      name: "AI-Powered Insights",
      description: "Get market predictions backed by machine learning",
      href: "#",
      image: "https://www.radexmarkets.com/images/mt5-tools-pad.png",
      id: "ai",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Geometric pattern background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(180deg, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            mask: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMask: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        {/* Accent elements - blurs removed */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-blue-100/20 rounded-full" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-purple-100/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content - animations removed */}
          <div
            className="space-y-8"
          >
            {/* Animated Dots removed */}

            {/* Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
                Powerful tools at your fingertips
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600">
                Elevate your trading strategy with our suite of advanced tools
                and features.
              </p>
            </div>

            {/* Tool Links - animations removed */}
            <div
              className="space-y-6 pt-4"
            >
              {tools.map((tool) => (
                <div // Changed from motion.div
                  key={tool.name}
                >
                  <Link
                    href={tool.href}
                    className="flex items-center justify-between group bg-white/80 backdrop-blur rounded-2xl p-6 hover:bg-white transition-colors shadow-lg"
                  >
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image - animations removed */}
          <div
            className="relative"
          >
            <div
              className="relative aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-gray-900"
            >
              <Image
                src="https://www.radexmarkets.com/images/mt5-tools-pad.png"
                alt="MT5 Trading Tools"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
