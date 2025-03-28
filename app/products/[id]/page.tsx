import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProductDetail } from "@/components/product-detail"
import { getProductById, getRelatedProducts, getProductReviews } from "@/lib/data"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | PetPals Shop`,
    description: product.description || `Buy ${product.name} at PetPals Shop`,
    openGraph: {
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(params.id)
  const reviews = getProductReviews(params.id)

  return <ProductDetail product={product} relatedProducts={relatedProducts} reviews={reviews} />
}

