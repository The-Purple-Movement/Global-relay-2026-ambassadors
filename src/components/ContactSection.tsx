import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Copy } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@compassionai.io");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="section-contact"
      className="relative bg-mist-brand text-dark-brand py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-bluegrey-brand/15"
    >
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
              Need Help?
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-dark-brand leading-[1.08]"
          >
            We're here if you need us.
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-normal text-bluegrey-brand leading-relaxed"
          >
            Questions about your role, the kit, or the relay itself, reach out any time.
          </motion.p>

          {/* Contact Action & Email Link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="mailto:info@compassionai.io"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-medium tracking-wider uppercase text-dark-brand border border-slate-brand/40 hover:border-dark-brand hover:bg-white-brand shadow-xs transition-all duration-300 hover:translate-x-0.5"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-slate-brand" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="mailto:info@compassionai.io"
                className="text-sm sm:text-base font-mono text-slate-brand hover:underline underline-offset-4"
              >
                info@compassionai.io
              </a>
              
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded text-bluegrey-brand hover:text-slate-brand transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-slate-brand" />
                ) : (
                  <Copy className="w-4 h-4 opacity-70 hover:opacity-100" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
