import type { ReactNode } from "react"
import { PageHeader } from "@/components/page-header"
import { CategorySidebar } from "@/components/category-sidebar"

interface CategoryPageLayoutProps {
  title: string
  description: string
  categories: {
    name: string
    href: string
    active?: boolean
  }[]
  categoryTitle: string
  filterSection: ReactNode
  bannerSection?: ReactNode
  children: ReactNode
}

export function CategoryPageLayout({
  title,
  description,
  categories,
  categoryTitle,
  filterSection,
  bannerSection,
  children,
}: CategoryPageLayoutProps) {
  return (
    <div>
      <PageHeader title={title} description={description} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <CategorySidebar categories={categories} title={categoryTitle} />
            {filterSection}
          </div>

          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {bannerSection && bannerSection}

            {children}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 border rounded-md bg-purple-600 text-white">1</button>
                <button className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-50">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

