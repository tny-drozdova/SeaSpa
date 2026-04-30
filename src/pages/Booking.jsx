import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FAREHARBOR_EMBED_URL = "https://fareharbor.com/embeds/book/seaspacruises/?full-items=yes";

export default function Booking() {
  useEffect(() => {
    document.title = "Book Your Cruise | SeaSpa Cruises";
  }, []);

  return (
    <div className="min-h-screen bg-deep-atlantic">
      {/* Minimal header bar */}
      <div className="bg-deep-atlantic border-b border-sea-salt/10 py-4 px-4 pt-20">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-mist-grey hover:text-sky-horizon transition-colors focus-ring rounded-sm"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            Back to SeaSpa
          </Link>
          <div className="flex-1 text-center">
            <p className="font-heading text-sea-salt text-sm font-light tracking-widest uppercase">
              Book Your Experience
            </p>
          </div>
          <div className="w-24" aria-hidden="true" />
        </div>
      </div>

      {/* FareHarbor embed */}
      <div className="w-full min-h-[calc(100vh-80px)]">
        <iframe
          src={FAREHARBOR_EMBED_URL}
          title="Book your SeaSpa Cruise via FareHarbor"
          className="w-full min-h-[calc(100vh-80px)] border-0"
          loading="lazy"
          allow="payment"
        />
      </div>
    </div>
  );
}