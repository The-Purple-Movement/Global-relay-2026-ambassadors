import React from 'react';
import { motion } from 'framer-motion';

export const HeroTransition: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#DFE5EA] via-[#E6ECEF] to-[#DFE5EA] text-dark-brand py-16 sm:py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-brand" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bluegrey-brand">
              OUR SHARED CHARTER
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-dark-brand tracking-tight text-balance">
            The Forum unites innovators, policymakers, and cultural leaders to explore how artificial intelligence can serve humanity and the planet.
          </p>

          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-bluegrey-brand max-w-2xl mx-auto">
            Together, we'll launch a global alliance, spark a new narrative, and activate projects that place compassion at the heart of technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
