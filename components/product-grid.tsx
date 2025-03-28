import { ProductCard } from "@/components/product-card"

interface ProductGridProps {
  products: Array<{
    id: string
    name: string
    price: number
    image: string
    category: string
    sale?: boolean
    salePrice?: number
  }>
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

