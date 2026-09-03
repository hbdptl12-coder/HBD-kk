import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function LightboxModal({ activeImageIndex, photos, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (activeImageIndex === null || !photos[activeImageIndex]) return null;

  const currentPhoto = photos[activeImageIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F3C5D8] font-medium bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Memory {activeImageIndex + 1} of {photos.length}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous photo"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 border border-white/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next photo"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all transform hover:scale-110 border border-white/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Lightbox Image Card */}
        <motion.div
          key={currentPhoto.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center p-2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/50 max-h-[72vh]">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption || "Photo memory"}
              className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>

          {/* Caption Box */}
          <div className="mt-4 text-center text-white space-y-1 max-w-xl">
            <span className="inline-block text-[11px] uppercase tracking-widest text-[#F3C5D8] font-semibold">
              {currentPhoto.tag || "Memory"}
            </span>
            <p className="font-heading text-lg sm:text-xl font-light leading-relaxed">
              {currentPhoto.caption}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
