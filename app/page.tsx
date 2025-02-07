"use client"

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap, DollarSign, Brain } from "lucide-react";

const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 ${className}`}>
    {children}
  </span>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-yellow-800 to-orange-900 text-white overflow-hidden">
      <main className="flex-1 relative">
        <section className="h-screen flex items-center justify-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="text-center z-10 px-6 max-w-4xl mx-auto">
            <GradientText className="text-8xl font-extrabold mb-6 drop-shadow-lg">The Future of Business</GradientText>
            <h2 className="text-4xl mb-10 opacity-80 tracking-wide font-light">Reimagine AI-Powered Growth</h2>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-xl"
            >
              <Link href="/features">
                Discover Innovation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </section>

        <section className="py-40 px-6 relative">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollY > 200 ? 1 : 0, y: scrollY > 200 ? 0 : 20 }}
              className="text-6xl font-bold mb-20 text-center"
            >
              <GradientText>Break Boundaries</GradientText>
            </motion.h2>
            <div className="grid gap-16 md:grid-cols-3">
              {[
                { icon: Zap, title: "Hyper Automation", desc: "AI that streamlines every task at lightning speed." },
                { icon: DollarSign, title: "Intelligent Cost Reduction", desc: "Maximize profits while reducing inefficiencies." },
                { icon: Brain, title: "Cognitive AI", desc: "Unlock deep insights for data-driven success." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: scrollY > 300 ? 1 : 0, y: scrollY > 300 ? 0 : 20 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-br from-yellow-700 to-orange-800 p-12 rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-300 transform hover:scale-110 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <item.icon className="w-20 h-20 mb-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                  <h3 className="text-4xl font-semibold mb-6 group-hover:text-orange-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xl">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-40 px-6 relative text-center">
          <motion.h2 className="text-6xl font-bold mb-16">
            <GradientText>Be Part of the Revolution</GradientText>
          </motion.h2>
          <motion.p className="text-3xl mb-16 text-gray-300 max-w-4xl mx-auto">
            Early adopters gain exclusive access to cutting-edge AI solutions. Elevate your business today.
          </motion.p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-110 shadow-xl"
          >
            <Link href="/early-access">Join Now</Link>
          </Button>
        </section>
      </main>
    </div>
  );
}