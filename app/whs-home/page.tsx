import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export default function WHSHomePage() {
  return (
    <div>
      <PageHeader
        title={siteConfig.organization}
        description="Building a community where people value animals and treat them with respect and kindness."
      />

      <div className="container mx-auto px-4 py-8">
        {/* About WHS Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About {siteConfig.organization}</h2>
              <p className="mb-4">
                The {siteConfig.organization} ({siteConfig.organizationShort}) is the oldest and largest shelter in
                Wisconsin. We are a private nonprofit organization and receive no general government funding and are not
                part of any national umbrella organization.
              </p>
              <p className="mb-4">
                {siteConfig.organizationShort} operates shelters in Milwaukee, Ozaukee, Racine, Door, and Brown
                Counties, as well as a spay/neuter clinic in West Allis. We annually serve 40,000 animals and the people
                who love them.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link href="/whs-home/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/whs-building.jpg" alt="Wisconsin Humane Society Building" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-3">Adoption</h3>
              <p className="mb-4">
                Find your new best friend! We have dogs, cats, and small animals available for adoption.
              </p>
              <Link href="/whs-home/adoption" className="text-purple-600 font-medium hover:underline">
                View Adoptable Animals →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-3">Donate</h3>
              <p className="mb-4">Your support helps us provide care for thousands of animals each year.</p>
              <Link href="/whs-home/donate" className="text-purple-600 font-medium hover:underline">
                Make a Donation →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="mb-4">Join our team of dedicated volunteers who help animals in need.</p>
              <Link href="/whs-home/volunteer" className="text-purple-600 font-medium hover:underline">
                Become a Volunteer →
              </Link>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex gap-4">
                <div className="bg-purple-100 text-purple-800 font-bold text-center p-3 rounded-lg min-w-16">
                  <div className="text-sm">APR</div>
                  <div className="text-2xl">15</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pet Adoption Day</h3>
                  <p className="text-gray-600 mb-2">10:00 AM - 4:00 PM</p>
                  <p>Join us for a special adoption event with reduced adoption fees.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex gap-4">
                <div className="bg-purple-100 text-purple-800 font-bold text-center p-3 rounded-lg min-w-16">
                  <div className="text-sm">MAY</div>
                  <div className="text-2xl">20</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Paws & Claws Gala</h3>
                  <p className="text-gray-600 mb-2">6:00 PM - 10:00 PM</p>
                  <p>Annual fundraising gala to support the Wisconsin Humane Society.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

