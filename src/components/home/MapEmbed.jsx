export default function MapEmbed() {
  return (
    <section
      className="py-24 md:py-32 bg-deep-atlantic glass-rule"
      aria-labelledby="map-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Find Us
          </p>
          <h2
            id="map-heading"
            className="font-heading text-3xl md:text-5xl font-light text-sea-salt"
          >
            Set Sail From the Bay
          </h2>
        </div>

        <div id="find-us" className="rounded-lg overflow-hidden aspect-[16/9] md:aspect-[21/9]">
          <iframe
            title="SeaSpa Cruises location on New Jersey Bay"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96906.63752382657!2d-74.10832924026445!3d40.693998736485574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250d225bfafdd%3A0x249f013a2cd25d9!2sJersey%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}