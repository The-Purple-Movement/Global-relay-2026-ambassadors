import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { RELAY_REGIONS } from '../../data/relayRegions';
import type { Ambassador } from '../../data/ambassadorsData';

interface UploadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAmbassador: (ambassador: Ambassador) => void;
}

export const UploadPhotoModal: React.FC<UploadPhotoModalProps> = ({
  isOpen,
  onClose,
  onAddAmbassador,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    regionNumber: '01',
    country: '',
    city: '',
    role: '',
    bio: '',
    imageUrl: '/images/ambassador-2.jpg',
  });

  const [previewImage, setPreviewImage] = useState('/images/ambassador-2.jpg');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setFormData({ ...formData, imageUrl: url });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const regionObj = RELAY_REGIONS.find(r => r.regionNumber === formData.regionNumber);
    const newAmbassador: Ambassador = {
      id: `amb-${Date.now()}`,
      name: formData.name,
      regionNumber: formData.regionNumber,
      regionName: regionObj ? regionObj.name : `Region ${formData.regionNumber}`,
      country: formData.country,
      city: formData.city,
      role: formData.role,
      bio: formData.bio,
      imageUrl: previewImage,
    };
    onAddAmbassador(newAmbassador);
    setIsSuccess(true);
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
          className="relative w-full max-w-lg bg-white-brand rounded-2xl sm:rounded-3xl shadow-2xl border border-bluegrey-brand/20 p-6 sm:p-8 z-10 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-bluegrey-brand hover:text-dark-brand hover:bg-mist-brand/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-taupe-brand" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-bluegrey-brand">
                  Cohort Directory Submission
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-dark-brand tracking-tight">
                Upload Your Ambassador Photo
              </h3>
              <p className="text-xs sm:text-sm text-bluegrey-brand mt-1 leading-relaxed">
                Join the official Cohort Wall and represent your region in the global archive.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Photo Preview & Upload */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-mist-brand/40 border border-bluegrey-brand/20">
                  <div className="w-16 h-20 rounded-lg overflow-hidden bg-slate-dark shrink-0">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-brand mb-1">
                      Profile Photograph
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="text-xs text-bluegrey-brand file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-brand file:text-white-brand hover:file:bg-dark-brand cursor-pointer"
                    />
                    <span className="block text-[10px] text-bluegrey-brand mt-1">
                      High resolution, editorial lighting recommended
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-xs focus:ring-2 focus:ring-slate-brand/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1">
                      Assigned Region
                    </label>
                    <select
                      value={formData.regionNumber}
                      onChange={(e) => setFormData({ ...formData, regionNumber: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-xs font-medium focus:ring-2 focus:ring-slate-brand/40"
                    >
                      {RELAY_REGIONS.map((r) => (
                        <option key={r.id} value={r.regionNumber}>
                          {r.regionNumber} {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1">
                      City, Country
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kyoto, Japan"
                      value={formData.city ? `${formData.city}, ${formData.country}` : ''}
                      onChange={(e) => {
                        const parts = e.target.value.split(',');
                        setFormData({
                          ...formData,
                          city: parts[0]?.trim() || '',
                          country: parts[1]?.trim() || 'Global',
                        });
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-xs focus:ring-2 focus:ring-slate-brand/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1">
                      Role / Discipline
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="AI Ethics Fellow"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-xs focus:ring-2 focus:ring-slate-brand/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-brand mb-1">
                    Short Bio & Focus (1–2 sentences)
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Focusing on human-centered AI interfaces and community technology stewardship."
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-bluegrey-brand/30 bg-mist-brand/20 text-dark-brand text-xs focus:ring-2 focus:ring-slate-brand/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-semibold tracking-wider uppercase text-white-brand bg-slate-brand hover:bg-dark-brand transition-colors"
                >
                  PUBLISH TO COHORT WALL
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-slate-brand/10 text-slate-brand flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-taupe-brand" />
              </div>
              <h3 className="text-2xl font-light text-dark-brand">Photo Published</h3>
              <p className="text-xs sm:text-sm text-bluegrey-brand mt-2 leading-relaxed max-w-sm mx-auto">
                Your portrait is now active on the Wall of Ambassadors. Thank you for carrying the relay forward.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-slate-brand text-white-brand text-xs font-semibold tracking-wider uppercase hover:bg-dark-brand transition-colors"
              >
                CLOSE DIRECTORY VIEW
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
