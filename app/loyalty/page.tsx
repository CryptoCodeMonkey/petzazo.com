import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export default function LoyaltyPage() {
  return (
    <div>
      <PageHeader title="Loyalty Program" description="Earn rewards for shopping at WHS Pet Shop." />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border mb-8">
            <h2 className="text-2xl font-bold mb-4">{siteConfig.name} Loyalty Program</h2>
            <p className="mb-4">
              Join our loyalty program and earn points with every purchase. Redeem your points for discounts, free
              products, and more!
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                  1
                </div>
                <h4 className="font-bold mb-2">Sign Up</h4>
                <p className="text-sm">Create a free account in-store or online</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                  2
                </div>
                <h4 className="font-bold mb-2">Earn Points</h4>
                <p className="text-sm">Get 1 point for every $1 spent</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                  3
                </div>
                <h4 className="font-bold mb-2">Redeem Rewards</h4>
                <p className="text-sm">Use your points for discounts and free items</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">Membership Tiers</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Tier</th>
                    <th className="border p-3 text-left">Points Required</th>
                    <th className="border p-3 text-left">Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Bronze</td>
                    <td className="border p-3">0-499 points</td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside text-sm">
                        <li>Earn 1 point per $1 spent</li>
                        <li>Birthday reward</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Silver</td>
                    <td className="border p-3">500-999 points</td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside text-sm">
                        <li>Earn 1.25 points per $1 spent</li>
                        <li>Birthday reward</li>
                        <li>Exclusive monthly offers</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Gold</td>
                    <td className="border p-3">1,000+ points</td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside text-sm">
                        <li>Earn 1.5 points per $1 spent</li>
                        <li>Birthday reward</li>
                        <li>Exclusive monthly offers</li>
                        <li>Free shipping on online orders</li>
                        <li>Early access to new products</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-6">
              <Button className="bg-purple-600 hover:bg-purple-700">Join the Loyalty Program</Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-4">Already a Member?</h2>
            <p className="mb-4">Sign in to check your points balance and available rewards.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address" className="px-4 py-2 border rounded-md" />
              <input type="password" placeholder="Password" className="px-4 py-2 border rounded-md" />
            </div>
            <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

