"use client";

import Image from "next/image";
import { Calendar, Clock, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const newsData = {
  news: [
    {
      id: 1,
      title: "Understanding Forex Trading: A Beginner's Guide",
      description: "Discover the fundamentals of forex trading and how the global currency market works.",
      category: "Forex",
      date: "2025-02-07",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
      author: "John Smith",
      readTime: "5 min read",
      content: `Forex trading, short for foreign exchange trading, is the global marketplace for buying and selling currencies. It's the largest and most liquid financial market in the world, with an average daily trading volume exceeding $6 trillion.

Key aspects of forex trading:
• 24/5 Market Operation: The forex market operates 24 hours a day, five days a week
• Currency Pairs: Trading involves simultaneously buying one currency while selling another
• Major Players: Banks, financial institutions, corporations, governments, and retail traders
• Leverage: Traders can control large positions with a relatively small amount of capital
• Price Drivers: Interest rates, economic indicators, political events, and market sentiment

Getting started in forex trading requires understanding:
1. Basic currency pair terminology
2. How exchange rates work
3. Risk management principles
4. Technical and fundamental analysis
5. Trading strategies and market psychology`
    },
    {
      id: 2,
      title: "Cryptocurrency: The Future of Digital Finance",
      description: "Learn about cryptocurrency, blockchain technology, and their impact on the financial world.",
      category: "Crypto",
      date: "2025-02-06",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1469&auto=format&fit=crop",
      author: "Sarah Johnson",
      readTime: "7 min read",
      content: `Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Bitcoin, created in 2009, was the first cryptocurrency and remains the most well-known. Since then, thousands of alternative cryptocurrencies have been created.

Key features of cryptocurrency:
• Decentralization: No central authority controls the currency
• Blockchain Technology: A distributed ledger that records all transactions
• Security: Advanced cryptography protects transactions
• Accessibility: Available to anyone with internet access
• Transparency: All transactions are public and verifiable

Important aspects to understand:
1. Digital wallets and private keys
2. Mining and transaction verification
3. Different types of cryptocurrencies
4. Market volatility and risk factors
5. Regulatory environment and future outlook

Cryptocurrency represents a revolutionary approach to finance, offering potential benefits like:
• Fast, low-cost international transfers
• Financial inclusion for the unbanked
• Protection against inflation
• Innovation in financial services`
    },
    {
      id: 3,
      title: "Gold Investment: A Time-Tested Safe Haven",
      description: "Explore why gold remains a valuable investment option in modern portfolios.",
      category: "Commodities",
      date: "2025-02-05",
      imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1470&auto=format&fit=crop",
      author: "Mike Chen",
      readTime: "4 min read",
      content: `Gold has been a valuable asset for thousands of years, serving as a store of value and hedge against economic uncertainty. In modern investment portfolios, gold continues to play a crucial role.

Why invest in gold:
• Hedge Against Inflation: Gold often maintains its value when fiat currencies depreciate
• Portfolio Diversification: Low correlation with other asset classes
• Safe Haven: Tends to perform well during market turbulence
• Universal Value: Recognized and traded globally
• Limited Supply: Cannot be printed like fiat currency

Ways to invest in gold:
1. Physical gold (bars and coins)
2. Gold ETFs and mutual funds
3. Gold mining stocks
4. Gold futures and options
5. Gold certificates

Historical performance shows that gold:
• Preserves wealth during economic crises
• Provides protection against currency devaluation
• Offers long-term value appreciation
• Acts as a strategic portfolio component`
    }
  ]
};

interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  author: string;
  readTime: string;
  content: string;
}

export function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const { news } = newsData;

  return (
    <>
      <section className="relative bg-gray-50 py-16 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 4px 4px, rgba(0,0,0,0.4) 2px, transparent 0)`,
          backgroundSize: "32px 32px",
          opacity: 0.2,
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Market News & Analysis
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest market insights, trading strategies, and financial news
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
                <div className="relative h-48">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm text-white">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.author}</span>
                    <button
                      onClick={() => setSelectedNews(item)}
                      className="text-secondary hover:text-secondary/80 flex items-center gap-1 text-sm font-medium"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedNews && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={selectedNews.imageUrl}
                alt={selectedNews.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
                aria-label="Close news article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto flex-grow">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedNews.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedNews.readTime}</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                {selectedNews.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                By {selectedNews.author} | Category: {selectedNews.category}
              </p>
              <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 whitespace-pre-wrap">
                {selectedNews.content}
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
