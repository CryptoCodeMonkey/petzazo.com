import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AboutUs } from "@/components/about-us"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name} and our mission to support the ${siteConfig.organization}.`,
}

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Us"
        description={`Learn about our mission to support the ${siteConfig.organization} through quality pet products.`}
      />
      <AboutUs />
    </div>
  )
}

