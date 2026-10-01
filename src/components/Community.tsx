import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Users } from 'lucide-react';

interface CommunityProps {
  onJoinWhatsApp?: () => void;
}

export const Community: React.FC<CommunityProps> = ({ onJoinWhatsApp }) => {
  const handleWhatsAppRedirect = () => {
    if (onJoinWhatsApp) {
      onJoinWhatsApp();
    } else {
      window.open('https://chat.whatsapp.com/sample-ambassador-invite', '_blank', 'noopener,noreferrer');
    }
  };

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
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-powder-brand">
            Connect With Fellow Ambassadors
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white-brand leading-[1.08] text-balance"
        >
          The relay continues beyond the screen.
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
            This cohort spans every region in the relay, and the conversation doesn't stop at onboarding.
          </p>
          <p className="text-white-brand/90">
            Join the WhatsApp community to meet ambassadors from around the world, ask questions, and coordinate before October 2nd.
          </p>
        </motion.div>

        {/* Cohort Meta Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 mb-10 text-xs text-powder-brand/70"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-taupe-brand" />
            <span>12 Regional Channels</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-taupe-brand" />
            <span>Private Cohort Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-taupe-brand" />
            <span>Direct Access to Program Curators</span>
          </div>
        </motion.div>

        {/* CTA: [ JOIN THE WHATSAPP GROUP → ] */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={handleWhatsAppRedirect}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-dark-brand bg-white-brand hover:bg-mist-brand shadow-lg transition-all duration-300 hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-powder-brand"
          >
            <span>JOIN THE WHATSAPP GROUP</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-slate-brand" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
