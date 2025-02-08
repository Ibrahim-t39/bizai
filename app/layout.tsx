import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SmartBizAI - Intelligent Business Assistant",
  description: "Transform your business operations with AI-powered automation, insights, and growth strategies.",
  keywords: "AI, business automation, digital transformation, small business, enterprise solutions",
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
  >
    {children}
    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
  </Link>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-slate-950 font-sans antialiased",
        fontSans.variable
      )}>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link 
                  href="/" 
                  className="relative group"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      SmartBizAI
                    </span>
                  </div>
                  <div className="absolute inset-x-0 h-1 -bottom-4 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                  <NavLink href="/features">Features</NavLink>
                  <NavLink href="/pricing">Pricing</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </nav>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    className="hidden md:inline-flex text-gray-300 hover:text-white"
                  >
                    Sign In
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-grow pt-16">
            {children}
          </main>

          <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <span className="text-xl font-bold text-white">SmartBizAI</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Transforming businesses with intelligent AI solutions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-4">Product</h3>
                  <ul className="space-y-2">
                    {['Features', 'Pricing', 'Enterprise', 'Case Studies'].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-4">Company</h3>
                  <ul className="space-y-2">
                    {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-4">Legal</h3>
                  <ul className="space-y-2">
                    {['Terms', 'Privacy', 'Security', 'Compliance'].map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-400 mb-4 md:mb-0">
                  © {new Date().getFullYear()} SmartBizAI. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                    <Link
                      key={social}
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {social}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}