import { Button } from "@/components/ui/button";

const FAREHARBOR_URL = "/booking";

export default function FareHarborBookingCTA({
  headline = "Ready to Set Sail?",
  subtext = "Book your private hot tub boat experience today.",
  buttonText = "Book Your Escape",
  variant = "dark"
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-24 md:py-32 ${isDark ? 'bg-deep-atlantic' : 'bg-sea-salt'}`}
      aria-labelledby="booking-cta-heading">
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="booking-cta-heading"
          className={`font-heading text-3xl md:text-5xl font-light tracking-wide mb-6 ${
          isDark ? 'text-sea-salt' : 'text-deep-atlantic'}`
          }>
          
          {headline}
        </h2>
        <p className="text-[hsl(var(--border))] mb-10 text-lg font-body">
          {subtext}
        </p>
        <a
          href={FAREHARBOR_URL}
          aria-label="Book your cruise via FareHarbor">
          
          <Button
            size="lg" className="bg-sky-horizon text-deep-atlantic px-10 py-6 text-lg font-semibold rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap shadow h-10 border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all duration-200">

            
            {buttonText}
          </Button>
        </a>
      </div>
    </section>);

}