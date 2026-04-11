import { useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: "6",
    label: "MAX GUESTS",
    isTemp: false,
  },
  {
    value: "90",
    label: "MINUTES",
    isTemp: false,
  },
  {
    value: "102°F",
    label: "HOT TUB TEMP",
    isTemp: true,
    hoverValue: "87°F",
    hoverLabel: "ADJUSTED TEMP",
  },
  {
    value: "5★",
    label: "AVERAGE RATING",
    isTemp: false,
  },
];

function StatCard({ stat, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => stat.isTemp && setHovered(true)}
      onMouseLeave={() => stat.isTemp && setHovered(false)}
      className={`rounded-2xl border p-8 md:p-10 text-center flex flex-col items-center justify-center transition-all duration-300 cursor-default ${
        stat.isTemp
          ? hovered
            ? 'bg-sky-horizon/10 border-sky-horizon text-sky-horizon'
            : 'bg-red-950/30 border-red-800/50'
          : 'bg-white border-transparent'
      }`}
      aria-label={stat.isTemp && hovered ? `${stat.hoverValue} ${stat.hoverLabel}` : `${stat.value} ${stat.label}`}
    >
      <span
        className={`font-heading text-4xl md:text-5xl font-light mb-2 transition-colors duration-300 ${
          stat.isTemp
            ? hovered
              ? 'text-sky-horizon'
              : 'text-red-400'
            : 'text-deep-atlantic'
        }`}
      >
        {stat.isTemp && hovered ? stat.hoverValue : stat.value}
      </span>
      <span
        className={`font-body text-xs font-semibold tracking-widest transition-colors duration-300 ${
          stat.isTemp
            ? hovered
              ? 'text-sky-horizon/70'
              : 'text-red-400/70'
            : 'text-mist-grey'
        }`}
      >
        {stat.isTemp && hovered ? stat.hoverLabel : stat.label}
      </span>
    </motion.div>
  );
}

export default function HotTubDataStats() {
  return (
    <section
      className="py-16 md:py-24 bg-deep-atlantic glass-rule"
      aria-label="SeaSpa Cruises key facts"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}