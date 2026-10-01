import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RELAY_REGIONS } from '../data/relayRegions';
import { Clock, Compass, Globe } from 'lucide-react';

export const GlobalRelay: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState(1);

  return (
    <section 
      id="section-relay"
      className="relative bg-[#DFE5EA] text-dark-brand py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-bluegrey-brand/15"
    >
      {/* Soft background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#DFE5EA] via-[#E8ECEF] to-[#DFE5EA] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-slate-brand" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
              What You're Part Of
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-dark-brand leading-[1.08]"
          >
            One relay.<br />
            One planet.<br />
            Twenty-four hours.
          </motion.h2>

          <div className="mt-6 space-y-3 text-base sm:text-lg text-bluegrey-brand font-normal leading-relaxed max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              One relay. Twelve regions. Twenty-four hours, without a break in the stream. Starting in Kyoto and circling the entire planet before returning home.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-dark-brand font-medium"
            >
              This year's theme, Futokoro (懐), the embrace that holds us, asks how we responsibly receive AI into our homes, our work, and our daily lives.
            </motion.p>
          </div>
        </div>

        {/* 12 Regions Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RELAY_REGIONS.map((region, idx) => {
            const isSelected = selectedRegionId === region.id;
            return (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                onClick={() => setSelectedRegionId(region.id)}
                className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white-brand/90 border-slate-brand shadow-md scale-[1.01]'
                    : 'bg-white-brand/45 hover:bg-white-brand/75 border-white-brand/70 shadow-xs'
                }`}
              >
                <div>
                  {/* Top line with region number & UTC time */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono font-bold text-slate-brand px-2.5 py-1 rounded-md bg-slate-brand/10">
                      REGION {region.regionNumber}
                    </span>
                    <div className="flex items-center gap-1.5 text-bluegrey-brand font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-brand" />
                      <span>{region.timeUtc}</span>
                    </div>
                  </div>

                  {/* Region Title & Major Cities */}
                  <h3 className="text-xl font-semibold text-dark-brand group-hover:text-slate-brand transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-xs text-bluegrey-brand mt-1 font-medium flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 opacity-70" />
                    <span>{region.cities}</span>
                  </p>

                  {/* Programmatic Theme Focus */}
                  <div className="mt-4 pt-3 border-t border-dark-brand/5 text-xs text-dark-brand/80 leading-relaxed">
                    <div className="flex items-start gap-1.5 text-slate-brand font-medium mb-1">
                      <Compass className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Focus:</span>
                    </div>
                    {region.themeFocus}
                  </div>
                </div>

                {/* Host Info */}
                <div className="mt-4 pt-3 border-t border-dark-brand/5 flex items-center justify-between text-[11px] text-bluegrey-brand">
                  <span>Host: {region.hosts}</span>
                  {idx === 0 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-taupe-brand/20 text-dark-brand">
                      Kyoto Origin
                    </span>
                  )}
                  {idx === 11 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-slate-brand text-white-brand">
                      Relay Finale
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
