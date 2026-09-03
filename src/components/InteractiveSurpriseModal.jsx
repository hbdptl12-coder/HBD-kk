import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, X, Heart, ArrowRight } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function InteractiveSurpriseModal({ onReadLetter }) {
  const [isOpen, setIsOpen] = useState(false);
  const { buttonText, title, wishText, badge, signature } = birthdayData.surprise;

  const triggerSurprise = () => {
    setIsOpen(true);

    // Trigger elegant confetti burst
    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#F3C5D8', '#9E4768', '#D4AF37', '#E8D4F0', '#FFFFFF']
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    } catch (e) {
      console.log('Confetti trigger', e);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative z-10 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE8F0] border border-[#F0CBD8] text-[#9E4768] text-xs font-semibold uppercase tracking-widest">
          <Gift className="w-3.5 h-3.5" />
          Interactive Surprise
        </div>

        <h3 className="font-heading text-2xl sm:text-4xl font-light text-[#2C2224]">
          Ready for your birthday wish? ✨
        </h3>

        <div>
          <button
            onClick={triggerSurprise}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D9779B] via-[#9E4768] to-[#6E2B43] text-white font-medium text-base shadow-2xl hover:shadow-pink-900/20 hover:scale-105 transition-all duration-300 transform active:scale-95"
          >
            <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>{buttonText}</span>
            <Sparkles className="w-4 h-4 text-[#FFE58F]" />
          </button>
        </div>
      </div>

      {/* Fullscreen Surprise Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full glass-card rounded-3xl p-8 sm:p-10 border border-white/90 shadow-2xl text-center space-y-6 overflow-hidden bg-white/90"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F5E6EC] text-[#5C4D53] hover:text-[#9E4768] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-[#F3C5D8] to-[#E5A9C0] text-[#5A2338] flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#9E4768] font-bold">
                  {badge}
                </span>
                <h2 className="font-heading text-3xl font-light text-[#2C2224]">
                  {title}
                </h2>
              </div>

              <div className="space-y-3">
                {wishText.split('\n\n').map((para, i) => (
                  <p key={i} className="font-sans text-base text-[#524349] leading-relaxed italic">
                    "{para}"
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F0E2EA]">
                <p className="font-handwritten text-3xl text-[#9E4768] font-semibold">
                  {signature}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onReadLetter();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9E4768] text-white text-sm font-medium shadow-md hover:bg-[#853754] transition-all"
                >
                  <span>Read Her Personal Letter</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
