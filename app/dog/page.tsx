import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const dogCategories = [
  { name: "All Dog Products", href: "/dog", active: true },
  { name: "Food & Treats", href: "/dog/food-treats" },
  { name: "Toys", href: "/dog/toys" },
  { name: "Beds & Furniture", href: "/dog/beds-furniture" },
  { name: "Collars & Leashes", href: "/dog/collars-leashes" },
  { name: "Clothing & Accessories", href: "/dog/clothing-accessories" },
]

const featuredDogProducts = [
  {
    id: "1",
    name: "Premium Dog Food - Chicken & Rice",
    price: 49.99,
    image: "/product-1.jpg",
    category: "Dog Food",
  },
  {
    id: "2",
    name: "Durable Chew Toy",
    price: 14.99,
    salePrice: 11.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Dog Toys",
  },
  {
    id: "3",
    name: "Orthopedic Dog Bed",
    price: 79.99,
    image: "/product-3.jpg",
    category: "Dog Beds",
  },
  {
    id: "4",
    name: "Reflective Dog Harness",
    price: 29.99,
    image: "/product-4.jpg",
    category: "Dog Accessories",
  },
  {
    id: "5",
    name: "Natural Dog Treats",
    price: 12.99,
    image: "/product-1.jpg",
    category: "Dog Treats",
  },
  {
    id: "6",
    name: "Interactive Puzzle Toy",
    price: 19.99,
    salePrice: 15.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Dog Toys",
  },
  {
    id: "7",
    name: "Adjustable Dog Collar",
    price: 18.99,
    image: "/product-3.jpg",
    category: "Dog Collars",
  },
  {
    id: "8",
    name: "Dog Raincoat",
    price: 34.99,
    image: "/product-4.jpg",
    category: "Dog Clothing",
  },
]

export default function DogPage() {
  return (
    <div>
      <PageHeader
        title="Dog Products"
        description="Everything your canine companion needs for a happy, healthy life."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={dogCategories} title="Dog Categories" />
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Dog Products</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDogProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

