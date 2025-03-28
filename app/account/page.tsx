import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AccountPage() {
  return (
    <div>
      <PageHeader title="My Account" description="Manage your account details, orders, and preferences." />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
              <div className="grid gap-4 mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Phone" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Change Password</h3>
              <div className="grid gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" placeholder="Current Password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" placeholder="New Password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm New Password" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Order History</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Order #</th>
                      <th className="border p-3 text-left">Date</th>
                      <th className="border p-3 text-left">Status</th>
                      <th className="border p-3 text-left">Total</th>
                      <th className="border p-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3">#12345</td>
                      <td className="border p-3">Mar 28, 2023</td>
                      <td className="border p-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Delivered
                        </span>
                      </td>
                      <td className="border p-3">$124.99</td>
                      <td className="border p-3">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3">#12344</td>
                      <td className="border p-3">Feb 15, 2023</td>
                      <td className="border p-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Delivered
                        </span>
                      </td>
                      <td className="border p-3">$78.50</td>
                      <td className="border p-3">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="addresses" className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                <Button className="bg-purple-600 hover:bg-purple-700">Add New Address</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4 relative">
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Delete
                    </Button>
                  </div>
                  <h3 className="font-bold mb-2">Home</h3>
                  <p className="text-gray-700">
                    John Doe
                    <br />
                    123 Main Street
                    <br />
                    Apt 4B
                    <br />
                    Milwaukee, WI 53208
                    <br />
                    United States
                    <br />
                    (414) 555-1234
                  </p>
                  <div className="mt-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      Default Shipping
                    </span>
                  </div>
                </div>

                <div className="border rounded-lg p-4 relative">
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Delete
                    </Button>
                  </div>
                  <h3 className="font-bold mb-2">Work</h3>
                  <p className="text-gray-700">
                    John Doe
                    <br />
                    456 Office Plaza
                    <br />
                    Suite 200
                    <br />
                    Milwaukee, WI 53202
                    <br />
                    United States
                    <br />
                    (414) 555-5678
                  </p>
                  <div className="mt-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      Default Billing
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wishlist" className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img src="/product-1.jpg" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Premium Dog Food - Chicken & Rice</h3>
                    <p className="text-lg font-bold mt-1">$49.99</p>
                    <div className="flex gap-2 mt-4">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Add to Cart</Button>
                      <Button variant="outline" size="icon">
                        <span className="sr-only">Remove</span>
                        &times;
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img src="/product-2.jpg" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Orthopedic Dog Bed</h3>
                    <p className="text-lg font-bold mt-1">$79.99</p>
                    <div className="flex gap-2 mt-4">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Add to Cart</Button>
                      <Button variant="outline" size="icon">
                        <span className="sr-only">Remove</span>
                        &times;
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

