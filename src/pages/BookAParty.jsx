import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";
import FareHarborBookingCTA from "../components/FareHarborBookingCTA";
import YourPartyYourRules from "../components/party/YourPartyYourRules";
import HotTubDataStats from "../components/party/HotTubDataStats";
import WhatAreYouCelebrating from "../components/party/WhatAreYouCelebrating";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";
const GROUP_IMAGE = "https://media.base44.com/images/public/69d4989a834518931660bae7/58e1634bf_generated_4d1c9db8.png";

const occasions = ["Birthdays", "Bachelorettes", "Friend Groups", "Team Off-Sites"];

export default function BookAParty() {
  return (
    <div className="bg-deep-atlantic">
      {/* 1. Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="party-hero-heading">
        <div className="absolute inset-0">
          <img
            src={GROUP_IMAGE}
            alt="Group of friends laughing and celebrating on a luxury hot tub boat on New Jersey Bay at golden hour"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080" />
          
          <div className="absolute inset-0 bg-deep-atlantic/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl">
            
            <PartyPopper className="w-8 h-8 text-sky-horizon mb-6" aria-hidden="true" />
            <h1
              id="party-hero-heading" className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-sea-salt tracking-wide leading-tight mb-6">Book a Party on the Bay



            </h1>
            <p className="text-sea-salt/80 mb-10 text-base font-body leading-relaxed">The ultimate group experience — a private hot tub boat celebration with your favorite people.

            </p>
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label="Book your group party via FareHarbor">
              <Button size="lg" className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-6 text-lg hover:bg-sky-horizon/90 focus-ring animate-ripple transition-all">
                Book Your Party
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Every Celebration Welcome */}
      <WhatAreYouCelebrating />

      {/* 3. Hot Tub Data Cards */}
      <HotTubDataStats />

      {/* 4. Your Party, Your Rules (The Experience) */}
      <YourPartyYourRules />

      {/* 5. Perfect For Every Occasion */}
      <section className="py-24 md:py-32 bg-deep-atlantic glass-rule" aria-labelledby="occasions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="occasions-heading" className="font-heading text-3xl md:text-5xl font-light text-sea-salt tracking-wide">
              Perfect For Every Occasion
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {occasions.map((o, i) =>
            <motion.div
              key={o}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group">
              
                <a
                href={FAREHARBOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-lg p-6 md:p-8 text-center hover:border-sky-horizon/50 transition-all focus-ring"
                aria-label={`Book for ${o} via FareHarbor`}>
                
                  <span className="text-sea-salt text-base font-light tracking-wide md:text-2xl group-hover:text-sky-horizon transition-colors">
                    {o.toUpperCase()}
                  </span>
                  <span className="block text-sky-horizon text-xs font-body mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Book Now →
                  </span>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Multiple CTAs */}
      <section className="py-16 bg-deep-atlantic glass-rule" aria-label="Booking options">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer"
            className="glass-card rounded-lg p-8 text-center hover:border-sky-horizon/50 transition-all focus-ring block"
            aria-label="Book a standard group party via FareHarbor">
              <h3 className="font-heading text-2xl font-light text-sea-salt mb-2">Standard Party</h3>
              <p className="font-body text-mist-grey text-sm mb-4">Up to 6 guests · 90 minutes</p>
              <span className="text-sky-horizon font-body font-semibold text-sm">Book Now →</span>
            </a>
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer"
            className="glass-card rounded-lg p-8 text-center hover:border-sky-horizon/50 transition-all focus-ring block"
            aria-label="Book a multi-boat party fleet via FareHarbor">
              <h3 className="font-heading text-2xl font-light text-sea-salt mb-2">Party Fleet</h3>
              <p className="font-body text-mist-grey text-sm mb-4">Multiple boats · Large groups</p>
              <span className="text-sky-horizon font-body font-semibold text-sm">Book Now →</span>
            </a>
          </div>
        </div>
      </section>

      <FareHarborBookingCTA
        headline="Ready to Party?"
        subtext="Book your group hot tub boat experience today."
        buttonText="Book Your Party" />
      
    </div>);

}