import { motion } from 'framer-motion';

const FAREHARBOR_URL = "/booking";

const occasions = [
  { emoji: "🎂", title: "Birthday Celebration", description: "Make it legendary. Hot tub, bay views, and your whole crew." },
  { emoji: "💅", title: "Bachelorette Party", description: "The most unique send-off she'll ever have. Champagne included." },
  { emoji: "👨‍👩‍👧‍👦", title: "Family Time", description: "A memory the whole family will talk about for years." },
  { emoji: "🎓", title: "Graduation", description: "They earned it. Celebrate in a way that matches the moment." },
  { emoji: "🚤🚤", title: "Two Boats — Double Fun", description: "Big group? Book two boats and cruise the bay side by side." },
];

export default function PerfectForEveryOccasion() {
  return (
    <section className="py-24 md:py-32 bg-deep-atlantic glass-rule" aria-labelledby="occasions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-4">Any Reason to Celebrate</p>
          <h2 id="occasions-heading" className="font-heading text-3xl md:text-5xl font-light text-sea-salt tracking-wide">
            Perfect For Every Occasion
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {occasions.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <a
                href={FAREHARBOR_URL}
                aria-label={`Book for ${o.title} via FareHarbor`}
                className="group flex flex-col gap-4 glass-card rounded-2xl p-7 hover:border-sky-horizon/60 hover:shadow-lg active:scale-95 transition-all duration-200 focus-ring h-full"
              >
                <span className="text-4xl" aria-hidden="true">{o.emoji}</span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-sea-salt group-hover:text-sky-horizon transition-colors mb-2">
                    {o.title}
                  </h3>
                  <p className="font-body text-mist-grey text-sm leading-relaxed">
                    {o.description}
                  </p>
                </div>
                <span className="mt-auto text-sky-horizon font-body font-semibold text-sm group-hover:underline transition-all">
                  Book Now →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}