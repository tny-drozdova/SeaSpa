import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FAREHARBOR_URL = "/404";

const ideas = [
  {
    number: "1",
    title: "Float Together in a Private Hot Tub Boat",
    body: "Nothing says romance like soaking in a heated hot tub while drifting across New Jersey Bay. SeaSpa Cruises offers a completely private 90-minute experience for just the two of you — warm water, stunning views, and total privacy. It's the most unique date in Stone Harbor, hands down.",
    highlight: true,
  },
  {
    number: "2",
    title: "Sunset Walk on the Stone Harbor Beach",
    body: "The wide, uncrowded beaches of Stone Harbor are magical at golden hour. Grab some takeout, a blanket, and watch the sky turn pink and orange together.",
  },
  {
    number: "3",
    title: "Dinner at a Waterfront Restaurant",
    body: "Stone Harbor and Avalon have a growing culinary scene with romantic waterfront dining options. Pair a great meal with bay views for an effortless date night.",
  },
  {
    number: "4",
    title: "Kayak the Back Bay Together",
    body: "For the adventurous couple, renting a tandem kayak through the calm back bay marshes is a peaceful and playful way to spend an afternoon.",
  },
  {
    number: "5",
    title: "Browse the Boutiques on Third Avenue",
    body: "Stone Harbor's main shopping street is charming and low-key. Stroll together through local boutiques, pick up a piece of art, or grab ice cream and people-watch.",
  },
];

const sidebarArticles = [
  {
    title: "Unique Jersey Shore Experiences",
    href: "/stone-harbor-bay-experience#unique",
    description: "Top 10 unique things to do in Avalon & Stone Harbor this summer.",
  },
  {
    title: "NJ Bay Experience",
    href: "/unique-experiences",
    description: "Everything you need to know about the SeaSpa hot tub boat experience.",
  },
];

export default function BestDateIdeasStoneHarbor() {
  useEffect(() => {
    document.title = "Best Date Ideas in Stone Harbor NJ | Romantic Experiences | SeaSpa Cruises";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Looking for the best date ideas in Stone Harbor NJ? Discover romantic experiences from hot tub boat cruises to sunset walks and waterfront dining.');
    return () => { document.title = "SeaSpa Cruises | Hot Tub Boat Experience in NJ Bay"; };
  }, []);

  return (
    <div className="bg-sea-salt min-h-screen">
      {/* Hero */}
      <div className="bg-deep-atlantic pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">Stone Harbor · Date Ideas</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-sea-salt tracking-wide leading-tight max-w-3xl">
            Best Date Ideas in Stone Harbor, NJ
          </h1>
          <p className="font-body text-mist-grey text-lg mt-4 max-w-2xl">
            From hot tub boat cruises to sunset strolls — the most romantic experiences at the Jersey Shore.
          </p>
        </div>
      </div>



      {/* Back to Blog */}
      <div className="bg-deep-atlantic pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1.5 font-body text-sm text-mist-grey hover:text-sky-horizon hover:underline active:underline transition-colors focus-ring rounded-sm">
            <ChevronRight className="w-4 h-4 rotate-180 flex-shrink-0" aria-hidden="true" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Main + sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Content */}
          <div className="lg:col-span-2 space-y-10">
            {ideas.map((idea) => (
              <motion.article
                key={idea.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl p-8 ${idea.highlight ? 'bg-sky-horizon/10 border border-sky-horizon/30' : 'bg-white border border-deep-atlantic/8'}`}
              >
                <div className="flex gap-5 items-start">
                  <span className={`font-heading text-3xl font-light flex-shrink-0 ${idea.highlight ? 'text-sky-horizon' : 'text-deep-atlantic/20'}`}>
                    {idea.number}.
                  </span>
                  <div>
                    <h2 className="font-heading text-xl md:text-2xl font-light text-deep-atlantic mb-3">{idea.title}</h2>
                    <p className="font-body text-mist-grey text-base leading-relaxed">{idea.body}</p>
                    {idea.highlight && (
                      <a href={FAREHARBOR_URL} className="inline-block mt-5">
                        <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-6 py-3 hover:bg-sky-horizon/90 focus-ring">
                          Book a SeaSpa Cruise
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <h3 className="font-body font-semibold text-deep-atlantic text-sm tracking-widest uppercase mb-6">More Articles</h3>
              <nav aria-label="Related articles">
                <ul className="space-y-4">
                  {sidebarArticles.map((article) => (
                    <li key={article.title}>
                      <Link
                        to={article.href}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-deep-atlantic/10 bg-white hover:border-sky-horizon/40 hover:shadow-sm transition-all focus-ring"
                      >
                        <ChevronRight className="w-4 h-4 text-sky-horizon flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        <div>
                          <p className="font-body font-medium text-deep-atlantic text-sm group-hover:text-sky-horizon transition-colors">{article.title}</p>
                          <p className="font-body text-mist-grey text-xs mt-1 leading-relaxed">{article.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 p-6 rounded-xl bg-deep-atlantic text-center">
                <p className="font-heading text-xl font-light text-sea-salt mb-3">Plan the Perfect Date</p>
                <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold w-full hover:bg-sky-horizon/90 focus-ring">Book Now</Button>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}