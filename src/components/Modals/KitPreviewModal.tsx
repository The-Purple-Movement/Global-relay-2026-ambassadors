import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';

interface KitPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KitPreviewModal: React.FC<KitPreviewModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'badge' | 'twibbon' | 'captions' | 'guide'>('badge');
  const [copiedCaptionIndex, setCopiedCaptionIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const captions = [
    {
      platform: "LinkedIn Announcement",
      text: `Honored to represent my region as an Ambassador for the AI + Compassion Global Forum 2026.\n\nOn October 2–3, we embark on a 24-hour continuous relay across 12 regions, exploring Futokoro (懐), how we responsibly receive artificial intelligence into daily human life.\n\nJoin the relay: compassionai.io\n\n#AIandCompassion2026 #FutokoroRelay #HumanCenteredAI`,
    },
    {
      platform: "X / Short Social Post",
      text: `Carrying the relay forward for Region 2026. 🌐\n\n12 regions. 24 hours. Zero breaks in the stream. Starting in Kyoto and circling the globe.\n\nBe part of AI + Compassion Global Forum 2026: compassionai.io\n\n#AIandCompassion2026 #FutokoroRelay`,
    },
    {
      platform: "Reel / Video Script Opening",
      text: `"What if technology wasn't just intelligent, but compassionate? On October 2nd, 12 regions around the world unite for a 24-hour global relay. I'm carrying the torch for our region. Here's why this matters..."`,
    },
  ];

  const handleCopy = (idx: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCaptionIndex(idx);
    setTimeout(() => setCopiedCaptionIndex(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-brand/75 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-white-brand rounded-2xl sm:rounded-3xl shadow-2xl border border-bluegrey-brand/20 p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-bluegrey-brand hover:text-dark-brand hover:bg-mist-brand/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
                Official Ambassador Assets
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-dark-brand tracking-tight">
              Ambassador Kit Repository
            </h3>
            <p className="text-xs sm:text-sm text-bluegrey-brand mt-1">
              Download and deploy your official cohort materials across your regional networks.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-bluegrey-brand/20 gap-2 mb-6 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('badge')}
              className={`pb-3 px-3 text-xs font-semibold tracking-wider uppercase transition-colors relative ${
                activeTab === 'badge' ? 'text-slate-brand border-b-2 border-slate-brand' : 'text-bluegrey-brand hover:text-dark-brand'
              }`}
            >
              01 LinkedIn Badge
            </button>
            <button
              onClick={() => setActiveTab('twibbon')}
              className={`pb-3 px-3 text-xs font-semibold tracking-wider uppercase transition-colors relative ${
                activeTab === 'twibbon' ? 'text-slate-brand border-b-2 border-slate-brand' : 'text-bluegrey-brand hover:text-dark-brand'
              }`}
            >
              02 Twibbon Frame
            </button>
            <button
              onClick={() => setActiveTab('captions')}
              className={`pb-3 px-3 text-xs font-semibold tracking-wider uppercase transition-colors relative ${
                activeTab === 'captions' ? 'text-slate-brand border-b-2 border-slate-brand' : 'text-bluegrey-brand hover:text-dark-brand'
              }`}
            >
              03 Captions & Scripts
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`pb-3 px-3 text-xs font-semibold tracking-wider uppercase transition-colors relative ${
                activeTab === 'guide' ? 'text-slate-brand border-b-2 border-slate-brand' : 'text-bluegrey-brand hover:text-dark-brand'
              }`}
            >
              04 Guide & Hashtags
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[280px]">
            {activeTab === 'badge' && (
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-mist-brand/40 border border-bluegrey-brand/20">
                {/* Badge Visual */}
                <div className="w-48 h-48 rounded-2xl bg-slate-brand text-white-brand p-5 flex flex-col justify-between shadow-md relative overflow-hidden shrink-0">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-powder-brand/20" />
                  <div className="flex items-center justify-between text-[9px] tracking-widest font-mono text-powder-brand">
                    <span>COHORT 2026</span>
                    <span>OFFICIAL</span>
                  </div>
                  <div className="my-auto">
                    <div className="text-xs tracking-widest uppercase font-bold text-white-brand">AI + COMPASSION</div>
                    <div className="text-[10px] text-taupe-brand font-mono">GLOBAL AMBASSADOR</div>
                  </div>
                  <div className="text-[9px] text-powder-brand/75 font-mono">
                    Kyoto → World → Kyoto
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-dark-brand">Verified Ambassador Badge</h4>
                  <p className="text-xs text-bluegrey-brand leading-relaxed">
                    Designed for LinkedIn featured media, profile banners, and speaking announcements. Available in light and dark slate variants.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => alert("Downloading High-Resolution Ambassador Badge PNG (2400x2400)...")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-brand text-white-brand text-xs font-semibold uppercase tracking-wider hover:bg-dark-brand transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PNG</span>
                    </button>
                    <button
                      onClick={() => alert("Downloading Scalable Vector Badge SVG...")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white-brand border border-bluegrey-brand/30 text-dark-brand text-xs font-semibold uppercase tracking-wider hover:bg-mist-brand transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SVG</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'twibbon' && (
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-mist-brand/40 border border-bluegrey-brand/20">
                {/* Twibbon Avatar Preview */}
                <div className="relative w-40 h-40 rounded-full p-2 border-2 border-dashed border-slate-brand/40 shrink-0">
                  <img
                    src="/images/ambassador-2.jpg"
                    alt="Twibbon Preview"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-taupe-brand/80 pointer-events-none flex items-end justify-center pb-2">
                    <span className="bg-dark-brand text-white-brand text-[9px] font-mono px-2 py-0.5 rounded-full">
                      RELAY 2026
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-dark-brand">Circular Twibbon Overlay</h4>
                  <p className="text-xs text-bluegrey-brand leading-relaxed">
                    Apply the Futokoro compass circle to your social media avatar. Shows solidarity across X, Instagram, and LinkedIn.
                  </p>
                  <button
                    onClick={() => alert("Opening Twibbon Web Generator...")}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-brand text-white-brand text-xs font-semibold uppercase tracking-wider hover:bg-dark-brand transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Open Twibbon Frame Tool</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'captions' && (
              <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1">
                {captions.map((cap, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-mist-brand/40 border border-bluegrey-brand/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-brand">
                        {cap.platform}
                      </span>
                      <button
                        onClick={() => handleCopy(idx, cap.text)}
                        className="inline-flex items-center gap-1 text-xs text-bluegrey-brand hover:text-slate-brand font-medium"
                      >
                        {copiedCaptionIndex === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-slate-brand" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs text-dark-brand/85 whitespace-pre-wrap font-sans leading-relaxed bg-white-brand/80 p-3 rounded-lg border border-bluegrey-brand/10">
                      {cap.text}
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'guide' && (
              <div className="p-6 rounded-2xl bg-mist-brand/40 border border-bluegrey-brand/20 space-y-4">
                <h4 className="text-lg font-semibold text-dark-brand">Official Hashtags & Posting Guide</h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1.5 rounded-lg bg-white-brand text-slate-brand text-xs font-mono font-semibold border border-bluegrey-brand/20">
                    #AIandCompassion2026
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white-brand text-slate-brand text-xs font-mono font-semibold border border-bluegrey-brand/20">
                    #FutokoroRelay
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white-brand text-slate-brand text-xs font-mono font-semibold border border-bluegrey-brand/20">
                    #KyotoGlobalForum
                  </span>
                </div>
                <p className="text-xs text-bluegrey-brand leading-relaxed pt-2">
                  Key messaging notes: Emphasize regional leadership, international cooperation, and human-centered AI governance.
                </p>
                <button
                  onClick={() => alert("Downloading PDF Ambassador Handbook (12 Pages)...")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-brand text-white-brand text-xs font-semibold uppercase tracking-wider hover:bg-dark-brand transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full PDF Guide</span>
                </button>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t border-bluegrey-brand/20 flex items-center justify-between">
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-brand hover:underline"
            >
              <span>Open Google Drive Asset Folder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase bg-slate-brand text-white-brand hover:bg-dark-brand transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
