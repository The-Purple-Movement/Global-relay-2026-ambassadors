import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section 
      id="section-community"
      className="relative bg-dark-brand text-white-brand py-28 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Atmospheric Image with subtle slow motion */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
        <img
          src="/images/community-bg.jpg"
          alt="Global planetary connections"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-brand via-dark-brand/70 to-dark-brand/85" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white-brand leading-[1.08] text-balance"
        >
          Connect With Fellow Ambassadors
        </motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8 space-y-4 text-sm sm:text-base md:text-lg text-powder-brand/85 font-normal leading-relaxed max-w-2xl"
        >
          <p>
            This cohort spans every region in the relay, and the conversation doesn't stop at onboarding. Join the WhatsApp community to meet ambassadors from around the world.
          </p>
        </motion.div>


        {/* CTA: [ JOIN THE WHATSAPP GROUP → ] */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://chat.whatsapp.com/JEjPQD4vKjnBdfaODrlgOS?s=cl&p=i&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-dark-brand bg-white-brand hover:bg-mist-brand shadow-lg transition-all duration-300 hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-powder-brand"
          >
            <span>JOIN THE WHATSAPP GROUP</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-slate-brand" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
