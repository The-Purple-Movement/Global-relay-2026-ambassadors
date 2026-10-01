import React from 'react';
import { FaEnvelope, FaGraduationCap, FaHandshake, FaBullhorn } from 'react-icons/fa';

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
              <img src="/Purple%20movement_leaf@4x.png" alt="Purple Movement" className="w-8 h-auto" />
              <div className="flex flex-col">
                <span className="font-serif text-sm font-bold leading-tight">Purple Movement</span>
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
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <a href="https://www.linkedin.com/company/ai-plus-compassion/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#163B32] hover:text-white hover:border-[#163B32] shadow-2xs hover:shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer" aria-label="Visit AI + Compassion on LinkedIn" title="LinkedIn"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
              <a href="https://www.instagram.com/aicompassion?utm_source=ig_web_button_share_sheet&amp;stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#163B32] hover:text-white hover:border-[#163B32] shadow-2xs hover:shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer" aria-label="Follow AI + Compassion on Instagram" title="Instagram"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
              <a href="https://www.youtube.com/@AICompassionGlobalForum" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#163B32] hover:text-white hover:border-[#163B32] shadow-2xs hover:shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer" aria-label="Subscribe to AI + Compassion on YouTube" title="YouTube"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>
              <a href="https://x.com/ai_compassion?s=20" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#163B32] hover:text-white hover:border-[#163B32] shadow-2xs hover:shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer" aria-label="Follow AI + Compassion on X" title="X"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
              <a href="https://www.facebook.com/profile.php?id=61581155761799" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#163B32] hover:text-white hover:border-[#163B32] shadow-2xs hover:shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer" aria-label="Connect with AI + Compassion on Facebook" title="Facebook"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
              <a href="https://discord.gg/qBbCNtca8N" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#163B32] hover:text-white hover:border-[#163B32] shadow-2xs hover:shadow-sm transition-all duration-300 transform hover:scale-110 cursor-pointer" aria-label="Join AI + Compassion Discord Community" title="Discord"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg></a>
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
