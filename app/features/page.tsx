import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 text-white">
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500">
            Our Features
          </h1>
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-400 mb-8">Experience the power of AI for your small business today.</p>
        <Button
          asChild
          size="lg"
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-full text-lg transition-all duration-300 hover:scale-105"
        >
          <a href="/early-access">Get Early Access</a>
        </Button>
      </section>
    </main>
  );
}

/* Features Data */
const features: FeatureCardProps[] = [
  {
    title: "AI Chatbot",
    description: "24/7 virtual receptionist for customer inquiries and order tracking. Trained on your business FAQs for personalized assistance.",
    link: "https://aimeechallengerobot.streamlit.app/",
  },
  {
    title: "Inventory & Sales Management",
    description: "Mobile-friendly dashboard with low-code integration. Connect with Google Sheets, Excel, or POS systems for seamless tracking.",
    link: "https://inventory.zoho.com/app/878250984#/home/inventory-dashboard",
  },
  {
    title: "Financial Assistant",
    description: "Get spending insights, budget alerts, and simple tax reports. Integrates with popular payment platforms for comprehensive financial management.",
    link: "https://next.waveapps.com/66431973-a6dd-4a1d-a80b-ecaba18b5a56/transactions",
  },
  {
    title: "Marketing Assistant",
    description: "AI-powered content generation for social media, ad copy, and promotional emails. Suggests cost-effective ad placement strategies.",
    link: "https://replyguy.com/",
  },
  {
    title: "DIY Website Builder",
    description: "Create a professional business landing page with our one-click setup and pre-made templates. Easy integration with e-commerce platforms.",
    link: "https://ecom-always-fried-princess.wpcomstaging.com/wp-admin/admin.php?page=wc-admin&path=%2Fcustomize-store",
  },
];

/* Feature Card Component */
interface FeatureCardProps {
  title: string;
  description: string;
  link?: string;
}

function FeatureCard({ title, description, link }: FeatureCardProps) {
  return (
    <div className="relative group p-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border border-gray-800 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Gradient Overlay (Now Clickable) */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
