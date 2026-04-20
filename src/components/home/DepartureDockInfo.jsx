import { MapPin, Phone } from 'lucide-react';

export default function DepartureDockInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
      {/* Departure Dock */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
        <div className="p-2.5 rounded-lg bg-sky-horizon/20 flex-shrink-0">
          <MapPin className="w-5 h-5 text-sky-horizon" aria-hidden="true" />
        </div>
        <div>
          <p className="font-body text-sky-horizon text-xs font-semibold tracking-widest uppercase mb-1">
            Departure Dock
          </p>
          <p className="font-heading text-sea-salt text-base font-light">708 W Burk Ave</p>
          <p className="font-body text-sea-salt/70 text-sm">Wildwood, NJ 08260</p>
        </div>
      </div>

      {/* Text or Call */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
        <div className="p-2.5 rounded-lg bg-sky-horizon/20 flex-shrink-0">
          <Phone className="w-5 h-5 text-sky-horizon" aria-hidden="true" />
        </div>
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