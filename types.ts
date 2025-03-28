// Product types
export interface Product {
  id: string
  name: string
  price: number
  salePrice?: number
  sale?: boolean
  image: string
  category: string
  description?: string
  features?: string[]
  specifications?: Record<string, string>
  stock?: number
  sku?: string
  brand?: string
  rating?: number
  reviewCount?: number
  relatedProducts?: string[]
  images?: string[]
}

// User types
export interface User {
  id: string
  name: string
  email: string
  address?: Address
  orders?: Order[]
  wishlist?: string[]
  loyaltyPoints?: number
  loyaltyTier?: "bronze" | "silver" | "gold"
}

export interface Address {
  street: string
  city: string
  state: string
  zip: string
  country: string
  phone?: string
  isDefault?: boolean
  type?: "shipping" | "billing" | "both"
}

// Order types
export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  subtotal: number
  tax: number
  shipping: number
  discount?: number
  createdAt: string
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  trackingNumber?: string
}

export interface OrderItem {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

// Cart types
export interface CartItem {
  productId: string
  name: string
  price: number
  salePrice?: number
  quantity: number
  image: string
  category: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  discount?: number
}

// Review types
export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  title: string
  comment: string
  date: string
  verified: boolean
  helpful?: number
  images?: string[]
}

