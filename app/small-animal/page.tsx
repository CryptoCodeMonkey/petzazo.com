import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const smallAnimalCategories = [
  { name: "All Small Animal Products", href: "/small-animal", active: true },
  { name: "Food & Treats", href: "/small-animal/food-treats" },
  { name: "Cages & Habitats", href: "/small-animal/cages-habitats" },
  { name: "Bedding", href: "/small-animal/bedding" },
  { name: "Toys", href: "/small-animal/toys" },
]

const featuredSmallAnimalProducts = [
  {
    id: "1",
    name: "Premium Rabbit Food",
    price: 19.99,
    image: "/product-1.jpg",
    category: "Small Animal Food",
  },
  {
    id: "2",
    name: "Hamster Cage Deluxe",
    price: 79.99,
    salePrice: 69.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Small Animal Habitats",
  },
  {
    id: "3",
    name: "Natural Paper Bedding",
    price: 14.99,
    image: "/product-3.jpg",
    category: "Small Animal Bedding",
  },
  {
    id: "4",
    name: "Guinea Pig Chew Toys",
    price: 12.99,
    image: "/product-4.jpg",
    category: "Small Animal Toys",
  },
  {
    id: "5",
    name: "Gerbil Treat Mix",
    price: 8.99,
    image: "/product-1.jpg",
    category: "Small Animal Treats",
  },
  {
    id: "6",
    name: "Exercise Wheel",
    price: 24.99,
    salePrice: 19.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Small Animal Accessories",
  },
]

export default function SmallAnimalPage() {
  return (
    <div>
      <PageHeader
        title="Small Animal Products"
        description="Everything your small pets need for a happy, healthy life."
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={smallAnimalCategories} title="Small Animal Categories" />
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Small Animal Products</h2>
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
              {featuredSmallAnimalProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

