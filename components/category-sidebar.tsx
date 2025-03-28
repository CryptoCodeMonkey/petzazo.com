import Link from "next/link"

interface CategorySidebarProps {
  categories: {
    name: string
    href: string
    active?: boolean
  }[]
  title: string
}

export function CategorySidebar({ categories, title }: CategorySidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              href={category.href}
              className={`block px-3 py-2 rounded-md ${
                category.active ? "bg-purple-100 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

