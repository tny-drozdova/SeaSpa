import { useLocation, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Anchor, Home, ArrowLeft } from 'lucide-react';

const FAREHARBOR_URL = "/booking";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  const { data: authData, isFetched } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const user = await base44.auth.me();
        return { user, isAuthenticated: true };
      } catch {
        return { user: null, isAuthenticated: false };
      }
    }
  });

  return (
    <div className="min-h-screen bg-deep-atlantic flex items-center justify-center px-4">
      {/* Subtle wave bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, hsl(197 80% 44%), transparent)' }} />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Anchor icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-sky-horizon/15 border border-sky-horizon/30 flex items-center justify-center">
            <Anchor className="w-9 h-9 text-sky-horizon" aria-hidden="true" />
          </div>
        </div>

        {/* 404 */}
        <p className="font-body text-sky-horizon text-sm font-semibold tracking-widest uppercase mb-3">Error 404</p>
        <h1 className="font-heading text-5xl md:text-7xl font-light text-sea-salt mb-4 tracking-wide">
          Lost at Sea
        </h1>
        <p className="font-body text-mist-grey text-base leading-relaxed mb-10 max-w-sm mx-auto">
          This page drifted off. Let's get you back to the bay.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body font-semibold text-deep-atlantic bg-sky-horizon px-7 py-3 rounded-md hover:bg-sky-horizon/90 transition-colors focus-ring"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back Home
          </Link>
          <a
            href={FAREHARBOR_URL}
            className="inline-flex items-center gap-2 font-body font-semibold text-sea-salt border border-sea-salt/30 px-7 py-3 rounded-md hover:border-sky-horizon hover:text-sky-horizon transition-colors focus-ring"
          >
            Book a Cruise
          </a>
        </div>

        {/* Admin note */}
        {isFetched && authData?.isAuthenticated && authData?.user?.role === 'admin' && (
          <div className="mt-10 p-4 bg-white/5 border border-white/10 rounded-xl text-left">
            <p className="font-body text-xs font-semibold text-sky-horizon uppercase tracking-widest mb-1">Admin Note</p>
            <p className="font-body text-mist-grey text-sm leading-relaxed">
              Page <span className="text-sea-salt font-medium">"{pageName}"</span> doesn't exist yet. Ask the AI to implement it.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}