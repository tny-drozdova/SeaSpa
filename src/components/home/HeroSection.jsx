import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

export default function HeroSection({ heroImage }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SeaSpa luxury hot tub boat cruising on New Jersey Bay at golden hour with steam rising and city skyline in the distance"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080" />
        
        <div className="absolute inset-0 bg-deep-atlantic/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-6">
            New Jersey Bay · Summer 2026
          </p>
          <h1
            id="hero-heading"
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-sea-salt tracking-wider mb-6">
            
            <span className="block">SEA</span>
            <span className="block font-semibold text-sky-horizon">SPA</span>
          </h1>
          <p className="font-body text-sea-salt/80 text-base md:text-xl max-w-xl mx-auto mb-4 leading-relaxed">A private hot tub boat experience on New Jersey Bay

          </p>
          <p className="font-body text-mist-grey text-sm md:text-base max-w-md mx-auto mb-10">
            90 minutes of luxury, relaxation, and unforgettable views
          </p>
          <a
            href={FAREHARBOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your cruise via FareHarbor">
            
            <Button
              size="lg"
              className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-6 text-lg hover:bg-sky-horizon/90 focus-ring animate-ripple transition-all duration-200">
              
              Book Your Escape
            </Button>
          </a>
          <a
            href="#booking-cta-heading"
            onClick={(e) => {e.preventDefault();document.getElementById('booking-cta-heading')?.scrollIntoView({ behavior: 'smooth' });}}
            className="block mt-5 font-body text-sea-salt/60 hover:text-sky-horizon text-sm tracking-wide underline underline-offset-4 transition-colors focus-ring rounded-sm">
            
            Unique Jersey Shore Experiences
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sea-salt/40 rounded-full flex justify-center">
          
          <div className="w-1.5 h-3 bg-sea-salt/60 rounded-full mt-2" />
        </motion.div>
      </div>
    </section>);

}