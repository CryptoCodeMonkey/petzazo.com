import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const catCategories = [
  { name: "All Cat Products", href: "/cat" },
  { name: "Food & Treats", href: "/cat/food-treats" },
  { name: "Toys", href: "/cat/toys", active: true },
  { name: "Beds & Furniture", href: "/cat/beds-furniture" },
  { name: "Litter & Accessories", href: "/cat/litter-accessories" },
  { name: "Grooming", href: "/cat/grooming" },
]

const catToyProducts = [
  {
    id: "ct1",
    name: "Interactive Feather Wand",
    price: 9.99,
    salePrice: 7.99,
    sale: true,
    image: "/product-1.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct2",
    name: "Catnip Mouse Toy Set",
    price: 12.99,
    image: "/product-2.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct3",
    name: "Laser Pointer Toy",
    price: 14.99,
    image: "/product-3.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct4",
    name: "Interactive Treat Puzzle",
    price: 19.99,
    image: "/product-4.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct5",
    name: "Crinkle Ball Toys",
    price: 6.99,
    image: "/product-1.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct6",
    name: "Electronic Moving Toy",
    price: 24.99,
    salePrice: 19.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct7",
    name: "Cat Tunnel Toy",
    price: 18.99,
    image: "/product-3.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct8",
    name: "Catnip Kicker Toy",
    price: 8.99,
    image: "/product-4.jpg",
    category: "Cat Toys",
  },
  {
    id: "ct9",
    name: "Scratching Toy with Ball",
    price: 15.99,
    image: "/product-1.jpg",
    category: "Cat Toys",
  },
]

export default function CatToysPage() {
  return (
    <div>
      <PageHeader
        title="Cat Toys"
        description="Interactive and engaging toys to keep your feline friend entertained."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={catCategories} title="Cat Categories" />

            {/* Filter Options */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mt-6">
              <h2 className="font-bold text-lg mb-4">Filter By</h2>

              {/* Toy Type Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Toy Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Interactive Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Catnip Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Feather Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Electronic Toys</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Puzzle Toys</span>
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
                    <span>Plastic</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Fabric</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Sisal</span>
                  </label>
                </div>
              </div>

              {/* Features Filter */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Features</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>With Catnip</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Battery Operated</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-600 mr-2" />
                    <span>Noise Making</span>
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
              <h2 className="text-2xl font-bold">Cat Toys</h2>
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
                  <h3 className="text-xl font-bold text-purple-800">Keep Your Cat Active & Engaged</h3>
                  <p className="text-purple-700 mt-2">
                    Cats need mental and physical stimulation to stay happy and healthy. Our selection of toys helps
                    satisfy your cat's natural hunting instincts and provides hours of entertainment.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src="/cat-toys-banner.jpg"
                    alt="Cat playing with toys"
                    className="rounded-lg max-h-32 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catToyProducts.map((product) => (
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

