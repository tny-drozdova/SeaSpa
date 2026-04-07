import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Jessica M.",
    initials: "JM",
    rating: 5,
    text: "Absolutely magical! We booked this for our anniversary and it exceeded every expectation. The bay views at sunset were breathtaking.",
    badge: "Verified Experience",
  },
  {
    name: "Carlos R.",
    initials: "CR",
    rating: 5,
    text: "Best group activity in NJ, hands down. We had a blast for my wife's birthday — everyone is still talking about it weeks later.",
    badge: "Verified Experience",
  },
  {
    name: "Amanda & Derek",
    initials: "AD",
    rating: 5,
    text: "I proposed on the boat and she said YES! The crew was so helpful setting everything up. An unforgettable evening we'll cherish forever.",
    badge: "Verified Experience",
  },
];

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card rounded-lg p-6 md:p-8 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full bg-sky-horizon/20 text-sky-horizon flex items-center justify-center font-body font-semibold text-sm"
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div>
          <p className="font-body font-semibold text-sea-salt text-sm">{review.name}</p>
          <span className="text-xs text-sky-horizon font-body">{review.badge}</span>
        </div>
      </div>

      <div className="flex gap-0.5 mb-4" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < review.rating ? 'fill-sky-horizon text-sky-horizon' : 'text-mist-grey/30'}`}
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="font-body text-mist-grey text-sm leading-relaxed flex-1">
        "{review.text}"
      </p>
    </motion.div>
  );
}

export default function GoogleReviewCards() {
  return (
    <section
      className="py-24 md:py-40 bg-deep-atlantic glass-rule"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Unforgettable Moments
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt"
          >
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}