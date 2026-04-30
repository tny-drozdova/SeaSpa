import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sunset, Wine, Sparkles, Gem, CalendarHeart, Flame, ChevronDown } from "lucide-react";
import { useState, useCallback } from "react";
import GiveThemAMoment from "../components/cruise/GiveThemAMoment";
import YourStoryBeginsHere from "../components/cruise/YourStoryBeginsHere";
import RomanticSEOFeatures from "../components/cruise/RomanticSEOFeatures";

const FAREHARBOR_URL = "/booking";

const HERO_IMAGE = "https://media.base44.com/images/public/69d4989a834518931660bae7/5a20b1156_generated_24563928.png";

const highlights = [
{ icon: Heart, title: "Private Setting", text: "Just the two of you on your own floating oasis" },
{ icon: Sunset, title: "Scenic Bay Views", text: "Panoramic views of the NJ skyline and golden sunsets" },
{ icon: Wine, title: "Relaxing Atmosphere", text: "Warm bubbling water, soft music, and pure serenity" }];


const milestones = [
{
  icon: Flame,
  title: "Date Nights",
  tagline: "Romantic · Evening",
  description: "Elevate your evening with an experience unlike any restaurant or rooftop.",
},
{
  icon: Gem,
  title: "Proposals",
  tagline: "Once in a lifetime",
  description: "Say yes surrounded by water, sky, and golden light.",
},
{
  icon: CalendarHeart,
  title: "Anniversaries",
  tagline: "Celebrate your love",
  description: "Mark the milestone with an evening as special as your love story.",
}];


function WaterRipple({ x, y }) {
  return (
    <>
      {[0, 1, 2, 3].map(i => (
        <motion.span
          key={i}
          className="pointer-events-none absolute rounded-full border border-sky-horizon/40"
          style={{
            left: x,
            top: y,
            width: 0,
            height: 0,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            width: [0, 80 + i * 40],
            height: [0, 80 + i * 40],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.2 + i * 0.2,
            delay: i * 0.18,
            ease: [0.2, 0.6, 0.4, 1],
          }}
        />
      ))}
    </>
  );
}

function MilestoneCard({ milestone: m, index }) {
  const [ripples, setRipples] = useState([]);

  const handlePress = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 1600);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handlePress}
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handlePress(e)}
      className="relative overflow-hidden rounded-2xl border border-sky-horizon/20 bg-white cursor-pointer select-none group transition-shadow duration-300 hover:shadow-md"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <AnimatePresence>
        {ripples.map(r => <WaterRipple key={r.id} x={r.x} y={r.y} />)}
      </AnimatePresence>

      <div className="p-5 sm:p-6 flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-sky-horizon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-horizon/20 transition-colors duration-300">
          <m.icon className="w-5 h-5 text-sky-horizon" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-heading text-base font-semibold text-deep-atlantic leading-tight mb-0.5">
            {m.title}
          </h3>
          <p className="font-body text-mist-grey text-xs tracking-wide mb-1">{m.tagline}</p>
          <p className="font-body text-mist-grey text-xs leading-relaxed hidden sm:block">{m.description}</p>
        </div>
      </div>
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
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
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