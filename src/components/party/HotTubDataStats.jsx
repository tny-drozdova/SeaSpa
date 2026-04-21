import { useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
{
  value: "6",
  label: "MAX GUESTS",
  isTemp: false
},
{
  value: "90",
  label: "MINUTES",
  isTemp: false
},
{
  value: "102°F",
  label: "HOT TUB TEMP",
  isTemp: true,
  hoverValue: "87°F",
  hoverLabel: "ADJUSTED TEMP"
},
{
  value: "5★",
  label: "AVERAGE RATING",
  isTemp: false
}];


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
      className={`rounded-2xl border p-5 md:p-7 text-center flex flex-col items-center justify-center transition-all duration-300 cursor-default shadow-md ${
      stat.isTemp ?
      hovered ?
      'bg-white border-sky-horizon' :
      'bg-white border-red-300' :
      'bg-white border-transparent'}`
      }
      aria-label={stat.isTemp && hovered ? `${stat.hoverValue} ${stat.hoverLabel}` : `${stat.value} ${stat.label}`}>
      
      <span
        className={`font-heading text-3xl md:text-4xl font-light mb-1.5 transition-colors duration-300 ${
        stat.isTemp ?
        hovered ?
        'text-sky-horizon' :
        'text-red-600' :
        'text-deep-atlantic'}`
        }>
        
        {stat.isTemp && hovered ? stat.hoverValue : stat.value}
      </span>
      <span
        className={`font-body text-xs font-semibold tracking-widest transition-colors duration-300 ${
        stat.isTemp ?
        hovered ?
        'text-sky-horizon' :
        'text-red-700' :
        'text-mist-grey'}`
        }>
        
        {stat.isTemp && hovered ? stat.hoverLabel : stat.label}
      </span>
    </motion.div>);

}

export default function HotTubDataStats() {
  return (
    <section className="bg-[hsl(var(--background))] py-16 md:py-20 glass-rule"

    aria-label="SeaSpa Cruises key facts">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) =>
          <StatCard key={stat.label} stat={stat} index={i} />
          )}
        </div>
      </div>
    </section>);

}