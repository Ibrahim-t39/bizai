import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pricing() {
  return (
    <main className="flex-1">
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Simple Pricing</h1>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard title="Free" price="$0" features={["Basic chatbot", "Landing page", "Inventory tracking"]} />
            <PricingCard
              title="Pro"
              price="$15"
              period="/month"
              features={["Advanced AI chatbot", "Analytics", "Ad suggestions"]}
            />
            <PricingCard
              title="Business"
              price="$50"
              period="/month"
              features={["Full automation", "Premium marketing", "AI-driven insights"]}
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Pricing?</h2>
          <p className="text-xl mb-8">Our team is here to help you choose the best plan for your business.</p>
          <Button asChild size="lg">
            <Link href="/early-access">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function PricingCard({ title, price, period = "", features }: { title: string; price: string; period?: string; features: string[] }) {
  return (
    <div className="p-6 border rounded-lg">
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
      <Button className="w-full">Get Started</Button>
    </div>
  )
}

