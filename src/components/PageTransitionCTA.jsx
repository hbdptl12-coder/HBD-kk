import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Heart } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function PageTransitionCTA({ onGoToLetter }) {
  return (
    <section id="letter" className="py-24 px-4 sm:px-6 relative z-10 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl p-10 sm:p-14 border border-white/90 shadow-2xl relative overflow-hidden space-y-6"
        >
          {/* Subtle Glow background */}
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#F3C5D8]/40 rounded-full blur-3xl" />

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#9E4768]">
            Final Chapter ✨
          </span>

          <h2 className="font-heading text-3xl sm:text-5xl font-light text-[#2C2224] leading-tight">
            Okay... one last thing.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#66555C] max-w-lg mx-auto font-normal">
            I wrote a little handwritten digital letter for you to finish off your birthday surprise.
          </p>

          <div className="pt-4">
            <button
              onClick={onGoToLetter}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#9E4768] via-[#BA5E80] to-[#782946] text-white font-medium text-base tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform active:scale-95"
            >
              <BookOpen className="w-5 h-5" />
              <span>Read My Little Birthday Letter</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="pt-4 text-xs text-[#8C7A82] flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#9E4768] fill-[#9E4768]" />
            <span>Best-friendship memories inside</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
