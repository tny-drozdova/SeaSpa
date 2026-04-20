import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import UniqueExperienceFeature from '../components/unique/UniqueExperienceFeature';

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";
const HERO_IMAGE = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80";

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

      {/* Unique Experience Feature - Early Bird & Sunset cards */}
      <UniqueExperienceFeature />
    </div>
  );
}