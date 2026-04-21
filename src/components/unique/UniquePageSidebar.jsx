import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const sidebarArticles = [
  {
    title: "Best Date Ideas in Stone Harbor",
    href: "/blog/best-date-ideas-stone-harbor",
    description: "Romantic experiences from hot tub cruises to sunset walks.",
  },
  {
    title: "Top Things To Do in Wildwood NJ",
    href: "/blog/top-things-to-do-wildwood-nj",
    description: "The best activities and attractions at the Jersey Shore.",
  },
  {
    title: "Group Celebrations",
    href: "/group-celebrations",
    description: "Plan your birthday, bachelorette, or any celebration on the bay.",
  },
];

export default function UniquePageSidebar() {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-28">
        <h3 className="font-body font-semibold text-deep-atlantic text-sm tracking-widest uppercase mb-6">
          More to Explore
        </h3>
        <nav aria-label="Related pages">
          <ul className="space-y-4">
            {sidebarArticles.map((article) => (
              <li key={article.title}>
                <Link
                  to={article.href}
                  className="group flex items-start gap-2 py-1.5 focus-ring rounded-sm"
                >
                  <ChevronRight className="w-4 h-4 text-sky-horizon flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  <p className="font-body font-medium text-deep-atlantic text-sm group-hover:text-sky-horizon transition-colors">{article.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 p-6 rounded-xl bg-deep-atlantic text-center">
          <p className="font-heading text-xl font-light text-sea-salt mb-3">Ready to Book?</p>
          <p className="font-body text-mist-grey text-xs mb-4">Private cruises from $149</p>
          <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold w-full hover:bg-sky-horizon/90 focus-ring">
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </aside>
  );
}