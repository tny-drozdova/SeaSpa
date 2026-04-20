import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ExperienceCard({ image, title, description, linkTo, linkLabel, altText, linkText = 'Learn More' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-lg">
      
      <div className="aspect-[4/5] md:aspect-[3/4]">
        <img
          src={image}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width="600"
          height="800" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-deep-atlantic/90 via-deep-atlantic/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-heading text-2xl md:text-3xl font-light text-sea-salt mb-3">
          {title}
        </h3>
        <p className="text-[hsl(var(--muted))] mb-6 text-sm font-body leading-relaxed max-w-xs">
          {description}
        </p>
        <Link
          to={linkTo} className="text-sky-horizon text-sm font-semibold underline tracking-wide rounded-sm inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 focus-ring"

          aria-label={linkLabel}>
          
          {linkText}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>);

}

export default function ExperienceCards({ romanticImage, groupImage, uniqueImage }) {
  return (
    <section className="py-24 md:py-40 bg-deep-atlantic glass-rule" aria-labelledby="experiences-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Choose Your Experience
          </p>
          <h2
            id="experiences-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt mb-4">
            Every Occasion, One Bay
          </h2>
          <p className="text-[hsl(var(--border))] mx-auto text-base font-body md:text-lg max-w-xl">
            Whether it's a romantic escape or a celebration with your crew — we have the perfect cruise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <ExperienceCard
            image={romanticImage}
            title="Cruise for Two"
            description="Trade crowded dinners for a private soak on the bay. Just you, the water, and a view that keeps changing."
            linkTo="/cruise-for-two"
            linkLabel="Explore romantic cruises for two"
            linkText="Explore Romantic Cruises"
            altText="Couple enjoying a romantic hot tub boat cruise on New Jersey Bay at sunset" />

          <ExperienceCard
            image={groupImage}
            title="Group Celebrations"
            description="Bring your crew, set the vibe, and take the wheel. It's your floating celebration — birthdays, bachelorettes, and every occasion worth remembering."
            linkTo="/book-a-party"
            linkLabel="Plan your group party on the bay"
            linkText="Plan Your Party"
            altText="Group of friends having fun on a hot tub boat party on New Jersey Bay" />

          <ExperienceCard
            image={uniqueImage}
            title="Unique NJ Experience"
            description="There's nothing else like this in New Jersey. A hot tub you can drive, right here in Wildwood."
            linkTo="/unique-experiences"
            linkLabel="See what makes this a unique NJ experience"
            linkText="See What Makes It Unique"
            altText="Unique hot tub boat experience on Wildwood NJ bay" />
        </div>
      </div>
    </section>);
}