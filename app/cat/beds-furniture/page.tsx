import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const catCategories = [
  { name: "All Cat Products", href: "/cat" },
  { name: "Food & Treats", href: "/cat/food-treats" },
  { name: "Toys", href: "/cat/toys" },
  { name: "Beds & Furniture", href: "/cat/beds-furniture", active: true },
  { name: "Litter & Accessories", href: "/cat/litter-accessories" },
  { name: "Grooming", href: "/cat/grooming" },
]

const catBedsFurnitureProducts = [
  {
    id: "cb1",
    name: "Cozy Cat Bed",
    price: 39.99,
    image: "/product-1.jpg",
    category: "Cat Beds",
  },
  {
    id: "cb2",
    name: "Cat Tree with Scratching Posts",
    price: 89.99,
    image: "/product-2.jpg",
    category: "Cat Furniture",
  },
  {
    id: "cb3",
    name: "Window Perch",
    price: 29.99,
    salePrice: 24.99,
    sale: true,
    image: "/product-3.jpg",
    category: "Cat Furniture",
  },
  {
    id: "cb4",
    name: "Heated Cat Bed",
    price: 49.99,
    image: "/product-4.jpg",
    category: "Cat Beds",
  },
  {
    id: "cb5",
    name: "Cat Condo",
    price: 119.99,
    image: "/product-1.jpg",
    category: "Cat Furniture",
  },
  {
    id: "cb6",
    name: "Cat Hammock",
    price: 24.99,
    salePrice: 19.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Cat Beds",
  },
  {
    id: "cb7",
    name: "Luxury Cat Tower",
    price: 149.99,
    image: "/product-3.jpg",
    category: "Cat Furniture",
  },
  {
    id: "cb8",
    name: "Donut Cat Bed",
    price: 34.99,
    image: "/product-4.jpg",
    category: "Cat Beds",
  },
  {
    id: "cb9",
    name: "Wall-Mounted Cat Shelves",
    price: 59.99,
    image: "/product-1.jpg",
    category: "Cat Furniture",
  },
]

export default function CatBedsFurniturePage() {
  return (
    <div>
      <PageHeader
        title="Cat Beds & Furniture"
        description="Comfortable beds and furniture for your feline friend to rest, play, and climb."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={catCategories} title="Cat Categories" />

            {/* Filter Options */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mt-6">
              <h2 className="font-bold text-lg mb-4">Filter By</h2>

              {/* Furniture Type Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Furniture Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Cat Trees</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Cat Beds</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Window Perches</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Cat Condos</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Wall Shelves</span>
                  </label>
                </div>
              </div>

              {/* Features Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Features</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Scratching Posts</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Heated</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Machine Washable</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>With Toys</span>
                  </label>
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Plush</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Carpet</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Wood</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Sisal</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Under $30</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$30 - $60</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$60 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>$100+</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Cat Beds & Furniture</h2>
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
                  <h3 className="text-xl font-bold text-purple-800">Feline-Friendly Furniture</h3>
                  <p className="text-purple-700 mt-2">
                    Cats love to climb, scratch, and lounge. Our selection of cat furniture provides the perfect spaces
                    for your cat to express natural behaviors while adding style to your home.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src="/cat-furniture-banner.jpg"
                    alt="Cat on cat tree"
                    className="rounded-lg max-h-32 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catBedsFurnitureProducts.map((product) => (
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

