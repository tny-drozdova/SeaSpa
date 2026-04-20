import ContactForm from './ContactForm';
import DepartureDockInfo from './DepartureDockInfo';

export default function MapContactSection() {
  return (
    <section id="contact-us" className="bg-deep-atlantic py-24 md:py-32" aria-label="Location and Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8">
          <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-sea-salt">
            Set Sail From the Bay
          </h2>
        </div>

        {/* Map */}
        <div id="location-hot-tub-boat-NJ" className="rounded-lg overflow-hidden aspect-[16/9] md:aspect-[21/9] mb-8">
          <iframe
            title="SeaSpa Cruises location - 708 W Burk Ave, Wildwood, NJ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.123456789!2d-74.8330!3d38.9920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0c1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2s708%20W%20Burk%20Ave%2C%20Wildwood%2C%20NJ%2008260!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Departure Dock + Text or Call — below map */}
        <DepartureDockInfo />

        {/* Contact form — stacked below */}
        <div className="mt-12">
          <ContactForm inline />
        </div>
      </div>
    </section>
  );
}