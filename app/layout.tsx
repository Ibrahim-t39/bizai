import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartBizAI - AI Business Assistant",
  description: "Simplify operations, boost sales, and save time with our all-in-one AI solution for small businesses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="py-6 px-4 border-b">
            <div className="container flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                SmartBizAI
              </Link>
              <nav className="space-x-4">
                <Link href="/features" className="text-sm">
                  Features
                </Link>
                <Link href="/pricing" className="text-sm">
                  Pricing
                </Link>
                <Link href="/early-access" className="text-sm">
                  Early Access
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="py-6 px-4 border-t mt-auto">
            <div className="container flex justify-between items-center">
              <p className="text-sm text-gray-500">© 2023 SmartBizAI. All rights reserved.</p>
              <nav className="space-x-4">
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Terms
                </a>
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Privacy
                </a>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}


