import { Link } from 'react-router-dom';
import { Lock, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const features = [
{
  icon: Lock,
  tag: "PLAN A PROPOSAL",
  title: "Completely Private",
  body1: "No other guests. No strangers. The entire boat, the hot tub, and the Bay belong to just the two of you.",
  body2: "Your captain is always nearby for safety and navigation, but discreetly in the background — giving you and your partner the space and privacy to truly connect.",
  cta: "Plan a Proposal on the Bay",
  ctaHref: FAREHARBOR_URL,
  external: true,
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
  imageAlt: "Romantic private hot tub boat experience on New Jersey Bay — perfect for a proposal",
  imageLeft: true
},
{
  icon: Eye,
  tag: "MOST ROMANTIC DATE NIGHT ON NJ BAY",
  title: "Panoramic Bay Views",
  body1: "Breathtaking 360° views of the New Jersey Bay, the Manhattan skyline, and the open water at golden hour.",
  body2: "The New Jersey Bay offers some of the most spectacular waterfront views on the East Coast. Watch the sun dip below the horizon while you soak — a view you'll never forget.",
  cta: "Book the Perfect Date Night",
  ctaHref: FAREHARBOR_URL,
  external: true,
  image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80",
  imageAlt: "Panoramic view of Manhattan skyline from New Jersey Bay at golden hour",
  imageLeft: false
}];


export default function RomanticSEOFeatures() {
  return (
    <section
      className="py-24 md:py-40 bg-sea-salt"
      aria-labelledby="romantic-features-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-4">
            The Experience
          </p>
          <h2
            id="romantic-features-heading"
            className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic">
            
            Everything You Need for the{' '}
            <em className="font-light italic text-sky-horizon not-italic" style={{ fontStyle: 'italic' }}>Perfect Escape</em>
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((f, i) =>
          <motion.div
            key={f.tag}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!f.imageLeft ? 'lg:grid-flow-dense' : ''}`}>
            
              {/* Image */}
              <div className={!f.imageLeft ? 'lg:col-start-2' : ''}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                  <img src="https://media.base44.com/images/public/69d4989a834518931660bae7/352c83ad9_Couple.jpg"

                alt={f.imageAlt} className="w-full h-full object-cover"

                loading="lazy"
                width="600"
                height="450" />
                
                </div>
              </div>

              {/* Content */}
              <div className={!f.imageLeft ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="w-10 h-10 rounded-xl bg-sky-horizon/10 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-sky-horizon" aria-hidden="true" />
                </div>
                <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-3">
                  {f.tag}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-light text-deep-atlantic mb-5">
                  {f.title}
                </h3>
                <p className="font-body text-mist-grey text-base leading-relaxed mb-4">{f.body1}</p>
                <p className="font-body text-mist-grey text-base leading-relaxed mb-6">{f.body2}</p>
                <a
                href={f.external ? f.ctaHref : undefined}
                target={f.external ? "_blank" : undefined}
                rel={f.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 font-body font-semibold text-sky-horizon text-sm hover:gap-3 transition-all focus-ring rounded-sm"
                aria-label={f.cta}>
                
                  {f.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}