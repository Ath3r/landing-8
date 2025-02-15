"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  Instagram,
} from "lucide-react";

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
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold text-white hover:text-secondary transition-colors">
                Nexum Capitals Limited
              </span>
            </Link>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <Building2 className="w-6 h-6 mt-1 shrink-0 text-primary group-hover:text-secondary transition-colors" />
                <div className="group-hover:text-secondary transition-colors">
                  <p className="font-medium text-white">Registered Office</p>
                  <p>Ground Floor, The Sotheby Building</p>
                  <p>Rodney Village, Rodney Bay</p>
                  <p>Gros-Islet, Saint Lucia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-6 h-6 shrink-0 text-primary group-hover:text-secondary transition-colors" />
                <a
                  href="mailto:support@nexumcapitals.com"
                  className="group-hover:text-secondary transition-colors"
                >
                  support@nexumcapitals.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-6 h-6 shrink-0 text-primary group-hover:text-secondary transition-colors" />
                <a
                  href="tel:+442012345678"
                  className="group-hover:text-secondary transition-colors"
                >
                  +971 (04) 231 2909
                </a>
              </div>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-primary pb-2">
              Markets
            </h3>
            <ul className="space-y-4">
              {footerLinks.markets.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-primary pb-2">
              Platforms
            </h3>
            <ul className="space-y-4">
              {footerLinks.platforms.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-primary pb-2">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            {/* License Information */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-700">
                  Regulatory Information
                </span>
              </div>
              <p className="text-sm text-gray-500 ml-7">
                Nexum Capitals Limited is registered company in Saint Lucia
                under No. 2025-00012.
              </p>
            </div>

            {/* Risk Statement */}
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 shrink-0 text-primary mt-1" />
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  An investment in derivatives may mean investors may lose an
                  amount even greater than their original investment. Anyone
                  wishing to invest in any of the products mentioned in Nexum
                  Capitals should seek their own financial or professional
                  advice. Trading of securities, forex, stock market,
                  commodities, options and futures may not be suitable for
                  everyone and involves the risk of losing part or all of your
                  money. Trading in the financial markets has large potential
                  rewards, but also large potential risk. You must be aware of
                  the risks and be willing to accept them in order to invest in
                  the markets. Don't invest and trade with money which you can't
                  afford to lose. Forex Trading are not allowed in some
                  countries, before investing your money, make sure whether your
                  country is allowing this or not.
                </p>
                <p className="text-sm text-gray-500">
                  You are strongly advised to obtain independent financial,
                  legal and tax advice before proceeding with any currency or
                  spot metals trade. Nothing in this site should be read or
                  construed as constituting advice on the part of Nexum Capitals
                  Limited or any of its affiliates, directors, officers or
                  employees.
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Restricted Regions:</span> Nexum
                  Capitals Limited does not provide services for
                  citizens/residents of the United States, Cuba, Iraq, Myanmar,
                  North Korea, Sudan. The services of Nexum Capitals Limited are
                  not intended for distribution to, or use by, any person in any
                  country or jurisdiction where such distribution or use would
                  be contrary to local law or regulation.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-center pt-4 border-t border-gray-100 text-gray-400">
              &copy; {new Date().getFullYear()} Nexum Capitals Limited. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
