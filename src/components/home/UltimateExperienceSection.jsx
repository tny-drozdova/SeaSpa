import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

export default function UltimateExperienceSection({ image }) {
  return (
    <section
      id="experience"
      className="py-24 md:py-40 bg-deep-atlantic"
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
              The Ultimate Bay Experience
            </p>
            <h2
              id="ultimate-heading" className="font-heading text-3xl md:text-5xl font-light text-sea-salt leading-tight mb-8">Make the Summer You'll Never Forget



            </h2>
            <p className="text-[hsl(var(--sidebar-border))] mb-6 text-base font-body leading-relaxed">Summer in Wildwood hits different on the bay — especially when you’re steering your own hot tub boat. SeaSpa Cruises puts you in control of a private, 90-minute escape through calm waterways and marshland views.



            </p>
            <p className="text-mist-grey mb-10 text-base font-body leading-relaxed">No experience needed, just a driver’s license and a sense of fun.


            </p>
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your cruise via FareHarbor">
              
              <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-8 py-5 hover:bg-sky-horizon/90 focus-ring transition-all">
                Reserve Your Cruise
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
              <img src="https://media.base44.com/images/public/69d4989a834518931660bae7/a0de96fb4_hot_tub_boat_party_New_Jersey.jpg"

              alt="Premium hot tub boat with crystal clear bubbling water, teak wood deck, and plush towels overlooking New Jersey Bay at sunset" className="w-full h-full object-cover"

              loading="lazy"
              width="800"
              height="533" />
              
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sky-horizon/30 rounded-lg" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>);

}