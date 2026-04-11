import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

export default function GiveThemAMoment() {
  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      aria-labelledby="give-moment-heading"
      style={{
        background: 'linear-gradient(135deg, #3d0c11 0%, #0F172A 50%, #0e2240 100%)',
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heart icon */}
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8" aria-hidden="true">
          <Heart className="w-5 h-5 text-amber-400 fill-amber-400" />
        </div>

        {/* Headline */}
        <h2
          id="give-moment-heading"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-sea-salt mb-3"
        >
          Give Them a Moment
        </h2>
        <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-light italic text-amber-400 mb-8">
          They'll Never Forget
        </p>

        {/* Subtext */}
        <p className="font-body text-sea-salt/70 text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed">
          Book your Cruise for Two today. Summer slots are limited — secure your perfect evening on New Jersey Bay before it's gone.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={FAREHARBOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your romantic cruise via FareHarbor"
          >
            <Button
              size="lg"
              className="bg-amber-300 text-deep-atlantic font-body font-semibold px-8 py-5 text-base hover:bg-amber-200 focus-ring transition-all rounded-full"
            >
              Book Your Romantic Cruise
            </Button>
          </a>
          <a
            href="/#contact"
            aria-label="Plan something special — contact us"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-sea-salt/30 text-sea-salt font-body font-semibold px-8 py-5 text-base hover:bg-sea-salt/10 focus-ring transition-all rounded-full"
            >
              Plan Something Special
            </Button>
          </a>
        </div>

        {/* Trust badges */}
        <p className="font-body text-sea-salt/40 text-xs tracking-wide">
          Instant confirmation · FareHarbor secure booking · Private experience guaranteed
        </p>
      </div>
    </section>
  );
}