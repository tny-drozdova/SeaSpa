import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Sunset, Wine, Sparkles, Gem, CalendarHeart, Flame } from "lucide-react";
import { useState } from "react";
import GiveThemAMoment from "../components/cruise/GiveThemAMoment";
import YourStoryBeginsHere from "../components/cruise/YourStoryBeginsHere";
import RomanticSEOFeatures from "../components/cruise/RomanticSEOFeatures";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const HERO_IMAGE = "https://media.base44.com/images/public/69d4989a834518931660bae7/5a20b1156_generated_24563928.png";

const highlights = [
{ icon: Heart, title: "Private Setting", text: "Just the two of you on your own floating oasis" },
{ icon: Sunset, title: "Scenic Bay Views", text: "Panoramic views of the NJ skyline and golden sunsets" },
{ icon: Wine, title: "Relaxing Atmosphere", text: "Warm bubbling water, soft music, and pure serenity" }];


const milestones = [
{
  icon: Flame,
  title: "Date Nights",
  description: "Elevate your evening with an experience unlike any restaurant or rooftop. The bay at sunset is your backdrop.",
  accent: "bg-rose-500/10 border-rose-300/30",
  iconBg: "bg-rose-500/15",
  iconColor: "text-rose-500",
},
{
  icon: Gem,
  title: "Proposals",
  description: "Say yes surrounded by water, sky, and golden light. Our captain can help make it seamless and discreet.",
  accent: "bg-sky-horizon/8 border-sky-horizon/30",
  iconBg: "bg-sky-horizon/15",
  iconColor: "text-sky-horizon",
},
{
  icon: CalendarHeart,
  title: "Anniversaries",
  description: "Whether it's your first or your fiftieth — mark the milestone with an evening that feels as special as your love story.",
  accent: "bg-seafoam/8 border-seafoam/30",
  iconBg: "bg-seafoam/15",
  iconColor: "text-seafoam",
}];


function MilestoneCard({ milestone: m, index }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onClick={handleClick}
      className={`relative overflow-hidden rounded-2xl border p-8 text-center cursor-pointer select-none hover:shadow-lg transition-all duration-300 ${m.accent}`}
    >
      {/* Ripple effects */}
      {ripples.map(r => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full animate-ping"
          style={{
            left: r.x - 40, top: r.y - 40,
            width: 80, height: 80,
            background: 'hsl(197 80% 44% / 0.25)'
          }}
        />
      ))}

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl ${m.iconBg} flex items-center justify-center mx-auto mb-5`}>
        <m.icon className={`w-7 h-7 ${m.iconColor}`} aria-hidden="true" />
      </div>

      <h3 className="font-heading text-2xl font-light text-deep-atlantic mb-3">{m.title}</h3>
      <p className="font-body text-mist-grey text-sm leading-relaxed">{m.description}</p>
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
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label="Book your romantic cruise via FareHarbor">
              <Button size="lg" className="bg-sky-horizon text-deep-atlantic px-10 py-6 text-lg font-semibold rounded-md inline-flex items-center justify-center gap-2 shadow hover:bg-white hover:text-sky-horizon hover:border-[3px] hover:border-[#1697CA] focus-ring transition-all">
                Plan Your Romantic Cruise
              </Button>
            </a>
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
      <section className="py-24 md:py-40 bg-white" aria-labelledby="milestones-heading">
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