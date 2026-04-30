import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const FAREHARBOR_URL = "/booking";


const celebrations = [
{
  emoji: "🎂",
  tag: "BIRTHDAY PARTIES",
  title: "The Birthday They'll Never Stop Talking About",
  description: "Skip the bar. Skip the restaurant. Celebrate your birthday (or someone else's) in a hot tub on New Jersey Bay with your closest friends. Bring the cake, bring the drinks, and make it legendary.",
  link: "Birthday boat party New Jersey",
  image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  imageAlt: "Group of friends celebrating a birthday party on a boat"
},
{
  emoji: "💅",
  tag: "BACHELORETTE PARTIES",
  title: "The Most Unique Send-Off She'll Ever Have",
  description: "Forget the usual night out. Soak in the hot tub, sip champagne, and cruise the bay with your squad. It's private, gorgeous, and completely unforgettable — just like the bride.",
  link: "Bachelorette party on the water NJ",
  image: "https://images.unsplash.com/photo-1543965170-e399d7e6fc10?w=600&q=80",
  imageAlt: "Bachelorette party group celebrating on a luxury boat"
},
{
  emoji: "🥂",
  tag: "ANNIVERSARIES & MILESTONES",
  title: "A Toast to Every Year Together",
  description: "Whether it's your 1st or 25th anniversary, mark the occasion on the water. Warm bubbling water, stunning bay views, and a moment that says more than any card ever could.",
  link: "Anniversary boat experience New Jersey",
  image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80",
  imageAlt: "Couple celebrating anniversary on a romantic boat cruise"
}];


export default function WhatAreYouCelebrating() {
  return (
    <section
      className="py-24 md:py-40 bg-sea-salt"
      aria-labelledby="celebrating-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-4">
            Every Celebration Welcome
          </p>
          <h2
            id="celebrating-heading"
            className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic mb-5">
            
            What Are You Celebrating?
          </h2>
          <p className="font-body text-mist-grey text-base max-w-md mx-auto">
            SeaSpa Cruises is New Jersey's most unique party venue — and it floats.
          </p>
        </div>

        {/* Occasions */}
        <div className="space-y-20">
          {celebrations.map((item, i) =>
          <motion.div
            key={item.tag}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src="https://media.base44.com/images/public/69d4989a834518931660bae7/a0de96fb4_hot_tub_boat_party_New_Jersey.jpg"

                alt={item.imageAlt} className="w-full h-full object-cover"

                loading="lazy"
                width="600"
                height="450" />
                
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg shadow-md">
                    {item.emoji}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-3">
                  {item.tag}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-light text-deep-atlantic mb-5">
                  {item.title}
                </h3>
                <p className="font-body text-mist-grey text-base leading-relaxed mb-5">
                  {item.description}
                </p>
                <a
                href={FAREHARBOR_URL}
                className="font-body text-sky-horizon text-sm font-medium underline underline-offset-4 hover:text-sky-horizon/70 focus-ring rounded-sm transition-colors">
                
                  {item.link}
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href={FAREHARBOR_URL}
            aria-label="Start your celebration">
            
            <Button
              size="lg"
              className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-6 text-lg hover:bg-sky-horizon/90 focus-ring transition-all">
              
              Start Your Celebration
            </Button>
          </a>
        </div>
      </div>
    </section>);

}