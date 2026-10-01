import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Maximize2, Pause } from 'lucide-react';

interface FounderMessageProps {
  onOpenVideoModal?: () => void;
}

export const FounderMessage: React.FC<FounderMessageProps> = ({ onOpenVideoModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (onOpenVideoModal) {
      onOpenVideoModal();
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      id="section-founder" 
      className="relative bg-mist-brand text-dark-brand py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
              Hear from Jun
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-dark-brand"
          >
            A welcome from Jun.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-normal text-bluegrey-brand leading-relaxed max-w-xl"
          >
            Before anything else, a welcome from Jun Suto, Founder of AI + Compassion, on what this relay is, and why you're part of it.
          </motion.p>
        </div>

        {/* 16:9 Large Premium Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video w-full rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-xl border border-bluegrey-brand/20 bg-dark-brand group cursor-pointer"
          onClick={handlePlayToggle}
        >
          {/* Poster Image */}
          <img
            src="/images/founder-jun-suto.jpg"
            alt="Jun Suto, Founder of AI + Compassion"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-brand/80 via-dark-brand/20 to-transparent transition-opacity duration-300 group-hover:opacity-75" />

          {/* Video Status / Founder Name Badge */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-white-brand/90 text-dark-brand backdrop-blur-md shadow-sm">
              KYOTO STUDIO
            </span>
            <span className="hidden sm:inline-block text-xs font-light text-white-brand/80">
              Jun Suto · Founder
            </span>
          </div>

          {/* Center Minimal Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white-brand/90 hover:bg-white-brand text-slate-brand flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-300 border border-white-brand focus:outline-none"
              aria-label="Play welcome message video"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5 text-slate-brand" />
              ) : (
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-slate-brand" />
              )}
            </motion.button>
          </div>

          {/* Bottom Video Bar */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10 flex items-center justify-between text-white-brand/90">
            <div className="text-xs sm:text-sm font-medium tracking-wide">
              "Futokoro (懐) — The embrace that holds humanity and technology."
            </div>
            <div className="flex items-center gap-3 text-white-brand/70">
              <span className="text-[11px] font-mono">03:45</span>
              <Volume2 className="w-4 h-4 hidden sm:block" />
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
