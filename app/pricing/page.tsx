"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react"; // Add this import for useState

export default function Pricing() {
  return (
    <main className="flex-1">
      {/* Main Pricing Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">EasyBiz Pricing Tiers</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            We've designed EasyBiz to be accessible and scalable for businesses of all sizes, starting with a risk-free trial.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Free Trial (14 Days)"
              price="Free"
              features={[
                "Access to core EasyBiz platform features.",
                "Limited AI-powered customer service automation (Gemini API - limited requests).",
                "Basic website analytics.",
                "Integration with free tier of marketing tools (Reply Guy API - limited emails/contacts).",
                "Access to free WooCommerce setup and basic theme.",
                "Limited support.",
              ]}
              benefits={[
                "Experience the power of EasyBiz firsthand.",
                "Test the AI-powered automation and see how it can streamline your operations.",
                "Explore the website building tools and create a basic online presence.",
                "Get a feel for the platform's user-friendly interface.",
              ]}
            />
            <PricingCard
              title="Premium Plan"
              price="$49/month or $499/year"
              period="(Save $89)"
              features={[
                "Everything in the Free Trial, PLUS:",
                "Enhanced AI-powered customer service automation (Gemini API - increased requests).",
                "Advanced website analytics and reporting.",
                "Integration with paid tier of marketing tools (Reply Guy API - increased emails/contacts, automation features).",
                "Access to premium WooCommerce themes and plugins (up to $100 value).",
                "Priority email support.",
                "5 User Accounts",
              ]}
              benefits={[
                "Unlock the full potential of EasyBiz's AI capabilities.",
                "Gain deeper insights into your website traffic and customer behavior.",
                "Automate your marketing efforts to reach more customers and boost bookings.",
                "Create a professional and visually appealing website.",
                "Receive faster and more comprehensive support.",
                "Collaborate with your team with multiple user accounts.",
              ]}
            />
            <PricingCard
              title="Business Pro Plan"
              price="$99/month or $999/year"
              period="(Save $199)"
              features={[
                "Everything in the Premium Plan, PLUS:",
                "Unlimited AI-powered customer service automation (Gemini API).",
                "Custom website design and development consultation (1 hour).",
                "Integration with premium marketing automation platform (e.g., Mailchimp, Constant Contact).",
                "API access for custom integrations.",
                "Dedicated account manager.",
                "10 User Accounts",
              ]}
              benefits={[
                "Maximize your efficiency with unlimited AI automation.",
                "Get personalized guidance on optimizing your website for conversions.",
                "Seamlessly integrate with your existing marketing tools.",
                "Extend the functionality of EasyBiz with custom integrations.",
                "Receive personalized support from a dedicated account manager.",
                "Empower your entire team with additional user accounts.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Pricing?</h2>
          <p className="text-xl mb-8">
            Our team is here to help you choose the best plan for your business.
          </p>
          <Button asChild size="lg">
            <Link href="/early-access">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function PricingCard({
  title,
  price,
  period = "",
  features,
  benefits,
}: {
  title: string;
  price: string;
  period?: string;
  features: string[];
  benefits: string[];
}) {
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false); // State for toggling benefits

  return (
    <div className="p-6 border rounded-lg shadow-md transition-shadow hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-4">
        {price}
        <span className="text-xl font-normal text-gray-500">{period}</span>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mb-6">
        <button
          onClick={() => setIsBenefitsOpen(!isBenefitsOpen)}
          className="w-full text-left text-blue-600 font-semibold flex items-center justify-between py-2"
        >
          <span>View Benefits</span>
          <svg
            className={`w-4 h-4 transition-transform ${isBenefitsOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isBenefitsOpen && (
          <ul className="space-y-2 mt-2 pl-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button className="w-full">Get Started</Button>
    </div>
  );
}