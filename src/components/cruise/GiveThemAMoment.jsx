import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FAREHARBOR_URL = "/404";

export default function GiveThemAMoment() {
  return (
    <section
      className="relative py-32 md:py-40 bg-deep-atlantic overflow-hidden glass-rule"
      aria-labelledby="give-moment-heading">
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heart icon */}
        <div className="w-12 h-12 rounded-full bg-sky-horizon/10 border border-sky-horizon/20 flex items-center justify-center mx-auto mb-8" aria-hidden="true">
          <Heart className="w-5 h-5 text-sky-horizon fill-sky-horizon/30" />
        </div>

        {/* Headline */}
        <h2
          id="give-moment-heading"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-sea-salt mb-3">
          
          Give Them a Moment
        </h2>
        <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-light italic text-sky-horizon mb-10">
          They'll Never Forget
        </p>

        {/* Subtext */}
        <p className="font-body text-mist-grey text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed">
          Book your Cruise for Two today. Summer slots are limited — secure your perfect evening on New Jersey Bay before it's gone.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={FAREHARBOR_URL}
            aria-label="Book your romantic cruise">
            
            <Button
              size="lg" className="bg-[hsl(var(--primary))] text-deep-atlantic px-8 py-5 text-base font-semibold rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 hover:bg-sky-horizon/90 focus-ring transition-all">

              
              Book Your Romantic Cruise
            </Button>
          </a>
          <a href="/#about" aria-label="Plan something special — contact us">
            <Button
              size="lg"
              variant="outline"
              className="border-sea-salt text-sea-salt font-body font-semibold px-8 py-5 text-base hover:bg-sea-salt hover:text-deep-atlantic focus-ring transition-all hover:ring-[3px] hover:ring-sky-horizon">
              
              Plan Something Special
            </Button>
          </a>
        </div>

        {/* Trust badges */}
        <p className="font-body text-mist-grey/50 text-xs tracking-wide">
          Instant confirmation · FareHarbor secure booking · Private experience guaranteed
        </p>
      </div>
    </section>);

}