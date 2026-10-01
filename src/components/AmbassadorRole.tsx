import React from 'react';
import { motion } from 'framer-motion';

export const AmbassadorRole: React.FC = () => {
  return (
    <section 
      id="section-role"
      className="relative bg-mist-brand text-dark-brand py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-bluegrey-brand/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
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
                Your Role as Ambassador
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
              Carry the relay forward.
            </motion.h2>

            {/* Introductory Body Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-bluegrey-brand font-normal leading-relaxed max-w-xl"
            >
              As an Ambassador, your role doesn't stop at signing up. You'll bring new people from your region into the relay, follow the stream as it moves around the world, and take your own moment to share your story and work at a dedicated showcase after the relay, ethical, and compassionate, and you're one of the people helping build it.
            </motion.p>

            {/* 3 Bullet Points / Cards */}
            <motion.ul 
              className="mt-10 space-y-6 max-w-xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                {
                  title: "Bring Your Region to the Relay",
                  desc: "Recruit students, researchers, and changemakers from your region to register and join the conversation. Your referral code tracks who you bring in."
                },
                {
                  title: "Watch the Relay, Then Take Your Own Stage",
                  desc: "Follow the 24-hour stream as it passes from region to region. Then, at a dedicated showcase after the relay, share your story, your work, or your perspective, your own moment, separate from the live broadcast."
                },
                {
                  title: "Build Something That Outlasts the Relay",
                  desc: "Over the following 3-6 months, take one concrete idea, project, or piece of research from concept to execution, with support from your cohort and mentors."
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-taupe-brand text-taupe-brand text-[10px] sm:text-xs font-mono font-semibold transition-colors duration-300 group-hover:bg-taupe-brand group-hover:text-white-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-dark-brand font-medium text-sm sm:text-base leading-snug">{item.title}</h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-bluegrey-brand leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* Subtle editorial citation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-bluegrey-brand/15 flex items-center gap-4"
            >
              <div className="text-xs tracking-wider uppercase text-bluegrey-brand font-mono">
                12 REGIONS · 1 COHORT · 24 HOURS
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Photograph (~50% viewport width) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg border border-bluegrey-brand/20 bg-dark-brand"
            >
              <img
                src="/images/youth.jpg"
                alt="Ambassador carrying the compassion relay into their community"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
                loading="lazy"
              />
              
              {/* Subtle caption tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white-brand/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white-brand text-dark-brand flex items-center justify-between text-xs">
                <span className="font-medium tracking-wide">Regional Leadership · Cohort 2026</span>
                <span className="text-taupe-brand font-mono">#01–#12</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
