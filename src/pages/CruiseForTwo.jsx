import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Sunset, Wine, Sparkles } from "lucide-react";
import FareHarborBookingCTA from "../components/FareHarborBookingCTA";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const IMAGES = {
  hero: "/__generating__/img_8d5cc998b25b.png",
  detail: "/__generating__/img_3dd7e1bf4127.png",
  scenic: "/__generating__/img_c317aa12644b.png",
  proposal: "/__generating__/img_b5655bcc3d21.png",
};

const highlights = [
  { icon: Heart, title: "Private Setting", text: "Just the two of you on your own floating oasis" },
  { icon: Sunset, title: "Scenic Bay Views", text: "Panoramic views of the NJ skyline and golden sunsets" },
  { icon: Wine, title: "Relaxing Atmosphere", text: "Warm bubbling water, soft music, and pure serenity" },
];

const occasions = [
  { title: "Date Nights", description: "Elevate your evening with an experience unlike any other" },
  { title: "Proposals", description: "Pop the question surrounded by water, sky, and golden light" },
  { title: "Anniversaries", description: "Celebrate your love story on the bay" },
];

export default function CruiseForTwo() {
  return (
    <div className="light-theme bg-sea-salt">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" aria-labelledby="romantic-hero-heading">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Couple enjoying a romantic sunset hot tub boat cruise on New Jersey Bay"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-atlantic/70 via-deep-atlantic/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <Sparkles className="w-8 h-8 text-sky-horizon mb-6" aria-hidden="true" />
            <h1
              id="romantic-hero-heading"
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-sea-salt tracking-wider leading-tight mb-6"
              style={{ letterSpacing: '0.08em' }}
            >
              A Romantic Escape on the Water
            </h1>
            <p className="font-body text-sea-salt/80 text-lg leading-relaxed mb-10">
              An intimate 90-minute cruise for two — just you, the warm water, and the beauty of the bay.
            </p>
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label="Book your romantic cruise via FareHarbor">
              <Button size="lg" className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-6 text-lg hover:bg-sky-horizon/90 focus-ring transition-all">
                Book Your Romantic Cruise
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-24 md:py-40 bg-sea-salt" aria-labelledby="highlights-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="highlights-heading" className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic tracking-wide">
              The Perfect Escape
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-sky-horizon/10 flex items-center justify-center mx-auto mb-5">
                  <h.icon className="w-6 h-6 text-sky-horizon" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-light text-deep-atlantic mb-3">{h.title}</h3>
                <p className="font-body text-mist-grey text-sm leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-24 md:py-40 bg-white" aria-labelledby="occasions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
              Perfect For
            </p>
            <h2 id="occasions-heading" className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic tracking-wide">
              Every Special Moment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {occasions.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-deep-atlantic/10 rounded-lg p-8 text-center hover:border-sky-horizon/40 transition-colors"
              >
                <h3 className="font-heading text-2xl font-light text-deep-atlantic mb-3">{o.title}</h3>
                <p className="font-body text-mist-grey text-sm leading-relaxed">{o.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story */}
      <section className="py-24 md:py-40 bg-sea-salt" aria-label="Visual story of the romantic cruise experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white p-4 md:p-6 rounded-sm shadow-sm rotate-[-1deg]">
                <img
                  src={IMAGES.detail}
                  alt="Close-up of champagne flutes held over a hot tub with NJ Bay sunset in background"
                  className="w-full aspect-[4/5] object-cover rounded-sm"
                  loading="lazy"
                  width="600"
                  height="750"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 md:mt-16"
            >
              <div className="bg-white p-4 md:p-6 rounded-sm shadow-sm rotate-[1deg]">
                <img
                  src={IMAGES.proposal}
                  alt="Romantic proposal moment on a luxury hot tub boat at sunset with rose petals"
                  className="w-full aspect-[4/5] object-cover rounded-sm"
                  loading="lazy"
                  width="600"
                  height="750"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FareHarborBookingCTA
        headline="Book Your Romantic Cruise"
        subtext="Create memories that last a lifetime, floating together under the sky."
        buttonText="Reserve for Two"
        variant="dark"
      />
    </div>
  );
}