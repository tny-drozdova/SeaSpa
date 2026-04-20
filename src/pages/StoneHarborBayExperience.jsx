import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import UniquePageSidebar from '../components/unique/UniquePageSidebar';

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";
const HERO_IMAGE = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80";

const cards = [
  {
    time: "9:00 AM",
    label: "Early Bird Cruise",
    headline: "Start the Day on the Water",
    body: "Slip out at 9:00 AM when the bay is glassy and calm. The air is fresh, the light is soft, and the pace feels unhurried — the kind of morning that sets the tone for the whole day. Coffee, conversation, and a private soak before the beach crowds even wake up.",
    alt: "Calm Wildwood bay at early morning with soft golden light"
  },
  {
    time: "8:00 PM",
    label: "Sunset Cruise",
    headline: "Golden Hour, Reimagined",
    body: "At 8:00 PM, the sky puts on a show over the bay. Warm light stretches across the water as the sun drops behind the marshlands. It's quiet, cinematic, and just the right kind of unforgettable.",
    alt: "Sunset over Wildwood NJ bay with warm golden reflections"
  },
  {
    time: "Evening",
    label: "Date Night",
    headline: "A Date Unlike Any Other",
    body: "Trade the usual dinner-and-a-movie for something they'll actually remember. Warm water, a glowing bay sky, and the two of you — completely alone. It's effortlessly romantic without trying too hard.",
    alt: "Romantic evening on New Jersey Bay with warm sunset light"
  },
  {
    time: "Any Time",
    label: "Group Party",
    headline: "The Send-Off She Deserves",
    body: "Skip the predictable night out. Soak in the hot tub, pop the champagne, and cruise the bay with your squad. It's private, gorgeous, and completely unforgettable — just like the bride.",
    alt: "Group of friends celebrating a bachelorette party on a boat"
  }
];

export default function StoneHarborBayExperience() {
  useEffect(() => {
    document.title = "The Only Experience of Its Kind in New Jersey | SeaSpa Cruises Wildwood";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'A hot tub you can drive, set against Wildwood\'s summer bay. The most unique experience in New Jersey. Book your private cruise today.');
    return () => { document.title = "SeaSpa Cruises | Hot Tub Boat Experience in NJ Bay"; };
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
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label="Book your experience via FareHarbor">
              <Button size="lg" className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-6 text-lg border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all">
                Book Your Experience
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main + sidebar layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Content: intro + cards (2 cols on desktop) */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">One of a Kind</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-deep-atlantic mb-4">Your Own Floating Spa</h2>
              <p className="font-body text-mist-grey text-base leading-relaxed">
                This isn't a boat tour — it's your own floating spa, and you're at the helm. Glide across Wildwood's back bay in warm water, surrounded by open sky and quiet marshlands.
              </p>
            </div>

            <div className="space-y-8">
              {cards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-deep-atlantic/8 bg-white shadow-sm"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src="https://media.base44.com/images/public/69d4989a834518931660bae7/92833de5a_Smiles_n_sunshine.jpg"
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="800"
                      height="450"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {/* Dark pill — high contrast: white text on near-black */}
                      <span className="font-body text-xs font-semibold tracking-widest uppercase bg-deep-atlantic text-white px-3 py-1 rounded-full">
                        {card.time} · {card.label}
                      </span>
                      {/* Price pill — dark text on white: passes AA easily */}
                      <span className="font-body text-xs font-semibold bg-white text-deep-atlantic px-3 py-1 rounded-full">
                        From $149
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl md:text-3xl font-light text-deep-atlantic mb-4">
                      {card.headline}
                    </h3>
                    <p className="font-body text-mist-grey text-base leading-relaxed mb-6">
                      {card.body}
                    </p>
                    <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label={`Book the ${card.label} via FareHarbor`}>
                      <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-6 border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all">
                        Book This Experience
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar — sticky on desktop, below cards on mobile */}
          <UniquePageSidebar />
        </div>
      </div>
    </div>
  );
}