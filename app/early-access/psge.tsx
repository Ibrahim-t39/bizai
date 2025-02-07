import { Button } from "../../components/ui/button"

export default function EarlyAccess() {
  return (
    <main className="flex-1">
      <section className="py-20 px-4">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Get Early Access</h1>
          <p className="text-xl mb-8 text-center">
            Be among the first to experience the power of AI for your small business. Sign up for our beta program
            today!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">
                Business Type
              </label>
              <select
                id="business-type"
                name="business-type"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option>Retail</option>
                <option>Service</option>
                <option>Freelance</option>
                <option>Other</option>
              </select>
            </div>
            <Button type="submit" className="w-full">
              Join Beta Program
            </Button>
          </form>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Join Our Beta?</h2>
          <ul className="text-left max-w-md mx-auto space-y-2">
            <li>✓ Be the first to access cutting-edge AI technology</li>
            <li>✓ Shape the future of small business management</li>
            <li>✓ Receive personalized support from our team</li>
            <li>✓ Get exclusive discounts on future pricing</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

