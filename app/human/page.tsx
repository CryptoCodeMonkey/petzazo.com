import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"
import { ProductCard } from "@/components/product-card"

const humanCategories = [
  { name: "All Human Products", href: "/human", active: true },
  { name: "Apparel", href: "/human/apparel" },
  { name: "Accessories", href: "/human/accessories" },
  { name: "Home Goods", href: "/human/home-goods" },
]

const featuredHumanProducts = [
  {
    id: "1",
    name: "WHS Logo T-Shirt",
    price: 24.99,
    image: "/product-1.jpg",
    category: "Human Apparel",
  },
  {
    id: "2",
    name: "Pet Lover Coffee Mug",
    price: 14.99,
    salePrice: 12.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Human Home Goods",
  },
  {
    id: "3",
    name: "Dog Paw Print Tote Bag",
    price: 19.99,
    image: "/product-3.jpg",
    category: "Human Accessories",
  },
  {
    id: "4",
    name: "WHS Hoodie",
    price: 39.99,
    image: "/product-4.jpg",
    category: "Human Apparel",
  },
  {
    id: "5",
    name: "Pet Photo Frame",
    price: 16.99,
    image: "/product-1.jpg",
    category: "Human Home Goods",
  },
  {
    id: "6",
    name: "Animal Rescue Calendar",
    price: 12.99,
    salePrice: 9.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Human Accessories",
  },
]

export default function HumanPage() {
  return (
    <div>
      <PageHeader title="Human Products" description="Show your support for animals with our human merchandise." />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={humanCategories} title="Human Categories" />
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Human Products</h2>
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
              {featuredHumanProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

