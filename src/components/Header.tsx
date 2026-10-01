import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
  currentView: 'home' | 'ambassadors';
  onNavigate: (view: 'home' | 'ambassadors') => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [activeNav, setActiveNav] = useState<'About' | 'Forum' | 'Ambassador' | 'Get Involved'>('Ambassador');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const handleNavClick = (item: 'About' | 'Forum' | 'Ambassador' | 'Get Involved') => {
  //   setActiveNav(item);
  //   if (item === 'Ambassador') {
  //     if (currentView !== 'home') {
  //       onNavigate('home');
  //     }
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   } else if (item === 'About') {
  //     const el = document.getElementById('section-founder') || document.getElementById('section-role');
  //     el?.scrollIntoView({ behavior: 'smooth' });
  //   } else if (item === 'Forum') {
  //     const el = document.getElementById('section-role') || document.getElementById('section-community');
  //     el?.scrollIntoView({ behavior: 'smooth' });
  //   } else if (item === 'Get Involved') {
  //     const el = document.getElementById('section-tasks') || document.getElementById('section-kit');
  //     el?.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#E3E8EC]/85 backdrop-blur-md border-b border-bluegrey-brand/15 py-3 shadow-xs'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* TOP LEFT: AI + COMPASSION Logo & Wordmark */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-brand"
          aria-label="AI + Compassion Global Forum 2026 Home"
        >
          {/* Official Colorful Emblem */}
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logoai.png"
              alt="AI + Compassion Emblem"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="block text-[13px] font-bold tracking-[0.16em] uppercase text-dark-brand">
              AI + COMPASSION
            </span>
            <span className="block text-[9px] tracking-[0.24em] uppercase text-bluegrey-brand font-medium">
              GLOBAL FORUM 2026
            </span>
          </div>
        </button>

        {/* TOP CENTER: Glassmorphic Capsule Menu (as in reference image) */}
        {/* <nav className="hidden md:flex items-center bg-white-brand/35 backdrop-blur-md border border-white-brand/60 rounded-full px-2 py-1 shadow-xs">
          {(['About', 'Forum', 'Ambassador', 'Get Involved'] as const).map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-dark-brand font-semibold'
                    : 'text-dark-brand/70 hover:text-dark-brand hover:bg-white-brand/20'
                }`}
              >
                <span>{item}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-dark-brand rounded-full" />
                )}
              </button>
            );
          })}
        </nav> */}

        {/* TOP RIGHT: Join as Ambassador Pill Button */}
        <div className="flex items-center gap-3">
          {/* 
          {currentView === 'ambassadors' ? (
            <button
              onClick={() => onNavigate('home')}
              className={`text-xs font-semibold tracking-wider px-3 py-1.5 transition-colors ${
                isScrolled ? 'text-slate-brand hover:text-dark-brand' : 'text-white-brand/90 hover:text-white-brand'
              }`}
            >
              ← RETURN HOME
            </button>
          ) : (
            <button
              onClick={() => onNavigate('ambassadors')}
              className={`hidden lg:inline-flex items-center text-xs font-medium px-3 py-1.5 transition-colors ${
                isScrolled ? 'text-dark-brand/80 hover:text-dark-brand' : 'text-white-brand/90 hover:text-white-brand'
              }`}
            >
              Cohort Directory
            </button>
          )}
          */}

          <button
            onClick={onJoinClick}
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white-brand bg-slate-brand hover:bg-dark-brand border border-white-brand/20 shadow-md transition-all duration-300 hover:scale-[1.02] focus:outline-none"
          >
            <span>Join The Relay</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-powder-brand" />
          </button>
        </div>

      </div>
    </header>
  );
};
