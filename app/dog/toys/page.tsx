import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const dogCategories = [
  { name: "All Dog Products", href: "/dog" },
  { name: "Food & Treats", href: "/dog/food-treats" },
  { name: "Toys", href: "/dog/toys", active: true },
  { name: "Beds & Furniture", href: "/dog/beds-furniture" },
  { name: "Collars & Leashes", href: "/dog/collars-leashes" },
  { name: "Clothing & Accessories", href: "/dog/clothing-accessories" },
]

const dogToyProducts = [
  {
    id: "dt1",
    name: "Durable Chew Toy",
    price: 14.99,
    salePrice: 11.99,
    sale: true,
    image: "/product-1.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt2",
    name: "Interactive Puzzle Toy",
    price: 19.99,
    image: "/product-2.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt3",
    name: "Squeaky Plush Toy Set",
    price: 12.99,
    image: "/product-3.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt4",
    name: "Rope Tug Toy",
    price: 9.99,
    image: "/product-4.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt5",
    name: "Tennis Ball 3-Pack",
    price: 6.99,
    image: "/product-1.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt6",
    name: "Treat Dispensing Ball",
    price: 15.99,
    salePrice: 12.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt7",
    name: "Floating Water Toy",
    price: 11.99,
    image: "/product-3.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt8",
    name: "Tough Rubber Bone",
    price: 13.99,
    image: "/product-4.jpg",
    category: "Dog Toys",
  },
  {
    id: "dt9",
    name: "Frisbee Dog Toy",
    price: 8.99,
    image: "/product-1.jpg",
    category: "Dog Toys",
  },
]

export default function DogToysPage() {
  return (
    <div>
      <PageHeader
        title="Dog Toys"
        description="Fun, durable, and interactive toys to keep your dog entertained and active."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={dogCategories} title="Dog Categories" />

            {/* Filter Options */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mt-6">
              <h2 className="font-bold text-lg mb-4">Filter By</h2>

              {/* Toy Type Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Toy Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Plush Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Chew Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Interactive Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Fetch Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Rope Toys</span>
                  </label>
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Rubber</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Plush</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Rope</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Vinyl</span>
                  </label>
                </div>
              </div>

              {/* Dog Size Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Dog Size</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Small</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Medium</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Large</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Under $10</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$10 - $15</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$15 - $20</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$20+</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Dog Toys</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Featured Banner */}
            <div className="bg-purple-100 p-4 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
                  <h3 className="text-xl font-bold text-purple-800">Playtime is Important!</h3>
                  <p className="text-purple-700 mt-2">
                    Dogs need mental and physical stimulation to stay happy and healthy. Our selection of toys helps
                    keep your dog engaged, active, and entertained.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src="/dog-toys-banner.jpg"
                    alt="Dog playing with toys"
                    className="rounded-lg max-h-32 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dogToyProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 border rounded-md bg-purple-600 text-white">1</button>
                <button className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-50">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

