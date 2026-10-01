import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { RELAY_REGIONS } from '../../data/relayRegions';

interface JoinRelayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinRelayModal: React.FC<JoinRelayModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    regionNumber: '01',
    organization: '',
    role: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-brand/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg bg-white-brand rounded-2xl sm:rounded-3xl shadow-2xl border border-bluegrey-brand/20 p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-bluegrey-brand hover:text-dark-brand hover:bg-mist-brand/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
                  Exclusive Cohort Gateway
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-dark-brand tracking-tight">
                Join the 2026 Global Relay
              </h3>
              
              <p className="text-xs sm:text-sm text-bluegrey-brand mt-1.5 leading-relaxed">
                Confirm your participation in the 24-hour continuous stream across 12 regions.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Elena Rostova"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-sm focus:outline-none focus:ring-2 focus:ring-slate-brand/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@institution.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-sm focus:outline-none focus:ring-2 focus:ring-slate-brand/40"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1.5">
                      Your Region
                    </label>
                    <select
                      value={formData.regionNumber}
                      onChange={(e) => setFormData({ ...formData, regionNumber: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-xs font-medium focus:outline-none focus:ring-2 focus:ring-slate-brand/40"
                    >
                      {RELAY_REGIONS.map((r) => (
                        <option key={r.id} value={r.regionNumber}>
                          {r.regionNumber} {r.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1.5">
                      Affiliation / Role
                    </label>
                    <input
                      type="text"
                      placeholder="Researcher, Lead..."
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-sm focus:outline-none focus:ring-2 focus:ring-slate-brand/40"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase text-white-brand bg-slate-brand hover:bg-dark-brand transition-colors shadow-sm"
                  >
                    <span>CONFIRM AMBASSADOR REGISTRATION</span>
                    <ArrowRight className="w-4 h-4 text-powder-brand" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-bluegrey-brand pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-taupe-brand" />
                  <span>Confidential Cohort Registry · AI + Compassion Forum</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-slate-brand/10 text-slate-brand flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-taupe-brand" />
              </div>
              <h3 className="text-2xl font-light text-dark-brand">You're officially registered.</h3>
              <p className="text-xs sm:text-sm text-bluegrey-brand mt-2 leading-relaxed max-w-sm mx-auto">
                Welcome to the AI + Compassion Global Cohort. Check your inbox for the ambassador briefing and calendar invitations.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-slate-brand text-white-brand text-xs font-semibold tracking-wider uppercase hover:bg-dark-brand transition-colors"
              >
                RETURN TO DASHBOARD
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
