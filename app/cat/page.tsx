import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const catCategories = [
  { name: "All Cat Products", href: "/cat", active: true },
  { name: "Food & Treats", href: "/cat/food-treats" },
  { name: "Toys", href: "/cat/toys" },
  { name: "Beds & Furniture", href: "/cat/beds-furniture" },
  { name: "Litter & Accessories", href: "/cat/litter-accessories" },
  { name: "Grooming", href: "/cat/grooming" },
]

const featuredCatProducts = [
  {
    id: "1",
    name: "Premium Cat Food - Salmon",
    price: 39.99,
    image: "/product-1.jpg",
    category: "Cat Food",
  },
  {
    id: "2",
    name: "Interactive Feather Toy",
    price: 9.99,
    salePrice: 7.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Cat Toys",
  },
  {
    id: "3",
    name: "Cozy Cat Bed",
    price: 49.99,
    image: "/product-3.jpg",
    category: "Cat Beds",
  },
  {
    id: "4",
    name: "Self-Cleaning Litter Box",
    price: 129.99,
    image: "/product-4.jpg",
    category: "Cat Litter",
  },
  {
    id: "5",
    name: "Natural Cat Treats",
    price: 8.99,
    image: "/product-1.jpg",
    category: "Cat Treats",
  },
  {
    id: "6",
    name: "Cat Scratching Post",
    price: 59.99,
    salePrice: 49.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Cat Furniture",
  },
  {
    id: "7",
    name: "Cat Grooming Brush",
    price: 14.99,
    image: "/product-3.jpg",
    category: "Cat Grooming",
  },
  {
    id: "8",
    name: "Cat Collar with Bell",
    price: 12.99,
    image: "/product-4.jpg",
    category: "Cat Accessories",
  },
]

export default function CatPage() {
  return (
    <div>
      <PageHeader title="Cat Products" description="Everything your feline friend needs for a happy, healthy life." />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={catCategories} title="Cat Categories" />
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Cat Products</h2>
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
              {featuredCatProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

