import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { siteConfig } from "@/lib/config"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-orange-500 text-white p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="text-7xl md:text-9xl font-bold leading-none">
                10<span className="text-5xl align-top">%</span> OFF
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">ALL MERCH</h2>
              <h3 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">INCLUDING FOOD AND LITTER</h3>
              <div className="mt-8 text-xl">
                <p>In-store only</p>
                <p>Promo runs until Monday, March 31.</p>
              </div>
              <Button className="mt-8 bg-white text-orange-500 hover:bg-gray-100">Shop Now</Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gray-200 relative h-[300px] md:h-auto">
            <div className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-16 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">SHOP DOGS</h2>
              <p className="text-white mt-2 drop-shadow-lg">Treat Your Canine Companion</p>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700">SHOP NOW</Button>
            </div>
            <Image src="/dog-toys.jpg" alt="Dog with toys" fill className="object-cover" />
          </div>
        </div>

        {/* Slider Controls */}
        <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full">
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full ${i === 0 ? "bg-purple-600" : "bg-gray-300"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/dog" className="group">
              <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
                <Image
                  src="/categories/dog.jpg"
                  alt="Dog Category"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold">Dogs</h3>
                </div>
              </div>
            </Link>
            <Link href="/cat" className="group">
              <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
                <Image
                  src="/categories/cat.jpg"
                  alt="Cat Category"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold">Cats</h3>
                </div>
              </div>
            </Link>
            <Link href="/small-animal" className="group">
              <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
                <Image
                  src="/categories/small-animal.jpg"
                  alt="Small Animal Category"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold">Small Animals</h3>
                </div>
              </div>
            </Link>
            <Link href="/human" className="group">
              <div className="relative h-40 md:h-60 rounded-lg overflow-hidden">
                <Image
                  src="/categories/human.jpg"
                  alt="Human Category"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold">Human</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About {siteConfig.name}</h2>
              <p className="mb-4">
                Welcome to {siteConfig.name}, where every purchase helps support the {siteConfig.organization}. We offer
                a wide selection of high-quality pet supplies for dogs, cats, and small animals.
              </p>
              <p className="mb-6">
                Our mission is to provide pet owners with the best products while supporting animal welfare. All
                proceeds from our store go directly to helping homeless animals find their forever homes.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link href="/whs-home/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/about-image.jpg" alt="Happy pets and people" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "My dog absolutely loves the toys I bought from {siteConfig.name}! The quality is excellent and they've
                lasted much longer than toys from other stores. Plus, I love knowing my purchase helps shelter animals."
              </p>
              <div className="font-medium">- Sarah M.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The premium cat food I purchased has made such a difference in my cat's coat and energy levels. The
                staff was incredibly helpful in recommending the right product for my picky eater."
              </p>
              <div className="font-medium">- Michael T.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I recently adopted a rabbit and needed supplies quickly. The small animal section had everything I
                needed, and the online ordering process was seamless. Fast shipping and great products!"
              </p>
              <div className="font-medium">- Emily R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </main>
  )
}

