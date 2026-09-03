import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ArrowDown, Star } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function CinematicIntro({ onComplete }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 2200);
    const timer2 = setTimeout(() => setStep(3), 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F5] overflow-hidden px-4">
      {/* Background soft glowing elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#FBE8F0] via-[#F3C5D8]/40 to-[#E8D4F0]/30 rounded-full blur-3xl animate-glow pointer-events-none" />

      <div className="relative max-w-2xl w-full text-center z-10 py-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#F5E2EC] text-[#9E4768] text-xs uppercase tracking-widest font-semibold">
                A Special Moment
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-light text-[#2C2224] tracking-tight leading-snug">
                Today is a little more special...
              </h2>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="flex justify-center mb-2">
                <Sparkles className="w-8 h-8 text-[#D4AF37] animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-light text-[#2C2224] tracking-tight leading-snug">
                Because someone truly amazing was born today.
              </h2>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBE8F0] border border-[#EACBD7] text-[#9E4768] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Happy Birthday ✨
              </div>

              <h1 className="font-heading text-5xl sm:text-7xl font-bold tracking-tight text-[#2C2224]">
                Happy Birthday, <br />
                <span className="rose-gradient-text italic font-serif">
                  {birthdayData.name}
                </span> ✨
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#66555C] max-w-lg mx-auto font-normal leading-relaxed">
                {birthdayData.heroSubtitle}
              </p>

              <div className="pt-6">
                <button
                  onClick={onComplete}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#9E4768] via-[#BA5E80] to-[#803150] text-white font-medium text-sm sm:text-base tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform active:scale-95"
                >
                  <span>Explore Her Birthday Story</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip Button */}
        {step < 3 && (
          <button
            onClick={onComplete}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-medium text-[#8C7A82] hover:text-[#9E4768] transition-colors underline underline-offset-4"
          >
            Skip intro
          </button>
        )}
      </div>
    </div>
  );
}
