interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-purple-600 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {description && <p className="mt-2 md:mt-4 max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  )
}

