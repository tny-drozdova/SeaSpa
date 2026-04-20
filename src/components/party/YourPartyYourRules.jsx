import { Users, Music, Camera, Shield, Anchor, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const rules = [
  {
    icon: Users,
    title: "Up to 6 Guests",
    description: "Bring your whole crew for a private 90-minute party — the entire boat is yours.",
    accent: "bg-sky-horizon/10 border-sky-horizon/30",
    iconColor: "text-sky-horizon",
  },
  {
    icon: Music,
    title: "Your Playlist",
    description: "Connect via Bluetooth and set the perfect vibe for your group. Your music, your rules.",
    accent: "bg-secondary/10 border-secondary/30",
    iconColor: "text-secondary",
  },
  {
    icon: Camera,
    title: "Photo-Worthy Views",
    description: "Every angle of the NJ Bay is Instagram gold — especially at golden hour.",
    accent: "bg-accent/10 border-accent/30",
    iconColor: "text-accent",
  },
  {
    icon: Sparkles,
    title: "BYOB & Bring Food",
    description: "We're BYOB-friendly. Bring champagne, drinks, snacks — whatever makes your party legendary.",
    accent: "bg-sky-horizon/10 border-sky-horizon/30",
    iconColor: "text-sky-horizon",
  },
  {
    icon: Anchor,
    title: "Licensed Captain",
    description: "Our licensed captain handles navigation so you can fully enjoy every moment.",
    accent: "bg-secondary/10 border-secondary/30",
    iconColor: "text-secondary",
  },
  {
    icon: Shield,
    title: "Fully Private",
    description: "No strangers, no shared spaces. The boat is exclusively yours for the full 90 minutes.",
    accent: "bg-accent/10 border-accent/30",
    iconColor: "text-accent",
  },
];

function RuleCard({ rule, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={rule.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`rounded-2xl border p-6 md:p-7 transition-all duration-200 cursor-pointer md:cursor-default select-none ${rule.accent} hover:scale-[1.02] active:scale-[0.98]`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2.5 rounded-xl bg-white/10 flex-shrink-0`}>
          <rule.icon className={`w-6 h-6 ${rule.iconColor}`} aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg md:text-xl font-semibold text-sea-salt mb-1">{rule.title}</h3>
          {/* Always visible on desktop, toggled on mobile */}
          <p className={`font-body text-mist-grey text-sm leading-relaxed md:block ${expanded ? 'block' : 'hidden'}`}>
            {rule.description}
          </p>
        </div>
        {/* Mobile expand chevron */}
        <span className="md:hidden text-sky-horizon text-lg flex-shrink-0 mt-0.5 transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ›
        </span>
      </div>
    </motion.div>
  );
}

export default function YourPartyYourRules() {
  return (
    <section
      className="py-24 md:py-40 bg-deep-atlantic glass-rule"
      aria-labelledby="party-rules-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-4">
            The Experience
          </p>
          <h2
            id="party-rules-heading"
            className="font-heading text-3xl md:text-5xl font-semibold text-sea-salt tracking-wide"
          >
            Your Party, Your Rules
          </h2>
          <p className="font-body text-mist-grey text-base mt-4 max-w-md mx-auto">
            Tap any card to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((rule, i) => (
            <RuleCard key={rule.title} rule={rule} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}