import { Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Review } from "@/lib/types"

interface ProductReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export function ProductReviews({ reviews, averageRating, totalReviews }: ProductReviewsProps) {
  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0] // 5 stars to 1 star

  reviews.forEach((review) => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCounts[5 - review.rating] += 1
    }
  })

  const ratingPercentages = ratingCounts.map((count) => (totalReviews > 0 ? (count / totalReviews) * 100 : 0))

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Rating Summary */}
        <div className="md:col-span-1">
          <div className="text-center md:text-left">
            <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center md:justify-start text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(averageRating) ? "fill-current" : i === Math.floor(averageRating) && averageRating % 1 >= 0.5 ? "fill-current text-yellow-400 stroke-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500">{totalReviews} reviews</div>
          </div>

          <div className="mt-6 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{rating} stars</div>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${ratingPercentages[5 - rating]}%` }}
                  ></div>
                </div>
                <div className="w-10 text-sm text-gray-600 text-right">{ratingCounts[5 - rating]}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Write a Review</Button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="md:col-span-2">
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-gray-300"}`} />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <h4 className="font-bold mb-1">{review.title}</h4>
                  <p className="text-gray-700 mb-3">{review.comment}</p>

                  {review.images && review.images.length > 0 && (
                    <div className="flex space-x-2 mb-3">
                      {review.images.map((image, index) => (
                        <div key={index} className="relative h-16 w-16 rounded overflow-hidden">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Review image ${index + 1}`}
                            className="object-cover h-full w-full"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      By <span className="font-medium">{review.userName}</span>
                      {review.verified && (
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful || 0})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No reviews yet</p>
              <Button className="bg-purple-600 hover:bg-purple-700">Be the first to review</Button>
            </div>
          )}

          {reviews.length > 0 && (
            <div className="mt-6 text-center">
              <Button variant="outline">Load More Reviews</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

