import { Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=SeaSpa+Cruises+reviews";

const reviews = [
  {
    name: "Melissa Torres",
    initials: "MT",
    color: "bg-teal-700",
    date: "August 2025",
    rating: 5,
    tag: "Anniversary",
    text: "Absolutely incredible experience! We celebrated our anniversary on the hot tub boat and it was better than anything we could have imagined. The views of the NJ skyline were breathtaking. Our captain was wonderful. 100% recommend!",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80",
    imageAlt: "NYC skyline views from New Jersey Bay at golden hour",
  },
  {
    name: "Jordan Kaufman",
    initials: "JK",
    color: "bg-blue-800",
    date: "July 2025",
    rating: 5,
    tag: "Bachelorette Party",
    text: "We did this for my bachelorette party and it was the BEST decision. The whole group (6 of us) fit perfectly. We brought champagne, the captain played our playlist, and we soaked in the hot tub with incredible views. Unforgettable!",
    image: null,
  },
  {
    name: "David & Priya Sharma",
    initials: "DS",
    color: "bg-emerald-800",
    date: "September 2025",
    rating: 5,
    tag: "Proposal",
    text: "SeaSpa Cruises delivered a truly magical evening. The sunset cruise on the Bay was stunning. David proposed right there in the hot tub! The captain was so helpful and discreet about the whole plan. We'll be back every year.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    imageAlt: "Stunning sunset over New Jersey Bay",
  },
  {
    name: "Marcus Williams",
    initials: "MW",
    color: "bg-slate-700",
    date: "June 2025",
    rating: 5,
    tag: "Birthday",
    text: "Booked this for my birthday and my friends are still talking about it. Nothing like soaking in a hot tub while floating on the Bay. Super easy booking process, very professional team, and the experience itself is totally unique.",
    image: null,
  },
  {
    name: "Rachel & Tom Okonkwo",
    initials: "RO",
    color: "bg-rose-800",
    date: "August 2025",
    rating: 5,
    tag: "Date Night",
    text: "Honestly one of the best date experiences we've ever had in New Jersey. The hot tub was perfectly heated, the captain gave us privacy but was always nearby for safety. The Bay views at sunset are absolutely gorgeous. Already planning our next booking!",
    image: null,
  },
  {
    name: "Sofia Reyes",
    initials: "SR",
    color: "bg-violet-800",
    date: "July 2025",
    rating: 5,
    tag: "Anniversary",
    text: "I surprised my husband for our 10th anniversary and he was completely blown away. SeaSpa Cruises made it so easy — from booking to the actual experience. The hot tub boat is everything they say it is. Truly a 5-star experience.",
    image: null,
  },
];

function ReviewCard({ review, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-6 flex flex-col shadow-sm"
      aria-label={`Review by ${review.name}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-body font-semibold text-sm flex-shrink-0`}
            aria-hidden="true"
          >
            {review.initials}
          </div>
          <div>
            <p className="font-body font-semibold text-gray-900 text-sm leading-tight">{review.name}</p>
            <p className="font-body text-gray-400 text-xs">{review.date}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
        ))}
      </div>

      {/* Tag */}
      <span className="inline-block self-start bg-sky-horizon/10 text-sky-horizon text-xs font-body font-medium px-3 py-1 rounded-full mb-3">
        {review.tag}
      </span>

      {/* Review text */}
      <p className="font-body text-gray-600 text-sm leading-relaxed flex-1">
        "{review.text}"
      </p>

      {/* Optional image */}
      {review.image && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <img
            src={review.image}
            alt={review.imageAlt}
            className="w-full h-36 object-cover"
            loading="lazy"
            width="400"
            height="144"
          />
        </div>
      )}
    </motion.article>
  );
}

export default function GoogleReviewCards() {
  return (
    <section
      className="py-24 md:py-40 bg-deep-atlantic glass-rule"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Unforgettable Moments
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt mb-8"
          >
            What Our Guests Are Saying
          </h2>

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-sm">
            <GoogleIcon />
            <span className="font-body font-bold text-gray-900 text-base">5.0</span>
            <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <span className="font-body text-gray-500 text-sm">· 47 reviews</span>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {/* Read all reviews link */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-medium text-sky-horizon hover:text-sky-horizon/80 text-sm transition-colors focus-ring rounded-sm"
            aria-label="Read all 47 SeaSpa Cruises reviews on Google (opens in new tab)"
          >
            Read all 47 reviews on Google
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}