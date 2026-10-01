import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-brand/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-dark-brand rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-bluegrey-brand/30 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-dark-brand/60 text-white-brand hover:bg-dark-brand transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 16:9 Video Simulation Container */}
          <div className="relative aspect-video w-full bg-dark-brand overflow-hidden flex items-center justify-center">
            <img
              src="/images/founder-jun-suto.jpg"
              alt="Jun Suto addressing global ambassadors"
              className="w-full h-full object-cover"
            />
            
            {/* Cinematic subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-brand/90 via-transparent to-dark-brand/40 pointer-events-none" />

            {/* Subtitles Overlay */}
            <div className="absolute bottom-16 left-6 right-6 text-center pointer-events-none">
              <span className="inline-block bg-dark-brand/80 backdrop-blur-md text-white-brand text-xs sm:text-sm md:text-base px-4 py-2 rounded-lg font-light leading-relaxed">
                "Futokoro (懐) is the ancient Japanese concept of receiving something into your embrace with care, patience, and purpose."
              </span>
            </div>

            {/* Custom Minimalist Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-dark-brand to-transparent flex items-center justify-between text-white-brand">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white-brand/20 hover:bg-white-brand/30 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <div className="text-xs font-mono text-powder-brand">
                  01:24 / 03:45
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full text-powder-brand hover:text-white-brand transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
