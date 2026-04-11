import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const tips = [
  {
    number: "1",
    title: "Cruise the Bay in a Private Hot Tub Boat",
    body: "The most unique experience in Avalon and Stone Harbor is a private hot tub boat cruise. SeaSpa Cruises offers a 90-minute floating spa experience for up to 6 guests. It's perfect for couples, friend groups, birthdays, and family outings. With warm bubbling water, scenic views, and total privacy, it's a must-do summer memory.",
    highlight: true,
  },
  {
    number: "2",
    title: "Watch the Sunset Over the Bay",
    body: "Sunset in Avalon and Stone Harbor is stunning. Whether from the dock, beach, or boat, golden hour here is unforgettable.",
  },
  {
    number: "3",
    title: "Bike Through Quiet Shore Town Streets",
    body: "Both towns are bike-friendly and perfect for exploring at your own pace. Rent a cruiser and meander through tree-lined avenues and past charming beach cottages.",
  },
  {
    number: "4",
    title: "Kayak the Inland Waterways",
    body: "The back bays of Avalon and Stone Harbor offer calm, protected kayaking routes through pristine marshlands filled with local wildlife.",
  },
  {
    number: "5",
    title: "Visit the Wetlands Institute",
    body: "Stone Harbor's Wetlands Institute is a beloved local landmark. Explore exhibits about Jersey Shore ecology and catch a great view from the observation tower.",
  },
  {
    number: "6",
    title: "Explore Stone Harbor's Boutique Shopping",
    body: "Third Avenue in Stone Harbor is lined with charming boutiques, art galleries, and local shops. A perfect afternoon activity before an evening cruise.",
  },
  {
    number: "7",
    title: "Fresh Seafood at Local Restaurants",
    body: "The Jersey Shore is famous for its seafood. From casual crab shacks to upscale dining, Avalon and Stone Harbor deliver exceptional fresh catches.",
  },
  {
    number: "8",
    title: "Paddleboard at the Beach",
    body: "The calm bay side is ideal for stand-up paddleboarding. Many local outfitters offer hourly rentals — no experience needed.",
  },
  {
    number: "9",
    title: "Visit Corson's Inlet State Park",
    body: "A pristine natural area between Ocean City and Strathmere, featuring undeveloped beaches, tidal marshes, and excellent birding. A true Jersey Shore hidden gem.",
  },
  {
    number: "10",
    title: "End Your Day with a Beach Bonfire",
    body: "Some stretches of the Jersey Shore allow permitted beach bonfires. End your perfect summer day gathered around the fire with friends and family.",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Private Hot Tub Boat in Avalon & Stone Harbor NJ | Unique Bay Experience | SeaSpa Cruises";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Experience a private hot tub boat in Avalon & Stone Harbor NJ. Perfect for couples, friends, and families. 90-minute BYOB bay cruise. Book now.');
    return () => {
      document.title = "SeaSpa Cruises | Hot Tub Boat Experience in NJ Bay";
    };
  }, []);

  return (
    <div className="bg-sea-salt min-h-screen">
      {/* Hero */}
      <div className="bg-deep-atlantic pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">NJ Bay Experience</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-sea-salt tracking-wide leading-tight">
            Top 10 Unique Things to Do in Avalon &amp; Stone Harbor, NJ This Summer
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <p className="font-body text-mist-grey text-lg leading-relaxed text-center md:text-left">
          Planning a trip to the Jersey Shore? If you're looking for more than just beach chairs and boardwalk snacks, Avalon and Stone Harbor offer unforgettable experiences that go beyond the usual. From relaxing bay adventures to local hidden gems, here are the top unique things to do this summer.
        </p>
      </div>

      {/* Tips */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-10">
        {tips.map((tip) => (
          <article
            key={tip.number}
            className={`rounded-2xl p-8 ${tip.highlight ? 'bg-sky-horizon/10 border border-sky-horizon/30' : 'bg-white border border-deep-atlantic/8'}`}
          >
            <div className="flex gap-5 items-start">
              <span className={`font-heading text-3xl font-light flex-shrink-0 ${tip.highlight ? 'text-sky-horizon' : 'text-deep-atlantic/20'}`}>
                {tip.number}.
              </span>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-light text-deep-atlantic mb-3">
                  {tip.title}
                </h2>
                <p className="font-body text-mist-grey text-base leading-relaxed">{tip.body}</p>
                {tip.highlight && (
                  <a
                    href={FAREHARBOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5"
                    aria-label="Book a SeaSpa Cruise via FareHarbor"
                  >
                    <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-6 py-3 hover:bg-sky-horizon/90 focus-ring transition-all">
                      Book a SeaSpa Cruise
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-deep-atlantic py-20 text-center px-4">
        <h2 className="font-heading text-2xl md:text-4xl font-light text-sea-salt mb-4">
          Make Your Jersey Shore Trip Unforgettable
        </h2>
        <p className="font-body text-mist-grey text-base mb-8 max-w-md mx-auto">
          Book your private hot tub boat cruise near Avalon and Stone Harbor today.
        </p>
        <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label="Book via FareHarbor">
          <Button size="lg" className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-5 hover:bg-sky-horizon/90 focus-ring">
            Book Your Bay Experience
          </Button>
        </a>
      </div>
    </div>
  );
}