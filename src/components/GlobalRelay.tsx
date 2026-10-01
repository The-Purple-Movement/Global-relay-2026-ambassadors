import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RELAY_DATA } from '../data/relayRegions';
import { MapPin, Clock, User, ArrowRight, Activity } from 'lucide-react';

export const GlobalRelay: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSegment = RELAY_DATA[activeIndex];

  return (
    <section 
      id="section-relay"
      className="bg-white-brand text-dark-brand py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-mist-brand/50"
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-dark-brand"
            >
              The 24-Hour Global Relay
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-sm sm:text-base md:text-lg font-normal text-bluegrey-brand leading-relaxed max-w-xl"
            >
              One relay. Twelve regions. Twenty-four hours, without a break in the stream. Starting in Kyoto and circling the entire planet before returning home.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-orange-500/20 bg-orange-50 text-orange-600 text-sm font-medium shrink-0"
          >
            <Activity className="w-4 h-4" />
            Unbroken Stream - 00:00 to 24:00 UTC
          </motion.div>
        </div>

        {/* Scrollable Timeline Cards */}
        <div className="relative mb-12">
          {/* Progress Bar Background */}
          <div className="absolute bottom-[20px] left-0 right-0 h-3 bg-mist-brand rounded-full overflow-hidden">
             <div 
               className="h-full bg-gradient-to-r from-purple-500/20 to-purple-500/60 rounded-full transition-all duration-500 ease-out" 
               style={{ width: `${((activeIndex + 1) / RELAY_DATA.length) * 100}%` }}
             />
          </div>

          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-10 pt-2 hide-scrollbar snap-x snap-mandatory">
            {RELAY_DATA.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`
                    relative shrink-0 w-56 p-5 rounded-2xl text-left transition-all duration-300 snap-start
                    border 
                    ${isActive 
                      ? 'border-purple-brand bg-purple-brand/5 shadow-md shadow-purple-brand/5 scale-[1.02]' 
                      : 'border-bluegrey-brand/10 bg-white hover:border-purple-brand/30 hover:bg-mist-brand'}
                  `}
                >
                  <div className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${isActive ? 'text-purple-brand' : 'text-bluegrey-brand'}`}>
                    ZONE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className={`font-semibold text-lg mb-1 truncate transition-colors ${isActive ? 'text-dark-brand' : 'text-slate-brand'}`}>
                    {item.segment}
                  </h3>
                  <p className="text-xs text-bluegrey-brand flex items-center gap-1.5 mt-2">
                    <Clock className="w-3 h-3" />
                    {item.utc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expanded View */}
        <div className="bg-mist-brand/50 rounded-[32px] p-6 sm:p-10 border border-bluegrey-brand/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-brand to-orange-500" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Segment & Region */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-brand/10 text-purple-brand text-xs font-bold tracking-widest uppercase mb-6">
                  RELAY STAGE {activeIndex + 1} OF {RELAY_DATA.length}
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark-brand tracking-tight mb-6">
                  {activeSegment.segment}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm font-medium text-slate-brand mb-8">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-bluegrey-brand/10 shadow-sm">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Region: {activeSegment.region}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-bluegrey-brand/10 shadow-sm">
                    <Clock className="w-4 h-4 text-purple-brand" />
                    {activeSegment.utc}
                  </div>
                </div>
              </div>

              {/* Right Column: Producer Info */}
              <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-8 lg:border-l border-bluegrey-brand/10">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-bluegrey-brand uppercase mb-2">
                    Regional Producer
                  </div>
                  <div className="text-2xl font-semibold text-dark-brand flex items-center gap-3">
                    <User className="w-6 h-6 text-bluegrey-brand" />
                    {activeSegment.producer || 'TBA'}
                  </div>
                </div>

                <div className="pt-4 border-t border-bluegrey-brand/10">
                  <div className="text-[10px] font-bold tracking-widest text-bluegrey-brand uppercase mb-3">
                    Relay Status
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full inline-flex">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Ambassador Roster Confirmed
                  </div>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-purple-brand to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-brand/20 transition-all duration-300 group">
                  Represent {activeSegment.segment}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};
