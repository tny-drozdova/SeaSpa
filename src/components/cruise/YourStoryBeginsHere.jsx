import { motion } from 'framer-motion';

// Add more images here as needed — each gets its own caption
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80",
    alt: "Romantic proposal on a bay at sunset — a couple sharing a special moment on the water",
    caption: "The perfect moment for a proposal on New Jersey Bay.",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Stunning golden sunset reflecting on New Jersey Bay waters at dusk",
    caption: "Golden hour views from the water.",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80",
    alt: "Serene calm turquoise bay water stretching to the open horizon",
    caption: "Open water, open sky — pure serenity.",
    tall: false,
  },
];

const panoramic = {
  src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80",
  alt: "New Jersey Bay night panoramic with city skyline lights reflecting on calm water",
  caption: "New Jersey Bay — where moments become memories.",
};

export default function YourStoryBeginsHere() {
  return (
    <section className="py-24 md:py-40 bg-sea-salt" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="story-heading"
          className="font-heading text-3xl md:text-5xl font-light text-deep-atlantic text-center mb-12"
        >
          Your Story Begins Here
        </h2>

        {/* Top grid: tall left + two stacked right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
        >
          {/* Left tall image */}
          <div className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: '420px' }}>
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="700"
              />
            </div>
            {galleryImages[0].caption && (
              <p className="font-body text-mist-grey text-xs mt-2 px-1 italic">{galleryImages[0].caption}</p>
            )}
          </div>

          {/* Right two stacked */}
          <div className="flex flex-col gap-4">
            {galleryImages.slice(1).map((img, i) => (
              <div key={i} className="flex flex-col">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="337"
                  />
                </div>
                {img.caption && (
                  <p className="font-body text-mist-grey text-xs mt-2 px-1 italic">{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom panoramic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[21/7] md:aspect-[21/6]">
            <img
              src={panoramic.src}
              alt={panoramic.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              width="1200"
              height="343"
            />
            <div className="absolute inset-0 bg-deep-atlantic/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-heading italic text-sea-salt text-lg md:text-2xl font-light px-6 text-center">
                {panoramic.caption}
              </p>
            </div>
          </div>
          <p className="font-body text-mist-grey text-xs mt-2 px-1 italic text-center">{panoramic.alt}</p>
        </motion.div>
      </div>
    </section>
  );
}