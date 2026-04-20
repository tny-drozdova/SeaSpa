import { MapPin, Phone } from 'lucide-react';

export default function DepartureDockInfo() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
      {/* Departure Dock */}
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-sky-horizon flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-1">
            Departure Dock
          </p>
          <p className="font-heading text-sea-salt text-base font-light">708 W Burk Ave</p>
          <p className="font-body text-sea-salt/70 text-sm">Wildwood, NJ 08260</p>
        </div>
      </div>

      {/* Text or Call */}
      <div className="flex items-start gap-3">
        <Phone className="w-5 h-5 text-sky-horizon flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-1">
            Text or Call Us
          </p>
          <a
            href="tel:9999999999"
            className="font-heading text-sea-salt text-base font-light hover:text-sky-horizon transition-colors focus-ring rounded-sm"
          >
            999-999-9999
          </a>
          <p className="font-body text-sea-salt/70 text-sm">We reply fast!</p>
        </div>
      </div>
    </div>
  );
}