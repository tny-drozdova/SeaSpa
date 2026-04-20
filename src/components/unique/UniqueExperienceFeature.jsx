import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const cards = [
{
  time: "9:00 AM",
  label: "Early Bird Cruise",
  headline: "Start the Day on the Water",
  body: "Slip out at 9:00 AM when the bay is glassy and calm. The air is fresh, the light is soft, and the pace feels unhurried — the kind of morning that sets the tone for the whole day. Coffee, conversation, and a private soak before the beach crowds even wake up.",
  image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
  alt: "Calm Wildwood bay at early morning with soft golden light"
},
{
  time: "8:00 PM",
  label: "Sunset Cruise",
  headline: "Golden Hour, Reimagined",
  body: "At 8:00 PM, the sky puts on a show over the bay. Warm light stretches across the water as the sun drops behind the marshlands. It's quiet, cinematic, and just the right kind of unforgettable.",
  image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&q=80",
  alt: "Sunset over Wildwood NJ bay with warm golden reflections"
},
{
  time: "Evening",
  label: "Date Night",
  headline: "A Date Unlike Any Other",
  body: "Trade the usual dinner-and-a-movie for something they'll actually remember. Warm water, a glowing bay sky, and the two of you — completely alone. It's effortlessly romantic without trying too hard.",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  alt: "Romantic evening on New Jersey Bay with warm sunset light"
},
{
  time: "Any Time",
  label: "Bachelorette Party",
  headline: "The Send-Off She Deserves",
  body: "Skip the predictable night out. Soak in the hot tub, pop the champagne, and cruise the bay with your squad. It's private, gorgeous, and completely unforgettable — just like the bride.",
  image: "https://images.unsplash.com/photo-1543965170-e399d7e6fc10?w=800&q=80",
  alt: "Group of friends celebrating a bachelorette party on a boat"
}];


export default function UniqueExperienceFeature() {
  return (
    <section className="py-24 md:py-32 bg-sea-salt" aria-labelledby="unique-feature-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            One of a Kind
          </p>
          <h2 id="unique-feature-heading" className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic mb-6">
            Your Own Floating Spa
          </h2>
          <p className="font-body text-mist-grey text-base md:text-lg leading-relaxed">This isn't a boat tour — it's your own floating spa, and you're at the helm. Glide across Wildwood's back bay in warm water, surrounded by open sky and quiet marshlands. The motor is smooth and nearly silent, so all you hear is laughter, music, and the water around you. 

          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, i) =>
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-deep-atlantic/8 bg-white shadow-sm">
            
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src="https://media.base44.com/images/public/69d4989a834518931660bae7/92833de5a_Smiles_n_sunshine.jpg"

              alt={card.alt} className="w-full h-full object-cover"

              loading="lazy"
              width="800"
              height="450" />
              
                <div className="absolute top-4 left-4">
                  <span className="font-body text-xs font-semibold tracking-widest uppercase bg-sky-horizon text-deep-atlantic px-3 py-1 rounded-full">
                    {card.time} · {card.label}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl md:text-3xl font-light text-deep-atlantic mb-4">
                  {card.headline}
                </h3>
                <p className="font-body text-mist-grey text-base leading-relaxed mb-6">
                  {card.body}
                </p>
                <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" aria-label={`Book the ${card.label} via FareHarbor`}>
                  <Button className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-6 border-[3px] border-transparent hover:bg-white hover:text-sky-horizon hover:border-[#1697CA] focus-ring transition-all">
                    Book This Experience
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}