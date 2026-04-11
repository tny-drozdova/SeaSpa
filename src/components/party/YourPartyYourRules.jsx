import { Users, Music, Camera, Shield, Anchor, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const rules = [
  {
    icon: Users,
    title: "Up to 6 Guests",
    description: "Bring your whole crew for a private 90-minute party — the entire boat is yours.",
  },
  {
    icon: Music,
    title: "Your Playlist",
    description: "Connect via Bluetooth and set the perfect vibe for your group. Your music, your rules.",
  },
  {
    icon: Camera,
    title: "Photo-Worthy Views",
    description: "Every angle of the NJ Bay is Instagram gold — especially at golden hour.",
  },
  {
    icon: Sparkles,
    title: "BYOB & Bring Food",
    description: "We're BYOB-friendly. Bring champagne, drinks, snacks — whatever makes your party legendary.",
  },
  {
    icon: Anchor,
    title: "Licensed Captain",
    description: "A driver's license is required for handling. Our licensed captain takes care of navigation so you can fully enjoy every moment.",
  },
  {
    icon: Shield,
    title: "Fully Private Experience",
    description: "No strangers, no shared spaces. The boat is exclusively yours for the full 90 minutes.",
  },
];

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
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt tracking-wide"
          >
            Your Party, Your Rules
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-7 hover:border-sky-horizon/40 transition-colors"
            >
              <rule.icon className="w-6 h-6 text-sky-horizon mb-4" aria-hidden="true" />
              <h3 className="font-body font-semibold text-sea-salt text-base mb-2">{rule.title}</h3>
              <p className="font-body text-mist-grey text-sm leading-relaxed">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}