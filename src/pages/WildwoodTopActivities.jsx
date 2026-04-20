import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const tips = [
  {
    number: "1",
    title: "Cruise the Bay in a Private Hot Tub Boat",
    body: "The most unique experience in Wildwood is a private hot tub boat cruise. SeaSpa Cruises offers a 90-minute floating spa experience for up to 6 guests. It's perfect for couples, friend groups, birthdays, and family outings. With warm bubbling water, scenic views, and total privacy, it's a must-do summer memory.",
    highlight: true,
  },
  {
    number: "2",
    title: "Watch the Sunset Over the Bay",
    body: "Sunset in Wildwood is stunning. Whether from the dock, beach, or boat, golden hour here is unforgettable.",
  },
  {
    number: "3",
    title: "Ride the Wildwood Boardwalk",
    body: "The famous Wildwood Boardwalk is packed with amusement rides, arcades, and classic Jersey Shore food. A timeless experience for all ages.",
  },
  {
    number: "4",
    title: "Kayak the Back Bay",
    body: "The calm back bays around Wildwood offer peaceful kayaking routes through pristine marshlands filled with local wildlife.",
  },
  {
    number: "5",
    title: "Try Fresh Seafood at Local Restaurants",
    body: "Wildwood and the surrounding Cape May County area are famous for fresh seafood. From casual crab shacks to waterfront dining, the local catches are exceptional.",
  },
  {
    number: "6",
    title: "Explore Cape May",
    body: "Just a short drive away, Cape May is a Victorian-era gem with gorgeous architecture, wine trails, and charming boutiques.",
  },
  {
    number: "7",
    title: "Paddleboard at the Beach",
    body: "The calm bay side is ideal for stand-up paddleboarding. Many local outfitters offer hourly rentals — no experience needed.",
  },
  {
    number: "8",
    title: "Visit the Cape May County Zoo",
    body: "Free admission and home to hundreds of animals — a perfect family-friendly stop on a sunny day.",
  },
  {
    number: "9",
    title: "Go Fishing on a Charter Boat",
    body: "Deep-sea fishing charters depart regularly from Wildwood's marinas. Whether you're a seasoned angler or a first-timer, it's a memorable way to spend the day.",
  },
  {
    number: "10",
    title: "End Your Day with a Beach Bonfire",
    body: "End your perfect summer day gathered around the fire with friends and family on Wildwood's wide, beautiful beaches.",
  },
];

const sidebarArticles = [
  {
    title: "Best Date Ideas in Stone Harbor NJ",
    href: "/blog/best-date-ideas-stone-harbor",
    description: "Romantic activities and experiences for couples visiting Stone Harbor.",
  },
  {
    title: "Unique NJ Bay Experience",
    href: "/unique-experiences",
    description: "Everything you need to know about the SeaSpa hot tub boat experience.",
  },
];

export default function WildwoodTopActivities() {
  useEffect(() => {
    document.title = "Top 10 Unique Things to Do in Wildwood, NJ This Summer | SeaSpa Cruises";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Discover the top unique things to do in Wildwood, NJ this summer. From a private hot tub boat cruise to boardwalk fun and bay adventures.');
    return () => { document.title = "SeaSpa Cruises | Hot Tub Boat Experience in NJ Bay"; };
  }, []);

  return (
    <div className="bg-sea-salt min-h-screen">
      {/* Hero */}
      <div className="bg-deep-atlantic pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">Wildwood, NJ</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-sea-salt tracking-wide leading-tight max-w-3xl">
            Top 10 Unique Things to Do in Wildwood, NJ This Summer
          </h1>
          <p className="font-body text-mist-grey text-lg mt-4 max-w-2xl">
            Beyond the boardwalk and beaches — the best experiences Wildwood has to offer this summer.
          </p>
        </div>
      </div>

      {/* Main + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Content */}
          <div className="lg:col-span-2 space-y-10">
            {tips.map((tip) => (
              <motion.article
                key={tip.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl p-8 ${tip.highlight ? 'bg-sky-horizon/10 border border-sky-horizon/30' : 'bg-white border border-deep-atlantic/8'}`}
              >
                <div className="flex gap-5 items-start">
                  <span className={`font-heading text-3xl font-light flex-shrink-0 ${tip.highlight ? 'text-sky-horizon' : 'text-deep-atlantic/20'}`}>
                    {tip.number}.
                  </span>
                  <div>
                    <h2 className="font-heading text-xl md:text-2xl font-light text-deep-atlantic mb-3">{tip.title}</h2>
                    <p className="font-body text-mist-grey text-base leading-relaxed">{tip.body}</p>
                    {tip.highlight && (
                      <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-5" aria-label="Book a SeaSpa Cruise via FareHarbor">
                        <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-6 py-3 border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all">
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
                <p className="font-heading text-xl font-light text-sea-salt mb-3">Plan the Perfect Trip</p>
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