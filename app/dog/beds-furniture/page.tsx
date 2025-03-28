import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const dogCategories = [
  { name: "All Dog Products", href: "/dog" },
  { name: "Food & Treats", href: "/dog/food-treats" },
  { name: "Toys", href: "/dog/toys" },
  { name: "Beds & Furniture", href: "/dog/beds-furniture", active: true },
  { name: "Collars & Leashes", href: "/dog/collars-leashes" },
  { name: "Clothing & Accessories", href: "/dog/clothing-accessories" },
]

const bedsFurnitureProducts = [
  {
    id: "db1",
    name: "Orthopedic Dog Bed - Large",
    price: 79.99,
    image: "/product-1.jpg",
    category: "Dog Beds",
  },
  {
    id: "db2",
    name: "Cozy Cave Dog Bed",
    price: 64.99,
    image: "/product-2.jpg",
    category: "Dog Beds",
  },
  {
    id: "db3",
    name: "Elevated Dog Bed",
    price: 49.99,
    salePrice: 39.99,
    sale: true,
    image: "/product-3.jpg",
    category: "Dog Beds",
  },
  {
    id: "db4",
    name: "Memory Foam Dog Mattress",
    price: 89.99,
    image: "/product-4.jpg",
    category: "Dog Beds",
  },
  {
    id: "db5",
    name: "Dog Sofa",
    price: 129.99,
    image: "/product-1.jpg",
    category: "Dog Furniture",
  },
  {
    id: "db6",
    name: "Dog Steps for Bed",
    price: 59.99,
    salePrice: 49.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Dog Furniture",
  },
  {
    id: "db7",
    name: "Cooling Dog Bed",
    price: 54.99,
    image: "/product-3.jpg",
    category: "Dog Beds",
  },
  {
    id: "db8",
    name: "Outdoor Dog Bed",
    price: 69.99,
    image: "/product-4.jpg",
    category: "Dog Beds",
  },
  {
    id: "db9",
    name: "Dog Crate Furniture",
    price: 149.99,
    image: "/product-1.jpg",
    category: "Dog Furniture",
  },
]

export default function DogBedsFurniturePage() {
  return (
    <div>
      <PageHeader
        title="Dog Beds & Furniture"
        description="Comfortable beds and furniture for your canine companion to rest and relax."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={dogCategories} title="Dog Categories" />

            {/* Filter Options */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mt-6">
              <h2 className="font-bold text-lg mb-4">Filter By</h2>

              {/* Bed Type Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Bed Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Orthopedic</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Pillow Beds</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Elevated Beds</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Cave Beds</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Furniture Style</span>
                  </label>
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Size</h3>
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
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Extra Large</span>
                  </label>
                </div>
              </div>

              {/* Features Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Features</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Waterproof</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Machine Washable</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Cooling</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Memory Foam</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$100 - $150</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$150+</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Dog Beds & Furniture</h2>
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
                  <h3 className="text-xl font-bold text-purple-800">Rest & Relaxation</h3>
                  <p className="text-purple-700 mt-2">
                    Dogs sleep 12-14 hours a day. Give your furry friend a comfortable place to rest with our selection
                    of premium beds and furniture designed for canine comfort.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src="/dog-bed-banner.jpg"
                    alt="Dog on comfortable bed"
                    className="rounded-lg max-h-32 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bedsFurnitureProducts.map((product) => (
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

