import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Features() {
  return (
    <main className="flex-1">
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Features</h1>
          <div className="grid gap-8 md:grid-cols-2">
            <FeatureCard
              title="AI Chatbot"
              description="24/7 virtual receptionist for customer inquiries and order tracking. Trained on your business FAQs for personalized assistance."
              link="https://aimeechallengerobot.streamlit.app/"
            />
            <FeatureCard
              title="Inventory & Sales Management"
              description="Mobile-friendly dashboard with low-code integration. Connect with Google Sheets, Excel, or POS systems for seamless tracking."
              link = "https://inventory.zoho.com/app/878250984#/home/inventory-dashboard"

            />
            <FeatureCard
              title="Financial Assistant"
              description="Get spending insights, budget alerts, and simple tax reports. Integrates with popular payment platforms for comprehensive financial management."
              link = "https://next.waveapps.com/66431973-a6dd-4a1d-a80b-ecaba18b5a56/transactions"
            />
            <FeatureCard
              title="Marketing Assistant"
              description="AI-powered content generation for social media, ad copy, and promotional emails. Suggests cost-effective ad placement strategies."
              link = "https://replyguy.com/"
            />
            <FeatureCard
              title="DIY Website Builder"
              description="Create a professional business landing page with our one-click setup and pre-made templates. Easy integration with e-commerce platforms."
              link = "https://ecom-always-fried-princess.wpcomstaging.com/wp-admin/admin.php?page=wc-admin&path=%2Fcustomize-store"
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Experience the power of AI for your small business today.</p>
          <Button asChild size="lg">
            <Link href="/early-access">Get Early Access</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
  link?: string;
}

function FeatureCard({ title, description, link }: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-xl font-semibold mb-2">
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
        }