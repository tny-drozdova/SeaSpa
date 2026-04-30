import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { Heart, Sunset, Wine, Sparkles, Gem, CalendarHeart, Flame, ChevronDown } from "lucide-react";
import GiveThemAMoment from "../components/cruise/GiveThemAMoment";
import YourStoryBeginsHere from "../components/cruise/YourStoryBeginsHere";
import RomanticSEOFeatures from "../components/cruise/RomanticSEOFeatures";

const FAREHARBOR_URL = "/404";

const HERO_IMAGE = "https://media.base44.com/images/public/69d4989a834518931660bae7/5a20b1156_generated_24563928.png";

const highlights = [
{ icon: Heart, title: "Private Setting", text: "Just the two of you on your own floating oasis" },
{ icon: Sunset, title: "Scenic Bay Views", text: "Panoramic views of the NJ skyline and golden sunsets" },
{ icon: Wine, title: "Relaxing Atmosphere", text: "Warm bubbling water, soft music, and pure serenity" }];


const milestones = [
{
  icon: Flame,
  title: "Date Nights",
  tagline: "The most unique date in New Jersey.",
  description: "Elevate your date night beyond dinner and a movie. The Bay at sunset, a hot tub, and two hours of pure connection.",
},
{
  icon: Gem,
  title: "Proposals",
  tagline: "We've helped dozens of couples say yes on the Bay.",
  description: "Pop the question in the most breathtaking setting imaginable. We'll help you plan every detail for the perfect yes.",
},
{
  icon: CalendarHeart,
  title: "Anniversaries",
  tagline: "A gift they'll talk about for years.",
  description: "Celebrate your love story with a chapter neither of you will ever forget. Mark your milestone on the water.",
}];


function MilestoneCard({ milestone: m, index }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples(prev => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 800);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.13 }}
      onClick={handleClick}
      className="relative overflow-hidden rounded-3xl border border-sky-horizon/20 bg-deep-atlantic p-6 sm:p-8 flex flex-col cursor-pointer"
    >
      <AnimatePresence>
        {ripples.map(r => (
          <motion.span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-sky-horizon/20"
            style={{ left: r.x - 60, top: r.y - 60, width: 120, height: 120 }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
      {/* Icon badge */}
      <div className="w-12 h-12 rounded-xl bg-sky-horizon/15 flex items-center justify-center mb-6">
        <m.icon className="w-6 h-6 text-sky-horizon" aria-hidden="true" />
      </div>

      <h3 className="font-heading text-xl sm:text-2xl font-light text-sea-salt mb-3">
        {m.title}
      </h3>

      <p className="font-body text-sea-salt/70 text-sm leading-relaxed mb-4">
        {m.description}
      </p>

      <p className="font-body text-sunrise text-sm italic mt-auto">
        {m.tagline}
      </p>
    </motion.div>
  );
}

export default function CruiseForTwo() {
  return (
    <div className="light-theme bg-sea-salt">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="romantic-hero-heading">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Couple enjoying a romantic sunset hot tub boat cruise on New Jersey Bay"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-deep-atlantic/70 via-deep-atlantic/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto">
            
            <Sparkles className="w-8 h-8 text-sky-horizon mb-6" aria-hidden="true" />
            <h1
              id="romantic-hero-heading" className="text-sea-salt mb-6 text-4xl font-light tracking-wider leading-tight sm:text-5xl md:text-6xl"
              style={{ letterSpacing: '0.08em' }}>
              A Romantic Escape on the Water
            </h1>
            <p className="text-sea-salt/80 mb-10 text-base font-body leading-relaxed">An intimate 90-minute cruise for two — just you, the warm water, and the beauty of the bay.</p>
            <a href={FAREHARBOR_URL} aria-label="Book your romantic cruise">
              <Button size="lg" className="bg-sky-horizon text-deep-atlantic px-10 py-6 text-lg font-semibold rounded-md inline-flex items-center justify-center gap-2 shadow hover:bg-white hover:text-sky-horizon hover:border-[3px] hover:border-[#1697CA] focus-ring transition-all">
                Plan Your Romantic Cruise
              </Button>
            </a>

            {/* Anchor pills with liquid glass effect */}
            <div className="flex gap-3 mt-8 flex-wrap justify-center">
              {[
                { label: "Proposal", emoji: "💍" },
                { label: "Date Night", emoji: "🌅" },
              ].map(({ label, emoji }) => (
                <a
                  key={label}
                  href="#milestones"
                  aria-label={`Jump to ${label} section`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-medium text-sea-salt transition-all duration-200 focus-ring active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.25)',
                  }}
                >
                  <span aria-hidden="true">{emoji}</span>
                  {label}
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Romantic SEO Features — below hero */}
      <RomanticSEOFeatures />

      {/* Experience Highlights */}
      <section className="py-24 md:py-40 bg-sea-salt" aria-labelledby="highlights-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="highlights-heading" className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic tracking-wide">
              The Perfect Escape
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((h, i) =>
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center">
              
                <div className="w-14 h-14 rounded-full bg-sky-horizon/10 flex items-center justify-center mx-auto mb-5">
                  <h.icon className="w-6 h-6 text-sky-horizon" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-light text-deep-atlantic mb-3">{h.title}</h3>
                <p className="font-body text-mist-grey text-sm leading-relaxed">{h.text}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Perfect for Every Milestone */}
      <section id="milestones" className="py-24 md:py-40 bg-white" aria-labelledby="milestones-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-4">
              Perfect For
            </p>
            <h2 id="milestones-heading" className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic tracking-wide">
              Every Milestone
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {milestones.map((m, i) =>
            <MilestoneCard key={m.title} milestone={m} index={i} />
            )}
          </div>
        </div>
      </section>

      {/* Your Story Begins Here gallery */}
      <YourStoryBeginsHere />

      {/* Give Them a Moment CTA */}
      <GiveThemAMoment />
    </div>);

}