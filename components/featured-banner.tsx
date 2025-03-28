interface FeaturedBannerProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function FeaturedBanner({ title, description, imageSrc, imageAlt }: FeaturedBannerProps) {
  return (
    <div className="bg-purple-100 p-4 rounded-lg mb-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-4 md:mb-0 md:pr-6">
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <p className="text-purple-700 mt-2">{description}</p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="rounded-lg max-h-32 object-cover" />
        </div>
      </div>
    </div>
  )
}

