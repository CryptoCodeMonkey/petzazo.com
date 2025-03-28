import type { Product, Review } from "@/lib/types"

// Sample product data
export const products: Product[] = [
  {
    id: "dog-food-1",
    name: "Premium Dog Food - Chicken & Rice",
    price: 49.99,
    image: "/products/dog-food-1.jpg",
    category: "Dog Food",
    description:
      "High-quality dog food made with real chicken and wholesome rice. Formulated to provide complete and balanced nutrition for adult dogs of all breeds.",
    features: [
      "Made with real chicken as the #1 ingredient",
      "No artificial colors, flavors, or preservatives",
      "Supports healthy digestion with prebiotic fiber",
      "Omega-6 fatty acids for healthy skin and coat",
      "Balanced nutrition for adult dogs",
    ],
    specifications: {
      Weight: "30 lb bag",
      "Life Stage": "Adult",
      "Breed Size": "All Breeds",
      "Special Diet": "High-Protein, No Corn, No Wheat, No Soy",
      Flavor: "Chicken & Rice",
      "Food Form": "Dry Food",
    },
    stock: 25,
    sku: "DF-CR-30LB",
    brand: "NutriPaws",
    rating: 4.7,
    reviewCount: 128,
    relatedProducts: ["dog-food-2", "dog-food-3", "dog-treats-1"],
    images: ["/products/dog-food-1.jpg", "/products/dog-food-1-2.jpg", "/products/dog-food-1-3.jpg"],
  },
  {
    id: "dog-toy-1",
    name: "Durable Chew Toy",
    price: 14.99,
    salePrice: 11.99,
    sale: true,
    image: "/products/dog-toy-1.jpg",
    category: "Dog Toys",
    description:
      "Tough and durable chew toy designed for aggressive chewers. Made from non-toxic, pet-safe materials that can withstand even the most determined dogs.",
    features: [
      "Ultra-durable design for aggressive chewers",
      "Non-toxic, BPA-free material",
      "Textured surface helps clean teeth while chewing",
      "Floats in water for pool or beach play",
      "Dishwasher safe for easy cleaning",
    ],
    specifications: {
      Dimensions: "6 x 3 x 3 inches",
      Weight: "12 oz",
      Material: "Thermoplastic Rubber",
      Color: "Blue/Green",
      "Dog Size": "Medium to Large",
      "Recommended Weight": "20-90 lbs",
    },
    stock: 42,
    sku: "DT-CHEW-BG",
    brand: "ToughPup",
    rating: 4.5,
    reviewCount: 86,
    relatedProducts: ["dog-toy-2", "dog-toy-3", "dog-toy-4"],
    images: ["/products/dog-toy-1.jpg", "/products/dog-toy-1-2.jpg", "/products/dog-toy-1-3.jpg"],
  },
  {
    id: "cat-food-1",
    name: "Premium Cat Food - Salmon",
    price: 39.99,
    image: "/products/cat-food-1.jpg",
    category: "Cat Food",
    description:
      "Premium cat food made with real salmon. Formulated to provide complete and balanced nutrition for adult cats, supporting healthy digestion and a shiny coat.",
    features: [
      "Real salmon is the #1 ingredient",
      "No artificial colors, flavors, or preservatives",
      "Added taurine for heart and eye health",
      "Omega-3 and omega-6 fatty acids for healthy skin and coat",
      "Crunchy kibble helps reduce plaque buildup",
    ],
    specifications: {
      Weight: "15 lb bag",
      "Life Stage": "Adult",
      "Special Diet": "High-Protein, Grain-Free",
      Flavor: "Salmon",
      "Food Form": "Dry Food",
    },
    stock: 18,
    sku: "CF-SAL-15LB",
    brand: "FeliFresh",
    rating: 4.8,
    reviewCount: 94,
    relatedProducts: ["cat-food-2", "cat-treats-1", "cat-food-3"],
    images: ["/products/cat-food-1.jpg", "/products/cat-food-1-2.jpg", "/products/cat-food-1-3.jpg"],
  },
  {
    id: "cat-toy-1",
    name: "Interactive Feather Wand",
    price: 9.99,
    salePrice: 7.99,
    sale: true,
    image: "/products/cat-toy-1.jpg",
    category: "Cat Toys",
    description:
      "Interactive feather wand toy that engages your cat's natural hunting instincts. Features colorful feathers and a bell to attract attention and encourage play.",
    features: [
      "Telescoping wand extends up to 36 inches",
      "Replaceable feather attachment",
      "Includes bell for auditory stimulation",
      "Encourages exercise and mental stimulation",
      "Lightweight and easy to use",
    ],
    specifications: {
      Length: "15-36 inches (adjustable)",
      Material: "Plastic rod with nylon string",
      Attachment: "Natural and synthetic feathers",
      Color: "Assorted",
      Includes: "1 wand, 1 feather attachment",
    },
    stock: 32,
    sku: "CT-WAND-01",
    brand: "PurrPlay",
    rating: 4.6,
    reviewCount: 73,
    relatedProducts: ["cat-toy-2", "cat-toy-3", "cat-toy-4"],
    images: ["/products/cat-toy-1.jpg", "/products/cat-toy-1-2.jpg", "/products/cat-toy-1-3.jpg"],
  },
  {
    id: "small-animal-bedding-1",
    name: "Natural Paper Bedding",
    price: 14.99,
    image: "/products/small-animal-bedding-1.jpg",
    category: "Small Animal Bedding",
    description:
      "Soft, absorbent paper bedding for small animals. Made from 100% recycled paper, it's safe, comfortable, and excellent for odor control.",
    features: [
      "Made from 100% recycled paper",
      "99.9% dust-free for respiratory health",
      "Super absorbent - holds up to 3x its weight in liquid",
      "Excellent odor control for up to 14 days",
      "Biodegradable and compostable",
    ],
    specifications: {
      Volume: "60L (expands to 85L)",
      Weight: "2.5 kg",
      Material: "Recycled paper",
      Color: "Natural white",
      "Suitable for": "Hamsters, gerbils, mice, rats, guinea pigs, rabbits",
    },
    stock: 22,
    sku: "SA-BED-NAT",
    brand: "CritterCare",
    rating: 4.7,
    reviewCount: 58,
    relatedProducts: ["small-animal-bedding-2", "small-animal-food-1", "small-animal-habitat-1"],
    images: [
      "/products/small-animal-bedding-1.jpg",
      "/products/small-animal-bedding-1-2.jpg",
      "/products/small-animal-bedding-1-3.jpg",
    ],
  },
]

// Sample reviews data
export const reviews: Review[] = [
  {
    id: "review-1",
    productId: "dog-food-1",
    userId: "user-1",
    userName: "John D.",
    rating: 5,
    title: "My dog loves this food!",
    comment:
      "I've been feeding my Golden Retriever this food for 6 months now and his coat has never looked better. He gets excited every time I fill his bowl. Highly recommend!",
    date: "2023-11-15",
    verified: true,
    helpful: 12,
  },
  {
    id: "review-2",
    productId: "dog-food-1",
    userId: "user-2",
    userName: "Sarah M.",
    rating: 4,
    title: "Good quality but pricey",
    comment:
      "The quality of this dog food is excellent, and my picky eater actually enjoys it. I'm taking off one star because it's a bit expensive compared to other premium brands, but the ingredients are top-notch.",
    date: "2023-10-22",
    verified: true,
    helpful: 8,
  },
  {
    id: "review-3",
    productId: "dog-food-1",
    userId: "user-3",
    userName: "Michael T.",
    rating: 5,
    title: "Solved our digestive issues",
    comment:
      "Our dog had been having digestive issues with other brands. After switching to this food, his stomach problems disappeared completely. Worth every penny for a healthy, happy dog!",
    date: "2023-12-05",
    verified: true,
    helpful: 15,
  },
  {
    id: "review-4",
    productId: "dog-toy-1",
    userId: "user-4",
    userName: "Emily R.",
    rating: 5,
    title: "Finally a toy that lasts!",
    comment:
      "My pit bull destroys every toy within minutes, but this one has survived for weeks! It's definitely worth the money for aggressive chewers. Will buy again!",
    date: "2023-11-30",
    verified: true,
    helpful: 22,
    images: ["/reviews/dog-toy-review-1.jpg"],
  },
  {
    id: "review-5",
    productId: "dog-toy-1",
    userId: "user-5",
    userName: "David K.",
    rating: 3,
    title: "Good but not indestructible",
    comment:
      "This toy is more durable than most, but my German Shepherd still managed to tear it apart after about 2 weeks. If your dog is an extreme chewer, you might want something even tougher.",
    date: "2023-10-18",
    verified: true,
    helpful: 9,
  },
]

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Get related products
export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId)
  if (!product || !product.relatedProducts) return []

  return product.relatedProducts.map((id) => getProductById(id)).filter((p): p is Product => p !== undefined)
}

// Get product reviews
export function getProductReviews(productId: string): Review[] {
  return reviews.filter((review) => review.productId === productId)
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

// Search products
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description?.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}

