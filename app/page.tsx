import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">AI-Powered Business Assistant for Small Businesses</h1>
            <p className="text-xl mb-8">
              Simplify operations, boost sales, and save time with our all-in-one AI solution.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/features">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose SmartBizAI?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
                <p>Automate routine tasks and focus on growing your business</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
                <p>All-in-one solution at a fraction of the cost of multiple tools</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                <p>Leverage cutting-edge AI for smarter business decisions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Business?</h2>
            <p className="text-xl mb-8">
              Join our beta program and be among the first to experience the power of AI for your small business.
            </p>
            <Button asChild size="lg">
              <Link href="/early-access">Get Early Access</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

