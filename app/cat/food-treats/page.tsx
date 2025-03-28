import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const catCategories = [
  { name: "All Cat Products", href: "/cat" },
  { name: "Food & Treats", href: "/cat/food-treats", active: true },
  { name: "Toys", href: "/cat/toys" },
  { name: "Beds & Furniture", href: "/cat/beds-furniture" },
  { name: "Litter & Accessories", href: "/cat/litter-accessories" },
  { name: "Grooming", href: "/cat/grooming" },
]

const catFoodTreatsProducts = [
  {
    id: "cf1",
    name: "Premium Dry Cat Food - Salmon",
    price: 39.99,
    image: "/product-1.jpg",
    category: "Cat Food",
  },
  {
    id: "cf2",
    name: "Grain-Free Indoor Cat Formula",
    price: 42.99,
    image: "/product-2.jpg",
    category: "Cat Food",
  },
  {
    id: "cf3",
    name: "Kitten Formula Dry Food",
    price: 34.99,
    salePrice: 29.99,
    sale: true,
    image: "/product-3.jpg",
    category: "Cat Food",
  },
  {
    id: "cf4",
    name: "Senior Cat Formula",
    price: 38.99,
    image: "/product-4.jpg",
    category: "Cat Food",
  },
  {
    id: "cf5",
    name: "Gourmet Wet Food Variety Pack",
    price: 24.99,
    image: "/product-1.jpg",
    category: "Cat Food",
  },
  {
    id: "cf6",
    name: "Freeze-Dried Chicken Treats",
    price: 9.99,
    salePrice: 7.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Cat Treats",
  },
  {
    id: "cf7",
    name: "Dental Health Cat Treats",
    price: 6.99,
    image: "/product-3.jpg",
    category: "Cat Treats",
  },
  {
    id: "cf8",
    name: "Catnip Treats",
    price: 5.99,
    image: "/product-4.jpg",
    category: "Cat Treats",
  },
  {
    id: "cf9",
    name: "Hairball Control Formula",
    price: 36.99,
    image: "/product-1.jpg",
    category: "Cat Food",
  },
]

export default function CatFoodTreatsPage() {
  return (
    <div>
      <PageHeader
        title="Cat Food & Treats"
        description="Premium nutrition and delicious treats for your feline friend."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={catCategories} title="Cat Categories" />

            {/* Filter Options */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mt-6">
              <h2 className="font-bold text-lg mb-4">Filter By</h2>

              {/* Brand Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Brand</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Royal Canin</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Blue Buffalo</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Hill's Science Diet</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Purina Pro Plan</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Wellness</span>
                  </label>
                </div>
              </div>

              {/* Life Stage Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Life Stage</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Kitten</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Adult</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Senior</span>
                  </label>
                </div>
              </div>

              {/* Food Type Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Food Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Dry Food</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Wet Food</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Treats</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Freeze-Dried</span>
                  </label>
                </div>
              </div>

              {/* Special Diet Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Special Diet</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Grain-Free</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Indoor Cat</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Hairball Control</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Weight Management</span>
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
                    <span>$10 - $25</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$25 - $40</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$40+</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Cat Food & Treats</h2>
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
                  <h3 className="text-xl font-bold text-purple-800">Feline Nutrition Matters</h3>
                  <p className="text-purple-700 mt-2">
                    Cats have unique nutritional needs. Our selection of premium cat food and treats is specially
                    formulated to support your cat's health at every life stage.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img src="/cat-food-banner.jpg" alt="Premium Cat Food" className="rounded-lg max-h-32 object-cover" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catFoodTreatsProducts.map((product) => (
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

