"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 text-white">
      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg text-gray-400 text-center mb-12">
            Start with a free trial. Upgrade anytime to unlock powerful AI-driven features.
          </p>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Need Help Choosing a Plan?</h2>
        <p className="text-xl text-gray-400 mb-8">
          Contact our team to find the best plan for your business.
        </p>
        <Button
          asChild
          size="lg"
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-full text-lg transition-all duration-300 hover:scale-105"
        >
          <Link href="/early-access">Contact Us</Link>
        </Button>
      </section>
    </main>
  );
}

/* Pricing Card Component */
function PricingCard({ title, price, period, features, benefits }: PricingPlan) {
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-rose-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      <div className="p-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border border-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex flex-col">
        {/* Title & Price */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
          <p className="text-4xl font-bold text-violet-400 mt-2">
            {price} <span className="text-xl font-medium text-gray-500">{period}</span>
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-300">
              <CheckIcon className="text-green-400 w-5 h-5 mt-1 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Benefits (Collapsible) */}
        <div className="mt-6">
          <button
            onClick={() => setIsBenefitsOpen(!isBenefitsOpen)}
            className="w-full flex justify-between items-center text-violet-400 font-semibold py-2 transition-all"
          >
            <span>View Benefits</span>
            <ChevronDownIcon isOpen={isBenefitsOpen} />
          </button>

          {isBenefitsOpen && (
            <ul className="mt-3 space-y-2 bg-gray-800 p-4 rounded-lg">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <CheckIcon className="text-blue-400 w-5 h-5 mt-1 mr-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <Button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-lg transition-all duration-300 hover:scale-105">
          Get Started
        </Button>
      </div>
    </div>
  );
}

/* Pricing Plans Data */
const pricingPlans: PricingPlan[] = [
  {
    title: "Free Trial (14 Days)",
    price: "Free",
    features: [
      "Core EasyBiz platform features.",
      "Limited AI-powered automation.",
      "Basic website analytics.",
      "Free tier marketing tools integration.",
      "Basic WooCommerce setup.",
      "Limited support.",
    ],
    benefits: [
      "Experience EasyBiz before committing.",
      "Test AI automation for your business.",
      "Explore website building features.",
      "User-friendly and easy to navigate.",
    ],
  },
  {
    title: "Premium Plan",
    price: "$49/month",
    period: "or $499/year (Save $89)",
    features: [
      "All Free Trial features, plus:",
      "Enhanced AI-powered automation.",
      "Advanced analytics & reporting.",
      "Paid-tier marketing tools integration.",
      "Premium WooCommerce themes.",
      "Priority email support.",
      "5 User Accounts.",
    ],
    benefits: [
      "Unlock AI-driven efficiency.",
      "Gain deep insights into traffic & sales.",
      "Automate marketing & customer outreach.",
      "Access premium design tools.",
      "Collaborate with your team efficiently.",
    ],
  },
  {
    title: "Business Pro Plan",
    price: "$99/month",
    period: "or $999/year (Save $199)",
    features: [
      "All Premium features, plus:",
      "Unlimited AI automation.",
      "1-hour website design consultation.",
      "Advanced marketing integrations.",
      "API access for custom solutions.",
      "Dedicated account manager.",
      "10 User Accounts.",
    ],
    benefits: [
      "Maximize automation for efficiency.",
      "Get expert website optimization advice.",
      "Seamlessly integrate your marketing tools.",
      "Expand functionality with API access.",
      "Enjoy priority support with a dedicated manager.",
    ],
  },
];

/* TypeScript Interface */
interface PricingPlan {
  title: string;
  price: string;
  period?: string;
  features: string[];
  benefits: string[];
}

/* Reusable Icons */
function CheckIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
