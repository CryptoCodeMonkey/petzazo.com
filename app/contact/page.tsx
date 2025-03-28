import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/config"
import { MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}. We're here to help with all your pet supply needs.`,
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Our Location</h3>
            <address className="not-italic">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </address>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone & Email</h3>
            <p className="mb-1">{siteConfig.address.phone}</p>
            <p>{siteConfig.address.email}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Store Hours</h3>
            <p className="mb-1">Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p className="mb-1">Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          <ContactForm />
        </div>

        <div className="rounded-lg overflow-hidden h-96 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.1083993515483!2d-87.97234492392788!3d43.04878197113813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805199f0de548e7%3A0x4c19c6b8d2c4e1a7!2s4500%20W%20Wisconsin%20Ave%2C%20Milwaukee%2C%20WI%2053208!5e0!3m2!1sen!2sus!4v1711653423185!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

