import { CategoryPageLayout } from "@/components/category-page-layout"
import { FilterSection } from "@/components/filter-section"
import { FeaturedBanner } from "@/components/featured-banner"
import { ProductGrid } from "@/components/product-grid"

const dogCategories = [
  { name: "All Dog Products", href: "/dog" },
  { name: "Food & Treats", href: "/dog/food-treats", active: true },
  { name: "Toys", href: "/dog/toys" },
  { name: "Beds & Furniture", href: "/dog/beds-furniture" },
  { name: "Collars & Leashes", href: "/dog/collars-leashes" },
  { name: "Clothing & Accessories", href: "/dog/clothing-accessories" },
]

const filterGroups = [
  {
    title: "Brand",
    options: [
      { label: "Royal Canin", value: "royal-canin" },
      { label: "Blue Buffalo", value: "blue-buffalo" },
      { label: "Hill's Science Diet", value: "hills-science-diet" },
      { label: "Purina Pro Plan", value: "purina-pro-plan" },
      { label: "Wellness", value: "wellness" },
    ],
  },
  {
    title: "Life Stage",
    options: [
      { label: "Puppy", value: "puppy" },
      { label: "Adult", value: "adult" },
      { label: "Senior", value: "senior" },
    ],
  },
  {
    title: "Food Type",
    options: [
      { label: "Dry Food", value: "dry-food" },
      { label: "Wet Food", value: "wet-food" },
      { label: "Treats", value: "treats" },
      { label: "Dental Chews", value: "dental-chews" },
    ],
  },
  {
    title: "Price Range",
    options: [
      { label: "Under $15", value: "under-15" },
      { label: "$15 - $30", value: "15-30" },
      { label: "$30 - $50", value: "30-50" },
      { label: "$50+", value: "over-50" },
    ],
  },
]

const foodTreatsProducts = [
  {
    id: "d1",
    name: "Premium Dry Dog Food - Chicken & Rice",
    price: 49.99,
    image: "/product-1.jpg",
    category: "Dog Food",
  },
  {
    id: "d2",
    name: "Grain-Free Dog Food - Salmon",
    price: 54.99,
    image: "/product-2.jpg",
    category: "Dog Food",
  },
  {
    id: "d3",
    name: "Puppy Formula Dry Food",
    price: 39.99,
    salePrice: 34.99,
    sale: true,
    image: "/product-3.jpg",
    category: "Dog Food",
  },
  {
    id: "d4",
    name: "Senior Dog Formula",
    price: 44.99,
    image: "/product-4.jpg",
    category: "Dog Food",
  },
  {
    id: "d5",
    name: "Natural Beef Jerky Treats",
    price: 12.99,
    image: "/product-1.jpg",
    category: "Dog Treats",
  },
  {
    id: "d6",
    name: "Dental Chew Sticks",
    price: 14.99,
    salePrice: 11.99,
    sale: true,
    image: "/product-2.jpg",
    category: "Dog Treats",
  },
  {
    id: "d7",
    name: "Training Treat Variety Pack",
    price: 16.99,
    image: "/product-3.jpg",
    category: "Dog Treats",
  },
  {
    id: "d8",
    name: "Peanut Butter Dog Biscuits",
    price: 9.99,
    image: "/product-4.jpg",
    category: "Dog Treats",
  },
  {
    id: "d9",
    name: "Wet Food Variety Pack",
    price: 24.99,
    image: "/product-1.jpg",
    category: "Dog Food",
  },
]

export default function DogFoodTreatsPage() {
  return (
    <CategoryPageLayout
      title="Dog Food & Treats"
      description="Premium nutrition and delicious treats for your canine companion."
      categories={dogCategories}
      categoryTitle="Dog Categories"
      filterSection={<FilterSection groups={filterGroups} />}
      bannerSection={
        <FeaturedBanner
          title="Premium Dog Nutrition"
          description="Our selection of high-quality dog food and treats is carefully curated to provide optimal nutrition for your furry friend. We partner with trusted brands that use wholesome ingredients."
          imageSrc="/dog-food-banner.jpg"
          imageAlt="Premium Dog Food"
        />
      }
    >
      <ProductGrid products={foodTreatsProducts} />
    </CategoryPageLayout>
  )
}

