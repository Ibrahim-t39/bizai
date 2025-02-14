"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Zap, Brain, ShieldCheck, Globe, MessageSquare, BarChart } from "lucide-react";

import { ReactNode } from "react";

const GradientText = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 ${className}`}>
    {children}
  </span>
);

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, desc, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-rose-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    <Card className="h-full p-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-violet-500/10 to-rose-500/10">
          <Icon className="w-12 h-12 text-violet-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-violet-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">{desc}</p>
      </div>
    </Card>
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      desc: "Transform data into actionable strategies with our advanced machine learning algorithms and predictive analytics."
    },
    {
      icon: Zap,
      title: "Smart Automation",
      desc: "Streamline operations and boost efficiency with intelligent workflow automation tailored to your business."
    },
    {
      icon: BarChart,
      title: "Growth Analytics",
      desc: "Track performance metrics and uncover opportunities with comprehensive business intelligence tools."
    },
    {
      icon: Globe,
      title: "Global Integration",
      desc: "Seamlessly connect with international markets and expand your business reach worldwide."
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      desc: "Protect your assets with military-grade encryption and advanced threat detection systems."
    },
    {
      icon: MessageSquare,
      title: "Smart Communication",
      desc: "Enable intelligent customer engagement with AI-powered conversation and support tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />
          <motion.div 
            className="text-center px-6 max-w-5xl mx-auto relative z-10"
            style={{ opacity: headerOpacity, y: headerY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GradientText className="text-7xl md:text-8xl font-extrabold mb-8 block leading-tight">
                The Future of Business
              </GradientText>
              <h2 className="text-3xl md:text-4xl mb-12 text-gray-300 font-light">
                Transform Your Enterprise with Intelligent Innovation
              </h2>
              <div className="flex gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Link href="/features">
                    Explore Features <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-violet-400 text-violet-400 hover:bg-violet-400/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
                >
                  <Link href="https://www.youtube.com/watch?v=2BuulvHDBDE">Watch Demo</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <GradientText className="text-5xl md:text-6xl font-bold mb-6 block">
                Break Boundaries
              </GradientText>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Unlock the full potential of your business with our cutting-edge solutions
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-fuchsia-900/10 to-transparent" />
          <div className="container mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GradientText className="text-5xl md:text-6xl font-bold mb-8 block">
                Join the Revolution
              </GradientText>
              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Get early access to our platform and stay ahead of the competition.
                Transform your business today.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105"
              >
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
