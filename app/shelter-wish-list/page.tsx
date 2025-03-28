import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

const shelterCategories = [
  { name: "All Wish List Items", href: "/shelter-wish-list", active: true },
  { name: "Dog Items", href: "/shelter-wish-list/dog-items" },
  { name: "Cat Items", href: "/shelter-wish-list/cat-items" },
  { name: "Small Animal Items", href: "/shelter-wish-list/small-animal-items" },
]

const wishListItems = [
  {
    id: "1",
    name: "Dog Food - Large Bags",
    price: 49.99,
    image: "/product-1.jpg",
    category: "Dog Items",
  },
  {
    id: "2",
    name: "Cat Litter",
    price: 19.99,
    image: "/product-2.jpg",
    category: "Cat Items",
  },
  {
    id: "3",
    name: "Durable Dog Toys",
    price: 14.99,
    image: "/product-3.jpg",
    category: "Dog Items",
  },
  {
    id: "4",
    name: "Small Animal Bedding",
    price: 12.99,
    image: "/product-4.jpg",
    category: "Small Animal Items",
  },
  {
    id: "5",
    name: "Cat Scratchers",
    price: 29.99,
    image: "/product-1.jpg",
    category: "Cat Items",
  },
  {
    id: "6",
    name: "Puppy Pads",
    price: 24.99,
    image: "/product-2.jpg",
    category: "Dog Items",
  },
]

export default function ShelterWishListPage() {
  return (
    <div>
      <PageHeader
        title="Shelter Wish List"
        description="Help our shelter animals by purchasing items they need most."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-purple-100 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-purple-800 mb-2">About the Shelter Wish List</h2>
          <p className="text-purple-700 mb-4">
            Items purchased from our Shelter Wish List go directly to animals in need at the {siteConfig.organization}.
            Your generosity helps us provide essential care for homeless animals awaiting their forever homes.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Learn More About Donating</Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={shelterCategories} title="Wish List Categories" />
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Wish List Items</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Most Needed</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishListItems.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

