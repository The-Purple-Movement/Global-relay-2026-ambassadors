import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

interface HeroProps {
  onJoinClick?: () => void;
  onLearnMoreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onLearnMoreClick }) => {
  const scrollToAbout = () => {
    if (onLearnMoreClick) {
      onLearnMoreClick();
    } else {
      const el = document.getElementById('section-founder');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#D0D8D0] text-dark-brand flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden select-none">
      
      {/* Background Image: Exact User Reference Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-exact-banner.jpg"
          alt="AI + Compassion Global Earth Horizon at Sunrise"
          className="w-full h-full object-cover object-right"
        />
        {/* Subtle left gradient overlay for immaculate typography contrast without obscuring earth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D0D8D0]/95 via-[#D0D8D0]/70 to-transparent md:w-[68%] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
          
          {/* Large Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-dark-brand leading-[1.02]"
          >
            AI + Compassion
            <span className="block font-normal text-slate-brand mt-1 sm:mt-2">
              Global Forum 2026
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-2xl sm:text-3xl font-medium tracking-wide text-dark-brand"
          >
            October 2–3
          </motion.h2>

          {/* Subheadline & Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg text-dark-brand/85 font-normal leading-relaxed max-w-xl"
          >
            Welcome to the first global cohort of AI+Compassion Global Forum ambassadors. The Forum unites innovators, policymakers, and cultural leaders to explore how artificial intelligence can serve humanity and the planet. Together, we’ll launch a global alliance, spark a new narrative, and activate projects that place compassion at the heart of technology.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            {/* Primary Pill Button */}
            <button
              onClick={onJoinClick}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white-brand bg-slate-brand hover:bg-dark-brand shadow-lg border border-slate-brand/40 transition-all duration-300 hover:scale-[1.02] focus:outline-none"
            >
              <span>Join as Ambassador</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-powder-brand" />
            </button>

            {/* Frosted Glass Secondary Button */}
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-dark-brand bg-white-brand/45 hover:bg-white-brand/75 border border-white-brand/80 backdrop-blur-md shadow-xs transition-all duration-300 hover:scale-[1.02] focus:outline-none"
            >
              <span>Learn More</span>
              <Play className="w-3.5 h-3.5 fill-current text-slate-brand ml-0.5" />
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-12 sm:mt-16 pt-8 border-t border-dark-brand/10 flex items-center gap-8 sm:gap-12"
          >
            {/* 24 Hours Live */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-light text-dark-brand tracking-tight">
                24
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-dark-brand/90 mt-1">
                HOURS
              </span>
            </div>

            <div className="w-[1px] h-10 bg-dark-brand/15" />

            {/* 12 Regions */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-light text-dark-brand tracking-tight">
                12
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-dark-brand/90 mt-1">
                REGIONS
              </span>
            </div>

            <div className="w-[1px] h-10 bg-dark-brand/15" />

            {/* 1 Global Relay */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-light text-dark-brand tracking-tight">
                1
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-dark-brand/90 mt-1">
                GLOBAL RELAY
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
