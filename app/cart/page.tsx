import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus } from "lucide-react"

export default function CartPage() {
  return (
    <div>
      <PageHeader title="Shopping Cart" description="Review and update your items before checkout." />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold">Cart Items (3)</h2>
                </div>

                <div className="divide-y">
                  {/* Cart Item 1 */}
                  <div className="p-6 flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-24 h-24 relative flex-shrink-0">
                      <Image src="/product-1.jpg" alt="Premium Dog Food" fill className="object-cover rounded-md" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-medium">Premium Dog Food - Chicken & Rice</h3>
                          <p className="text-sm text-gray-500">30lb bag</p>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <p className="font-bold">$49.99</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md">
                          <button className="px-2 py-1 text-gray-600">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-1 border-x">1</span>
                          <button className="px-2 py-1 text-gray-600">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Cart Item 2 */}
                  <div className="p-6 flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-24 h-24 relative flex-shrink-0">
                      <Image src="/product-2.jpg" alt="Durable Chew Toy" fill className="object-cover rounded-md" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-medium">Durable Chew Toy</h3>
                          <p className="text-sm text-gray-500">Medium size</p>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <p className="font-bold">$11.99</p>
                          <p className="text-sm text-gray-500 line-through">$14.99</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md">
                          <button className="px-2 py-1 text-gray-600">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-1 border-x">2</span>
                          <button className="px-2 py-1 text-gray-600">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Cart Item 3 */}
                  <div className="p-6 flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-24 h-24 relative flex-shrink-0">
                      <Image
                        src="/product-3.jpg"
                        alt="Reflective Dog Harness"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-medium">Reflective Dog Harness</h3>
                          <p className="text-sm text-gray-500">Large, Blue</p>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <p className="font-bold">$29.99</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md">
                          <button className="px-2 py-1 text-gray-600">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-1 border-x">1</span>
                          <button className="px-2 py-1 text-gray-600">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t bg-gray-50">
                  <div className="flex justify-between">
                    <Link href="/" className="text-purple-600 font-medium hover:underline">
                      Continue Shopping
                    </Link>
                    <Button variant="outline">Update Cart</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold">Order Summary</h2>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">$103.96</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Estimated Total</span>
                      <span>$103.96</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-4">Proceed to Checkout</Button>

                  <div className="mt-6">
                    <h3 className="font-bold mb-2">Promo Code</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Enter code" className="flex-1" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border overflow-hidden mt-6 p-6">
                <h3 className="font-bold mb-4">We Accept</h3>
                <div className="flex gap-2">
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="sr-only">Visa</span>
                    Visa
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="sr-only">Mastercard</span>
                    MC
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="sr-only">American Express</span>
                    Amex
                  </div>
                  <div className="bg-gray-100 p-2 rounded">
                    <span className="sr-only">PayPal</span>
                    PayPal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

