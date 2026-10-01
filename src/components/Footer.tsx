import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'ambassadors') => void;
  onJoinClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onJoinClick }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('section-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-brand text-white-brand py-16 sm:py-20 px-6 sm:px-8 lg:px-12 border-t border-slate-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        
        {/* Left: Brand with official logo emblem, Dates, Route */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white-brand shrink-0">
              <img
                src="/ai-compassion-logo.svg"
                alt="AI + Compassion Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="block text-sm font-bold tracking-[0.22em] uppercase text-white-brand">
                AI + COMPASSION
              </span>
              <span className="block text-xs font-normal tracking-[0.14em] text-powder-brand/70 mt-0.5">
                Global Forum 2026
              </span>
            </div>
          </div>

          <div className="text-xs text-powder-brand/80 space-y-1">
            <p>October 2–3, 2026</p>
            <p className="font-mono text-[11px] text-taupe-brand">
              Kyoto → World → Kyoto · 12 Regions · 24 Hours, Live
            </p>
          </div>
        </div>

        {/* Right: Minimal Footer Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium tracking-wider text-powder-brand/70">
          <button
            onClick={scrollToContact}
            className="hover:text-white-brand transition-colors focus:outline-none"
          >
            Contact
          </button>
          <button
            onClick={() => onNavigate('ambassadors')}
            className="hover:text-white-brand transition-colors focus:outline-none"
          >
            Ambassadors
          </button>
          <button
            onClick={onJoinClick}
            className="hover:text-white-brand transition-colors focus:outline-none"
          >
            Join the Relay
          </button>
          <button
            onClick={() => alert("AI + Compassion Privacy Charter: We adhere to minimal telemetry and ethical data stewardship.")}
            className="hover:text-white-brand transition-colors focus:outline-none"
          >
            Privacy
          </button>
          <button
            onClick={() => alert("Terms: Participation is governed by the Futokoro Global Ambassador Charter.")}
            className="hover:text-white-brand transition-colors focus:outline-none"
          >
            Terms
          </button>
        </div>

      </div>

      {/* Bottom copyright line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white-brand/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-powder-brand/50">
        <p>© 2026 AI + Compassion Initiative. All rights reserved.</p>
        <p className="font-mono">Theme: Futokoro (懐)</p>
      </div>
    </footer>
  );
};
