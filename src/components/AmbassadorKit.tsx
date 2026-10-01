import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AmbassadorKit: React.FC = () => {
  /*
  const kitItems = [
    {
      number: "01",
      title: "Your LinkedIn Ambassador Badge",
      tag: "PNG / SVG",
    },
    {
      number: "02",
      title: "Your Twibbon frame",
      tag: "Avatar Tool",
    },
    {
      number: "03",
      title: "Shareable posts, captions & reel script",
      tag: "Copy Kit",
    },
    {
      number: "04",
      title: "Full instructions & hashtags",
      tag: "PDF Guide",
    },
  ];
  */

  return (
    <section 
      id="section-kit"
      className="relative bg-mist-brand text-dark-brand py-20 sm:py-28 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-bluegrey-brand/15"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-dark-brand leading-[1.08]"
          >
            Your Ambassador Kit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-bluegrey-brand leading-relaxed"
          >
            Everything you need to represent your region, ready to use.
          </motion.p>
        </div>

        {/* Minimalist Typographic List - Commented out */}
        {/*
        <div className="divide-y divide-bluegrey-brand/20 border-t border-b border-bluegrey-brand/20">
          {kitItems.map((item, idx) => (
            <motion.a
              href="https://drive.google.com/drive/folders/1qN82NAxYtPH0VkSPf9eSMdWQzikBxu4-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group py-6 sm:py-7 transition-all duration-300 hover:px-2 cursor-pointer flex items-center justify-between gap-4 hover:bg-white-brand/40"
            >
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="text-lg sm:text-xl font-mono text-bluegrey-brand transition-colors duration-300 group-hover:text-taupe-brand">
                  {item.number}
                </span>
                <h3 className="text-lg sm:text-2xl font-light text-dark-brand tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-bluegrey-brand px-2.5 py-1 bg-white-brand/70 rounded border border-bluegrey-brand/15 group-hover:border-taupe-brand/30 transition-colors">
                  {item.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        */}

        {/* CTAs: [ ACCESS THE FULL KIT → ] and [ YOUR TWIBBON FRAME → ] */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center gap-8 sm:gap-12"
        >
          <a
            href="https://drive.google.com/drive/folders/1qN82NAxYtPH0VkSPf9eSMdWQzikBxu4-?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-dark-brand hover:text-slate-brand transition-all duration-300"
          >
            <span className="border-b border-dark-brand group-hover:border-slate-brand pb-0.5">
              ACCESS THE FULL KIT
            </span>
            <div className="w-7 h-7 rounded-full bg-slate-brand text-white-brand flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-dark-brand">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-dark-brand hover:text-slate-brand transition-all duration-300"
          >
            <span className="border-b border-dark-brand group-hover:border-slate-brand pb-0.5">
              YOUR TWIBBON FRAME
            </span>
            <div className="w-7 h-7 rounded-full bg-slate-brand text-white-brand flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-dark-brand">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
