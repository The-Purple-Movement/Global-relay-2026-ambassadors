import React from 'react';
import { FaDiscord, FaEnvelope, FaGraduationCap, FaHandshake, FaBullhorn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        
        {/* Left: Brand with official logo emblem, Dates, Route */}
        <div className="space-y-6 lg:max-w-sm">
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

          <div className="pt-4 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-powder-brand/50">Partnered Foundation</span>
            <div className="flex items-center gap-3 bg-white-brand/5 border border-white-brand/10 rounded-xl px-4 py-3 w-max">
              <img src="/goi-peace.svg" alt="Goi Peace Foundation" className="w-8 h-auto brightness-0 invert opacity-80" />
              <div className="flex flex-col">
                <span className="font-serif text-sm font-bold leading-tight">Goi Peace Foundation</span>
                <span className="text-[9px] uppercase tracking-widest text-powder-brand/50">Official Partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Contact Links */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-powder-brand/50">Have a specific question?</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              { label: "General inquiries", email: "connect@compassionai.io", icon: <FaEnvelope className="text-taupe-brand" /> },
              { label: "Academic partnerships", email: "connect@compassionai.io", icon: <FaGraduationCap className="text-taupe-brand" /> },
              { label: "Sponsorship opportunities", email: "jsuto@SCUBEDLLC.com", icon: <FaHandshake className="text-taupe-brand" /> },
              { label: "Media inquiries", email: "connect@compassionai.io", icon: <FaBullhorn className="text-taupe-brand" /> }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-powder-brand/50 mb-1">
                  {item.label}
                </span>
                <a 
                  href={`mailto:${item.email}`}
                  className="flex items-center gap-2 text-xs font-medium text-powder-brand hover:text-white-brand transition-colors"
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span className="underline underline-offset-4 decoration-white-brand/20 group-hover:decoration-taupe-brand">
                    {item.email}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Socials & Navigation */}
        <div className="flex flex-col items-start lg:items-end gap-8">
          <div className="flex flex-col items-start lg:items-end gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-powder-brand/50">Connect With Us</span>
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/ai_compassion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white-brand/5 rounded-full hover:bg-white-brand/15 transition-all border border-white-brand/10 text-powder-brand hover:text-white-brand"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={18} />
              </a>
              <a 
                href="https://discord.com/invite/3hzvqf4qJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white-brand/5 rounded-full hover:bg-white-brand/15 transition-all border border-white-brand/10 text-powder-brand hover:text-white-brand"
                aria-label="Discord"
              >
                <FaDiscord size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 text-xs font-medium tracking-wider text-powder-brand/70">
            <button onClick={scrollToContact} className="hover:text-white-brand transition-colors">Contact Form</button>
            <button onClick={() => onNavigate('ambassadors')} className="hover:text-white-brand transition-colors">Ambassadors</button>
            <button onClick={onJoinClick} className="hover:text-white-brand transition-colors">Join the Relay</button>
          </div>
        </div>

      </div>

      {/* Bottom copyright line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white-brand/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-powder-brand/50">
        <div className="flex flex-wrap items-center gap-4">
          <p>© 2026 AI + Compassion Initiative. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => alert("AI + Compassion Privacy Charter: We adhere to minimal telemetry and ethical data stewardship.")} className="hover:text-white-brand transition-colors">Privacy</button>
            <button onClick={() => alert("Terms: Participation is governed by the Futokoro Global Ambassador Charter.")} className="hover:text-white-brand transition-colors">Terms</button>
          </div>
        </div>
        <p className="font-mono">Theme: Futokoro (懐)</p>
      </div>
    </footer>
  );
};
