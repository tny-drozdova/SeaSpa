import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Sunset, Wine, Sparkles } from "lucide-react";
import GiveThemAMoment from "../components/cruise/GiveThemAMoment";
import YourStoryBeginsHere from "../components/cruise/YourStoryBeginsHere";
import RomanticSEOFeatures from "../components/cruise/RomanticSEOFeatures";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const HERO_IMAGE = "https://media.base44.com/images/public/69d4989a834518931660bae7/5a20b1156_generated_24563928.png";

const highlights = [
{ icon: Heart, title: "Private Setting", text: "Just the two of you on your own floating oasis" },
{ icon: Sunset, title: "Scenic Bay Views", text: "Panoramic views of the NJ skyline and golden sunsets" },
{ icon: Wine, title: "Relaxing Atmosphere", text: "Warm bubbling water, soft music, and pure serenity" }];


const milestones = [
{
  number: "01",
  title: "Date Nights",
  description: "Elevate your evening with an experience unlike any restaurant or rooftop. The bay at sunset is your backdrop."
},
{
  number: "02",
  title: "Proposals",
  description: "Say yes surrounded by water, sky, and golden light. Our captain can help make it seamless and discreet."
},
{
  number: "03",
  title: "Anniversaries",
  description: "Whether it's your first or your fiftieth — mark the milestone with an evening that feels as special as your love story."
},
{
  number: "04",
  title: "Honeymoons",
  description: "Start your forever together on the bay. An intimate, private, and utterly romantic way to begin the next chapter."
}];


export default function CruiseForTwo() {
  return (
    <div className="light-theme bg-sea-salt">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" aria-labelledby="romantic-hero-heading">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Couple enjoying a romantic sunset hot tub boat cruise on New Jersey Bay"
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-deep-atlantic/70 via-deep-atlantic/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg">
            
            <Sparkles className="w-8 h-8 text-sky-horizon mb-6" aria-hidden="true" />
            <h1
              id="romantic-hero-heading"
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-sea-salt tracking-wider leading-tight mb-6"
              style={{ letterSpacing: '0.08em' }}>
              
              A Romantic Escape on the Water
            </h1>
            <p className="text-sea-salt/80 mb-10 text-base font-body leading-relaxed">An intimate 90-minute cruise for two — just you, the warm water, and the beauty of the bay.

            </p>
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label="Book your romantic cruise via FareHarbor">
              <Button size="lg" className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-10 py-6 text-lg hover:bg-sky-horizon/90 focus-ring transition-all">
                Book Your Romantic Cruise
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Romantic SEO Features — below hero */}
      <RomanticSEOFeatures />

      {/* Experience Highlights */}
      <section className="py-24 md:py-40 bg-sea-salt" aria-labelledby="highlights-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="highlights-heading" className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic tracking-wide">
              The Perfect Escape
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((h, i) =>
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center">
              
                <div className="w-14 h-14 rounded-full bg-sky-horizon/10 flex items-center justify-center mx-auto mb-5">
                  <h.icon className="w-6 h-6 text-sky-horizon" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl font-light text-deep-atlantic mb-3">{h.title}</h3>
                <p className="font-body text-mist-grey text-sm leading-relaxed">{h.text}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Perfect for Every Milestone */}
      <section className="py-24 md:py-40 bg-white" aria-labelledby="milestones-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-4">
              Perfect For
            </p>
            <h2 id="milestones-heading" className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic tracking-wide">
              Every Milestone
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {milestones.map((m, i) =>
            <motion.div
              key={m.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl border border-deep-atlantic/8 hover:border-sky-horizon/30 transition-colors">
              
                <span className="font-heading text-3xl font-light text-deep-atlantic/20 flex-shrink-0 leading-none">
                  {m.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-light text-deep-atlantic mb-2">{m.title}</h3>
                  <p className="font-body text-mist-grey text-sm leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Your Story Begins Here gallery */}
      <YourStoryBeginsHere />

      {/* Give Them a Moment CTA */}
      <GiveThemAMoment />
    </div>);

}