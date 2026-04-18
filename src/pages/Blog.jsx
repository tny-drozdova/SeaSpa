import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "Top 10 Unique Things to Do in Avalon & Stone Harbor, NJ This Summer",
    description: "Planning a trip to the Jersey Shore? From relaxing bay adventures to local hidden gems, here are the top unique things to do in Avalon and Stone Harbor this summer.",
    href: "/stone-harbor-bay-experience",
    tag: "Stone Harbor · Avalon",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    title: "Best Date Ideas in Stone Harbor, NJ",
    description: "Romantic activities and experiences for couples visiting Stone Harbor. From a private bay cruise to sunset walks and boutique dining.",
    href: "/blog/best-date-ideas-stone-harbor",
    tag: "Romantic · Date Ideas",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
  },
  {
    title: "Top 10 Unique Things to Do in Wildwood, NJ This Summer",
    description: "Beyond the boardwalk and beaches, Wildwood has a whole world of unique experiences waiting. Discover the best activities this summer season.",
    href: "/blog/top-things-to-do-wildwood-nj",
    tag: "Wildwood · Summer",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | SeaSpa Cruises — Jersey Shore Tips & Experiences";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Explore Jersey Shore tips, unique activities, and travel guides from SeaSpa Cruises. Discover what makes Wildwood, Avalon, and Stone Harbor special.');
    return () => { document.title = "SeaSpa Cruises | Hot Tub Boat Experience in NJ Bay"; };
  }, []);

  return (
    <div className="bg-sea-salt min-h-screen">
      {/* Hero */}
      <div className="bg-deep-atlantic pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">Journal</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-sea-salt tracking-wide leading-tight">
            Jersey Shore Tips & Experiences
          </h1>
          <p className="font-body text-mist-grey text-base mt-4">
            Travel guides, local secrets, and ideas for your best summer yet.
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={article.href}
                className="group block rounded-2xl overflow-hidden border border-deep-atlantic/8 bg-white hover:border-sky-horizon/30 hover:shadow-md transition-all focus-ring"
                aria-label={`Read: ${article.title}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
                <div className="p-6">
                  <span className="font-body text-xs font-semibold tracking-widest uppercase text-sky-horizon mb-3 block">
                    {article.tag}
                  </span>
                  <h2 className="font-heading text-xl font-light text-deep-atlantic mb-3 leading-snug group-hover:text-sky-horizon transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-body text-mist-grey text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sky-horizon font-body font-semibold text-sm underline underline-offset-4 hover:text-deep-atlantic transition-colors">
                    Read More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}