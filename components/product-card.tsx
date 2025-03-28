import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  sale?: boolean
  salePrice?: number
}

export function ProductCard({ id, name, price, image, category, sale, salePrice }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Link href={`/products/${id}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>
        {sale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm text-gray-500 uppercase">{category}</h3>
        <h2 className="mt-1 font-medium text-gray-900">{name}</h2>
        <div className="mt-1 flex items-center gap-2">
          {sale ? (
            <>
              <span className="text-lg font-bold text-red-500">${salePrice?.toFixed(2)}</span>
              <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          )}
        </div>
        <div className="mt-4">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

