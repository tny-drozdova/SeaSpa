import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FAREHARBOR_URL = "https://fareharbor.com/embeds/book/seaspacruises/";

const navLinks = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Cruise for Two', href: '/cruise-for-two' },
  { label: 'Book a Party', href: '/book-a-party' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'About Us', href: '/#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-atlantic/95 backdrop-blur-md border-b-2 border-sky-horizon'
          : 'bg-deep-atlantic/90 backdrop-blur-sm'
      }`}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 focus-ring rounded-sm"
            aria-label="SeaSpa Cruises home"
          >
            <Anchor className="w-6 h-6 text-sky-horizon" aria-hidden="true" />
            <span className="font-heading text-xl md:text-2xl font-light text-sea-salt tracking-wider">
              SEA<span className="font-semibold">SPA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sea-salt/80 hover:text-sky-horizon text-sm font-body font-medium tracking-wide transition-colors duration-200 focus-ring rounded-sm py-1"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your cruise via FareHarbor"
            >
              <Button
                className="bg-sky-horizon text-deep-atlantic font-body font-semibold px-6 py-2 hover:bg-sky-horizon/90 focus-ring transition-all duration-200"
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your cruise via FareHarbor"
            >
              <Button size="sm" className="bg-sky-horizon text-deep-atlantic font-body font-semibold text-xs px-4 hover:bg-sky-horizon/90 focus-ring">
                Book Now
              </Button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-sea-salt p-2 focus-ring rounded-sm"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div id="mobile-menu" role="navigation" aria-label="Mobile navigation" className="lg:hidden pb-6 border-t border-sea-salt/10">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sea-salt/80 hover:text-sky-horizon hover:bg-sea-salt/5 px-4 py-3 rounded-md text-base font-body font-medium tracking-wide transition-colors focus-ring"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}