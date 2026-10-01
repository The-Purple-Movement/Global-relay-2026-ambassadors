import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Ambassador } from '../data/ambassadorsData';
import { RELAY_REGIONS } from '../data/relayRegions';
import { ArrowLeft, Upload, Plus } from 'lucide-react';

interface AmbassadorWallProps {
  onBackToHome: () => void;
  onOpenUploadModal: () => void;
  ambassadorsList: Ambassador[];
}

export const AmbassadorWall: React.FC<AmbassadorWallProps> = ({
  onBackToHome,
  onOpenUploadModal,
  ambassadorsList,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredAmbassadors = selectedFilter === "All"
    ? ambassadorsList
    : ambassadorsList.filter(a => a.regionNumber === selectedFilter);

  return (
    <div className="min-h-screen bg-mist-brand text-dark-brand pt-28 pb-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-brand hover:text-dark-brand transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO RELAY HOME</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
              Global Cohort Directory
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-dark-brand leading-[1.05]">
            Meet the Cohort
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-normal text-slate-brand tracking-tight">
            Every ambassador, every region, one wall.
          </p>

          <p className="mt-4 text-sm sm:text-base text-bluegrey-brand leading-relaxed">
            Upload your photo and become part of it.
          </p>

          {/* CTA: [ UPLOAD YOUR PHOTO → ] */}
          <div className="mt-8">
            <button
              onClick={onOpenUploadModal}
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-white-brand bg-slate-brand hover:bg-dark-brand shadow-sm transition-all duration-300 hover:translate-x-0.5"
            >
              <span>UPLOAD YOUR PHOTO</span>
              <Upload className="w-4 h-4 text-powder-brand group-hover:translate-y-[-1px] transition-transform" />
            </button>
          </div>
        </div>

        {/* Regional Filter Bar */}
        <div className="mb-12 pb-4 border-b border-bluegrey-brand/20 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setSelectedFilter("All")}
              className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wider transition-all duration-200 ${
                selectedFilter === "All"
                  ? "bg-slate-brand text-white-brand shadow-xs"
                  : "bg-white-brand/60 text-dark-brand hover:bg-white-brand border border-bluegrey-brand/15"
              }`}
            >
              All Regions ({ambassadorsList.length})
            </button>

            {RELAY_REGIONS.map((region) => {
              const count = ambassadorsList.filter(a => a.regionNumber === region.regionNumber).length;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedFilter(region.regionNumber)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                    selectedFilter === region.regionNumber
                      ? "bg-slate-brand text-white-brand shadow-xs"
                      : "bg-white-brand/60 text-bluegrey-brand hover:bg-white-brand border border-bluegrey-brand/15"
                  }`}
                >
                  R{region.regionNumber} {count > 0 ? `(${count})` : ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredAmbassadors.map((ambassador) => (
              <motion.div
                key={ambassador.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white-brand rounded-[20px] overflow-hidden border border-bluegrey-brand/20 flex flex-col"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-dark">
                  <img
                    src={ambassador.imageUrl}
                    alt={ambassador.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Region badge overlay */}
                  <div className="absolute top-3.5 left-3.5 bg-dark-brand/80 backdrop-blur-md text-white-brand text-[10px] font-mono px-2.5 py-1 rounded-md border border-white-brand/10">
                    REGION {ambassador.regionNumber}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono tracking-wider uppercase text-bluegrey-brand">
                      {ambassador.city}, {ambassador.country}
                    </div>
                    <h3 className="text-lg font-medium text-dark-brand mt-1 group-hover:text-slate-brand transition-colors">
                      {ambassador.name}
                    </h3>
                    <p className="text-xs text-bluegrey-brand font-normal mt-1">
                      {ambassador.role}
                    </p>
                  </div>

                  <p className="text-xs text-dark-brand/80 mt-3 pt-3 border-t border-bluegrey-brand/15 line-clamp-3 leading-relaxed">
                    {ambassador.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Add Ambassador Card CTA in grid */}
          <div
            onClick={onOpenUploadModal}
            className="group border-2 border-dashed border-bluegrey-brand/30 hover:border-slate-brand rounded-[20px] p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-white-brand/40 min-h-[360px]"
          >
            <div className="w-12 h-12 rounded-full bg-white-brand border border-bluegrey-brand/30 flex items-center justify-center text-slate-brand group-hover:scale-110 group-hover:bg-slate-brand group-hover:text-white-brand transition-all duration-300 mb-4">
              <Plus className="w-5 h-5" />
            </div>
            <h4 className="text-base font-semibold text-dark-brand">Add Your Profile</h4>
            <p className="text-xs text-bluegrey-brand mt-1 max-w-[200px]">
              Represent your city and region in the 2026 Ambassador Cohort
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
