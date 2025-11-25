import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "SJ",
      timeAgo: "2 weeks ago",
      rating: 5,
      text: "Outstanding service from start to finish. The team was professional and delivered exactly what we needed.",
      hasImages: false
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "MC",
      timeAgo: "3 weeks ago",
      rating: 5,
      text: "Exceptional quality and attention to detail. Highly recommend their services to anyone looking for reliable solutions.",
      hasImages: false
    },
    {
      id: 3,
      author: "Emma Wilson",
      avatar: "EW",
      timeAgo: "3 weeks ago",
      rating: 5,
      text: "Great experience working with this company. Very helpful and responsive throughout the entire process.",
      hasImages: true,
      images: 2
    },
    {
      id: 4,
      author: "David Martinez",
      avatar: "DM",
      timeAgo: "3 weeks ago",
      rating: 5,
      text: "What started as a simple inquiry turned into an amazing partnership. The team kept me informed at every step and exceeded all expectations. Professional, thorough, and reliable. Would definitely work with them again.",
      hasImages: false
    },
    {
      id: 5,
      author: "Jessica Brown",
      avatar: "JB",
      timeAgo: "4 weeks ago",
      rating: 5,
      text: "I can't recommend this company enough for their incredible service! After trying other options without success, they came through quickly and efficiently. They arrived promptly, handled everything professionally, and completed the work in no time. Super efficient, reliable, and clearly experts in their field.",
      hasImages: false
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          What Others Say About Us
        </h2>

        {/* Google Summary Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center text-center">
            <svg className="w-24 h-8 mb-4" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="70" className="fill-blue-600 dark:fill-blue-400" style={{ fontSize: '75px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>G</text>
              <text x="50" y="70" className="fill-red-600 dark:fill-red-400" style={{ fontSize: '75px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>o</text>
              <text x="95" y="70" className="fill-yellow-500 dark:fill-yellow-400" style={{ fontSize: '75px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>o</text>
              <text x="140" y="70" className="fill-blue-600 dark:fill-blue-400" style={{ fontSize: '75px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>g</text>
              <text x="185" y="70" className="fill-green-600 dark:fill-green-400" style={{ fontSize: '75px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>l</text>
              <text x="210" y="70" className="fill-red-600 dark:fill-red-400" style={{ fontSize: '75px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>e</text>
            </svg>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Premier Services LLC
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-5xl font-bold text-gray-900 dark:text-white">5</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-orange-500 text-orange-500" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Read our 19 Reviews
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-base truncate">
                    {review.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.timeAgo}
                  </p>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {review.text}
              </p>

              {/* Images (if applicable) */}
              {review.hasImages && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[...Array(review.images)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800" />
                    </div>
                  ))}
                </div>
              )}

              {/* View on Google Link */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>View on Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;