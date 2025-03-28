import Image from "next/image"
import { siteConfig } from "@/lib/config"

export function AboutUs() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">About {siteConfig.name}</h1>

          <div className="mb-10">
            <div className="relative h-80 rounded-lg overflow-hidden mb-6">
              <Image src="/about-team.jpg" alt={`${siteConfig.name} Team`} fill className="object-cover" />
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              {siteConfig.name} was founded in 2010 with a simple mission: to provide high-quality pet supplies while
              supporting animal welfare. What started as a small shop has grown into a beloved pet supply store that
              serves thousands of pet owners and their furry companions.
            </p>
            <p className="mb-4">
              As an official retail partner of the {siteConfig.organization}, all proceeds from our store go directly to
              helping homeless animals find their forever homes. Every purchase you make helps provide food, shelter,
              medical care, and love to animals in need.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">At {siteConfig.name}, our mission is twofold:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                To provide pet owners with the highest quality products that promote the health, happiness, and
                well-being of their animal companions.
              </li>
              <li>
                To support the {siteConfig.organization}'s efforts to rescue, rehabilitate, and rehome animals in need
                through our retail operations.
              </li>
            </ul>
            <p>
              We believe that every animal deserves love, care, and respect. Through our business, we strive to create a
              community of pet lovers who share our values and commitment to animal welfare.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <p className="mb-4">
              We carefully select each product in our store to ensure it meets our high standards for quality, safety,
              and value. We prioritize:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nutritious, high-quality pet foods made with wholesome ingredients</li>
              <li>Durable, safe toys that provide mental and physical stimulation</li>
              <li>Comfortable bedding and furniture that gives pets a place to rest and relax</li>
              <li>Practical accessories that make pet care easier and more enjoyable</li>
              <li>Eco-friendly and sustainable products whenever possible</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="mb-4">
              Our staff consists of passionate pet lovers who are knowledgeable about animal care and dedicated to
              providing excellent customer service. Many of our team members are volunteers or former employees of the{" "}
              {siteConfig.organization}, bringing valuable experience and expertise to our store.
            </p>
            <p>
              We're always happy to answer questions, offer product recommendations, and share tips on pet care. Don't
              hesitate to reach out to us for assistance!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
            <p className="mb-4">
              We invite you to visit our store located at {siteConfig.address.street}, {siteConfig.address.city},{" "}
              {siteConfig.address.state} {siteConfig.address.zip}. Our friendly staff is ready to help you find the
              perfect products for your pet.
            </p>
            <p>
              Thank you for supporting {siteConfig.name} and the {siteConfig.organization}. Together, we're making a
              difference in the lives of animals in our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

