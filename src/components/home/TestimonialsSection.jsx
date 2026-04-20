import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah T.",
    location: "Hoboken, NJ",
    text: "We've done kayaking, jet skiing, you name it — but nothing comes close to a SeaSpa cruise. It's pure luxury on the water.",
  },
  {
    name: "Mike & Lisa",
    location: "Jersey City, NJ",
    text: "The perfect date night. We were worried about the weather but the hot tub kept us warm and the crew made everything seamless.",
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
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            From Our Guests
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt"
          >
            Loved by Everyone
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6"
            >
              {/* Large opening quote */}
              <span className="font-heading text-7xl leading-none text-sky-horizon/40 select-none -mb-4" aria-hidden="true">"</span>
              <p className="font-body text-sea-salt text-base leading-relaxed flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-sky-horizon/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-sky-horizon font-semibold text-sm" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-sea-salt text-sm">{t.name}</p>
                  <p className="font-body text-sea-salt/60 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}