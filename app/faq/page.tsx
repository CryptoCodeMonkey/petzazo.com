import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: `FAQ | ${siteConfig.name}`,
  description: `Frequently asked questions about ${siteConfig.name} and our products.`,
}

export default function FAQPage() {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products, shipping, returns, and more."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">How do I place an order?</AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  You can place an order through our website by browsing our products, adding items to your cart, and
                  proceeding to checkout. You'll need to create an account or check out as a guest, provide shipping and
                  payment information, and confirm your order.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                What are your shipping options and costs?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  We offer free standard shipping on all orders over $50. For orders under $50, standard shipping costs
                  $5.99. Standard shipping typically takes 3-5 business days. We also offer expedited shipping options
                  at checkout for an additional fee.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">What is your return policy?</AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  We accept returns within 30 days of purchase for most items in new, unused condition with original
                  packaging. Food items, treats, and opened bedding cannot be returned for health and safety reasons. To
                  initiate a return, please contact our customer service team or visit your account page.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">How do I track my order?</AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  Once your order ships, you'll receive a shipping confirmation email with a tracking number. You can
                  also track your order by logging into your account and viewing your order history. If you checked out
                  as a guest, you can use the order tracking link provided in your shipping confirmation email.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">Do you offer price matching?</AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  Yes, we offer price matching for identical products sold by major pet retailers. To request a price
                  match, please contact our customer service team with proof of the competitor's current price. Price
                  matching is not available for clearance items, flash sales, or limited-time offers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                How does the loyalty program work?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  Our loyalty program rewards you for shopping with us. You earn 1 point for every $1 spent, and points
                  can be redeemed for discounts on future purchases. There are three membership tiers (Bronze, Silver,
                  and Gold) with increasing benefits. You can sign up for free online or in-store, and track your points
                  and rewards through your account.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                How do I know which food is right for my pet?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  Choosing the right food depends on your pet's age, size, breed, activity level, and any specific
                  health concerns. We recommend consulting with your veterinarian for personalized recommendations. Our
                  staff is also knowledgeable about our food products and can help guide you to options that might suit
                  your pet's needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                Do you donate to animal shelters?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  Yes! As the official retail partner of the {siteConfig.organization}, all proceeds from our store go
                  directly to supporting animals in need. Your purchases help provide food, shelter, medical care, and
                  other essential services for homeless animals. We also accept donations for the shelter at checkout.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                Can I order online and pick up in-store?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  Yes, we offer free in-store pickup for online orders. Simply select "Store Pickup" at checkout and
                  wait for the email confirmation that your order is ready. Orders are typically ready within 2 hours
                  during business hours. Please bring a valid ID when picking up your order.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white rounded-lg shadow-sm border px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                Do you offer pet adoption services?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                <p>
                  While we don't directly handle adoptions at our store, we work closely with the{" "}
                  {siteConfig.organization} to support their adoption program. We occasionally host adoption events at
                  our location, which are announced on our website and social media. For information about available
                  pets and the adoption process, please visit the {siteConfig.organization}'s website.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-purple-50 p-6 rounded-lg border border-purple-100 text-center">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="mb-4">Our customer service team is here to help!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Contact Us
              </a>
              <a
                href="tel:+14142646257"
                className="inline-flex items-center justify-center px-4 py-2 bg-white border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
              >
                Call {siteConfig.address.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

