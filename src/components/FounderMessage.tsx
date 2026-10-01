import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface FounderMessageProps {
  onOpenVideoModal?: () => void;
}

export const FounderMessage: React.FC<FounderMessageProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section 
      id="section-founder" 
      className="relative bg-mist-brand text-dark-brand py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
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
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              {/* High-res Video Frame Thumbnail (2:04) */}
              <img
                src="/images/founder-video-thumbnail.jpg"
                alt="Jun Suto - AI + Compassion Welcome Message"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-dark-brand/10 transition-opacity duration-300 group-hover:bg-dark-brand/20" />

              {/* Center Minimal Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white-brand/90 hover:bg-white-brand text-slate-brand flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-300 border border-white-brand focus:outline-none"
                  aria-label="Play welcome message video"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1 text-slate-brand" />
                </motion.button>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/t6MaA4dvs6U?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  );
};
