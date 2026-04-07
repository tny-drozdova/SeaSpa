import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah T.",
    location: "Hoboken, NJ",
    text: "We've done kayaking, jet skiing, you name it — but nothing comes close to a SeaSpa cruise. It's pure luxury on the water.",
    rating: 5,
  },
  {
    name: "Mike & Lisa",
    location: "Jersey City, NJ",
    text: "The perfect date night. We were worried about the weather but the hot tub kept us warm and the crew made everything seamless.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 md:py-32 bg-deep-atlantic glass-rule"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt"
          >
            Loved by Everyone
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-muted/50 rounded-lg p-8"
            >
              <Quote className="w-8 h-8 text-sky-horizon/30 mb-4" aria-hidden="true" />
              <p className="font-body text-sea-salt/90 text-base leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-semibold text-sea-salt text-sm">{t.name}</p>
                  <p className="font-body text-mist-grey text-xs">{t.location}</p>
                </div>
                <div className="flex gap-0.5" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${j < t.rating ? 'fill-sky-horizon text-sky-horizon' : 'text-mist-grey/30'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}