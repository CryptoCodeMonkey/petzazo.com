import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export default function GiftCardsPage() {
  return (
    <div>
      <PageHeader title="Gift Cards" description="The perfect gift for the animal lover in your life." />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">{siteConfig.name} Gift Cards</h2>
                <p className="mb-4">
                  Give the gift of choice with a WHS Pet Shop gift card. Perfect for birthdays, holidays, or any special
                  occasion for the pet lover in your life.
                </p>
                <p className="mb-4">
                  Gift cards can be used for any products in our store, and all proceeds support the{" "}
                  {siteConfig.organization}'s mission to help animals in need.
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>Available in any amount from $10 to $500</li>
                  <li>Never expires</li>
                  <li>Can be used online or in-store</li>
                  <li>Makes a perfect gift for any occasion</li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/gift-card.jpg" alt="WHS Gift Card" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg border border-purple-100 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Purchase a Gift Card</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Physical Gift Card</h3>
                <p className="mb-4">
                  We'll mail a physical gift card to the recipient or to you. Perfect for giving in person.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Buy Physical Gift Card</Button>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Digital Gift Card</h3>
                <p className="mb-4">
                  Send a digital gift card via email. The recipient will receive it instantly. Perfect for last-minute
                  gifts.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Buy Digital Gift Card</Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-4">Check Gift Card Balance</h2>
            <p className="mb-4">Enter your gift card number below to check the remaining balance.</p>
            <div className="flex gap-2">
              <input type="text" placeholder="Gift Card Number" className="flex-1 px-4 py-2 border rounded-md" />
              <Button className="bg-purple-600 hover:bg-purple-700">Check Balance</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

