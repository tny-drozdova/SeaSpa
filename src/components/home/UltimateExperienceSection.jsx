import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

export default function UltimateExperienceSection({ image }) {
  return (
    <section
      id="experiences-hot-tub-boat-stone-harbor-NJ"
      className="py-15 md:py-40 bg-deep-atlantic"
      aria-labelledby="ultimate-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}>
            
            <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
              Stone Harbor, NJ · Summer 2026
            </p>
            <h2
              id="ultimate-heading"
              className="font-heading text-3xl md:text-5xl font-light text-sea-salt leading-tight mb-8">
              Make 2026 the Summer You'll Never Forget
            </h2>
            <p className="font-body text-mist-grey text-lg leading-relaxed mb-4">
              This summer, don't settle for ordinary.
            </p>
            <p className="font-body text-mist-grey text-lg leading-relaxed mb-4">
              Trade crowded beaches and predictable plans for something truly unforgettable.
            </p>
            <ul className="font-body text-mist-grey text-lg leading-relaxed mb-4 space-y-1">
              <li>Be the captain.</li>
              <li>Choose your adventure.</li>
              <li>Soak, cruise, laugh, and relax.</li>
            </ul>
            <p className="font-body text-mist-grey text-lg leading-relaxed mb-4">
              SeaSpa Cruises is ready to make your Stone Harbor summer unlike anything you've ever experienced.
            </p>
            <p className="font-body text-mist-grey text-lg leading-relaxed mb-10">
              Book your private hot tub boat today — and make your best summer memory on the water.
            </p>
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your cruise via FareHarbor">
              
              <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-8 py-5 hover:bg-sky-horizon/90 focus-ring transition-all">
                Reserve your Hot Tub Boat
              </Button>
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative">
            
            <div className="aspect-[3/2] rounded-lg overflow-hidden">
              <img src="https://media.base44.com/images/public/69d4989a834518931660bae7/f0e5df5d6_couple_in_hot_tub_boat_Stone_harbor_NJ.jpg"

              alt="Premium hot tub boat with crystal clear bubbling water, teak wood deck, and plush towels overlooking New Jersey Bay at sunset" className="w-full h-full object-cover"

              loading="lazy"
              width="800"
              height="533" />
              
              <p className="font-body text-mist-grey/70 text-xs mt-3 italic">Couple enjoying a private hot tub boat cruise on New Jersey Bay — 90 minutes of relaxation and stunning bay views.</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sky-horizon/30 rounded-lg" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>);

}