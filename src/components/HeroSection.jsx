import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Award } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function HeroSection({ scrollToGallery }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Typography & Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE8F0] border border-[#F0CBD8] text-[#9E4768] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              {birthdayData.heroTag}
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-[#2C2224] leading-[1.1] tracking-tight">
              Today is all about <br />
              <span className="font-serif italic font-normal rose-gradient-text">
                {birthdayData.name}.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#5E4F55] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {birthdayData.heroQuote}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToGallery}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#9E4768] text-white font-medium text-sm tracking-wide shadow-lg hover:bg-[#853754] hover:shadow-xl transition-all duration-300 transform active:scale-95"
              >
                View Photo Memories ✨
              </button>

              <div className="flex items-center gap-2 text-xs font-medium text-[#7A6770] px-4 py-2 rounded-full bg-white/60 border border-[#F0E2EA]">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span>Best Friend Edition</span>
              </div>
            </div>

            {/* Micro details / decorative stats */}
            <div className="pt-6 border-t border-[#F0E2EA]/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="block font-heading text-2xl font-bold text-[#2C2224]">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A82]">Unmatched Vibe</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-bold text-[#2C2224]">∞</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A82]">Inside Jokes</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-bold text-[#2C2224]">1/1</span>
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A82]">Irreplaceable</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Hero Portrait Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">

              {/* Animated Glow Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F3C5D8] via-[#E8D4F0] to-[#FBE8F0] rounded-3xl blur-2xl opacity-60 animate-glow" />

              {/* Main Editorial Image Frame */}
              <div className="relative rounded-2xl overflow-hidden glass-card p-3 shadow-2xl border border-white/80 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F0E6EA]">
                  <img
                    src={birthdayData.heroImage}
                    alt={birthdayData.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback elegant SVG placeholder if image path fails
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80";
                    }}
                  />

                  {/* Gradient Overlay & Editorial Caption Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1923]/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs uppercase tracking-widest text-[#FCE4ED] font-semibold mb-1">
                      {birthdayData.name}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-light leading-snug">
                      "To making life more brighter."
                    </h3>
                  </div>
                </div>

                {/* Corner Decorative Badge */}
                <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-[#F0DDE6] text-[#9E4768] transform rotate-12">
                  <Award className="w-7 h-7" />
                </div>
              </div>

              {/* Floating Decorative Label */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#F0E2EA] flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#9E4768] animate-ping" />
                <span className="text-xs font-semibold text-[#2C2224] tracking-wide">
                  Celebrating {birthdayData.name} ✨
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
