import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import UniqueExperienceFeature from '../components/unique/UniqueExperienceFeature';

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";
const HERO_IMAGE = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80";

const sidebarArticles = [
  {
    title: "Best Date Ideas in Stone Harbor NJ",
    href: "/blog/best-date-ideas-stone-harbor",
    description: "Romantic activities and experiences for couples visiting Stone Harbor.",
  },
  {
    title: "Top Things to Do in Wildwood, NJ",
    href: "/blog/top-things-to-do-wildwood-nj",
    description: "Beyond the boardwalk — discover what makes Wildwood truly special.",
  },
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

      {/* Unique Experience Feature - Early Bird & Sunset cards */}
      <UniqueExperienceFeature />

      {/* Sidebar article links */}
      <div className="bg-sea-salt py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* CTA card */}
              <div className="p-8 rounded-2xl bg-deep-atlantic text-center">
                <p className="font-heading text-2xl font-light text-sea-salt mb-3">Ready to Experience the Bay?</p>
                <p className="font-body text-mist-grey text-sm mb-6">Book your private hot tub boat cruise in Wildwood, NJ today.</p>
                <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-5 border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <h3 className="font-body font-semibold text-deep-atlantic text-sm tracking-widest uppercase mb-6">
                More Articles
              </h3>
              <nav aria-label="Blog articles navigation">
                <ul className="space-y-4">
                  {sidebarArticles.map((article) => (
                    <li key={article.title}>
                      <Link
                        to={article.href}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-deep-atlantic/10 bg-white hover:border-sky-horizon/40 hover:shadow-sm transition-all focus-ring"
                      >
                        <ChevronRight className="w-4 h-4 text-sky-horizon flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        <div>
                          <p className="font-body font-medium text-deep-atlantic text-sm group-hover:text-sky-horizon transition-colors">
                            {article.title}
                          </p>
                          <p className="font-body text-mist-grey text-xs mt-1 leading-relaxed">
                            {article.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}