import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import UniquePageSidebar from '../components/unique/UniquePageSidebar';
import { ArrowRight, ChevronRight } from 'lucide-react';

const FAREHARBOR_URL = "/booking";
const HERO_IMAGE = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80";
const CARD_IMAGE = "https://media.base44.com/images/public/69d4989a834518931660bae7/92833de5a_Smiles_n_sunshine.jpg";

const cards = [
{
  id: "early-bird",
  time: "9:00 AM",
  label: "Early Bird Cruise",
  tag: "Morning · Private",
  headline: "Start the Day on the Water",
  body: "Glassy bay, soft light, no crowds — the best-kept secret of a Wildwood morning.",
  tags: ["90-min cruise", "Private boat", "From $149", "Up to 6 guests"],
  alt: "Calm Wildwood bay at early morning with soft golden light",
  emoji: "🌅"
},
{
  id: "sunset-cruise",
  time: "8:00 PM",
  label: "Sunset Cruise",
  tag: "Evening · Scenic",
  headline: "Golden Hour, Reimagined",
  body: "The bay turns gold as the sun drops behind the marshlands — cinematic and unforgettable.",
  tags: ["90-min cruise", "BYOB welcome", "From $149", "Up to 6 guests"],
  alt: "Sunset over Wildwood NJ bay with warm golden reflections",
  emoji: "🌇"
},
{
  id: "romantic-date",
  time: "Evening",
  label: "Romantic Date",
  tag: "Couples · Romantic",
  headline: "A Date Unlike Any Other",
  body: "Warm water, open sky, just the two of you. Effortlessly romantic without trying too hard.",
  tags: ["Private cruise", "BYOB welcome", "From $149", "Just the two of you"],
  alt: "Romantic evening on New Jersey Bay with warm sunset light",
  emoji: "💑"
},
{
  id: "private-fleet",
  time: "Any Time",
  label: "Private Fleet",
  tag: "Groups · Celebration",
  headline: "The Send-Off She Deserves",
  body: "Your squad, your music, your champagne. The most unforgettable bachelorette on the bay.",
  tags: ["Multiple boats", "BYOB welcome", "Group pricing", "Up to 18 guests"],
  alt: "Group of friends celebrating a bachelorette party on a boat",
  emoji: "🥂"
}];


const quickNavCards = [
{ id: "early-bird", emoji: "🌅", label: "Early Bird Cruise" },
{ id: "sunset-cruise", emoji: "🌇", label: "Sunset Cruise" },
{ id: "romantic-date", emoji: "💑", label: "Romantic Date" },
{ id: "private-fleet", emoji: "🥂", label: "Private Fleet" }];


export default function StoneHarborBayExperience() {
  useEffect(() => {
    document.title = "The Only Experience of Its Kind in New Jersey | SeaSpa Cruises Wildwood";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'A hot tub you can drive, set against Wildwood\'s summer bay. The most unique experience in New Jersey. Book your private cruise today.');
    return () => {document.title = "SeaSpa Cruises | Hot Tub Boat Experience in NJ Bay";};
  }, []);

  return (
    <div className="bg-sea-salt min-h-screen">
      {/* Hero */}
      <div className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Wildwood NJ bay with open water and summer sky" className="w-full h-full object-cover" loading="eager" width="1600" height="900" />
          <div className="absolute inset-0 bg-deep-atlantic/65" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <div className="max-w-2xl">
            <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">Wildwood, NJ</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-light text-sea-salt tracking-wide leading-tight mb-6">
              The Only Experience of Its Kind in New Jersey
            </h1>
            <p className="font-body text-sea-salt/80 text-base md:text-xl leading-relaxed mb-10">
              A hot tub you can drive, set against Wildwood's summer bay.
            </p>
            <a href={FAREHARBOR_URL} aria-label="Book your experience">
              <Button size="lg" className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-6 text-lg border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all">
                Book Your Experience
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main + sidebar layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Content column */}
          <div className="lg:col-span-2">

            {/* Intro */}
            <div className="mb-8">
              <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">One of a Kind</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-deep-atlantic mb-4">Your Own Floating Spa</h2>
              <p className="font-body text-mist-grey text-base leading-relaxed">
                This isn't a boat tour — it's your own floating spa, and you're at the helm. Glide across Wildwood's back bay in warm water, surrounded by open sky and quiet marshlands.
              </p>
            </div>

            {/* Quick-nav strip — mobile first */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {quickNavCards.map((item) =>
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-deep-atlantic/15 bg-white hover:border-sky-horizon/50 hover:shadow-sm transition-all focus-ring"
                aria-label={`Jump to ${item.label}`}>
                
                  <span className="text-xl leading-none flex-shrink-0" aria-hidden="true">{item.emoji}</span>
                  <span className="font-body text-deep-atlantic text-sm font-semibold leading-snug group-hover:text-sky-horizon transition-colors">
                    {item.label}
                  </span>
                  {/* Always visible on mobile, fade-in on desktop hover */}
                  <ChevronRight className="w-3.5 h-3.5 text-sky-horizon ml-auto flex-shrink-0 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              )}
            </div>

            {/* Experience cards */}
            <div className="space-y-8">
              {cards.map((card, i) =>
              <motion.article
                id={card.id}
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-deep-atlantic/10 bg-white shadow-sm hover:shadow-md hover:border-sky-horizon/25 transition-all flex flex-col lg:flex-row">
                
                  {/* Image — full width on mobile, fixed left column on desktop */}
                  <div className="aspect-[16/9] lg:aspect-auto lg:w-72 xl:w-80 flex-shrink-0 overflow-hidden relative">
                    <img src="https://media.base44.com/images/public/69d4989a834518931660bae7/92833de5a_Smiles_n_sunshine.jpg"
                  alt={card.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="800"
                  height="450" />
                    {/* Overlay tag */}
                    <div className="absolute top-4 left-4">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase bg-deep-atlantic/90 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Time label */}
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-sky-horizon mb-3 block">
                      {card.time} · {card.label}
                    </span>

                    <h3 className="font-heading text-2xl md:text-3xl font-light text-deep-atlantic mb-3 leading-snug group-hover:text-sky-horizon transition-colors">
                      {card.headline}
                    </h3>
                    <p className="font-body text-mist-grey text-base leading-relaxed mb-5">
                      {card.body}
                    </p>

                    {/* Trip detail tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {card.tags.map((t) =>
                    <span
                      key={t}
                      className="font-body text-xs font-medium text-deep-atlantic bg-sand border border-deep-atlantic/10 px-3 py-1 rounded-full">
                      
                          {t}
                        </span>
                    )}
                    </div>

                    {/* Price + CTA row */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-deep-atlantic/8 mt-auto">
                      <p className="font-heading text-2xl font-light text-deep-atlantic">
                        From <span className="font-semibold">$149</span>
                      </p>
                      <a href={FAREHARBOR_URL} aria-label={`Book the ${card.label}`}>
                        <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-6 border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all">
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.article>
              )}
            </div>
          </div>

          {/* Sidebar — sticky on desktop, below cards on mobile */}
          <UniquePageSidebar />
        </div>
      </div>
    </div>);

}