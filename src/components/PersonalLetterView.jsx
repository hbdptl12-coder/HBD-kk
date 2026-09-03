import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Heart, Sparkles, BookOpen } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function PersonalLetterView({ onReplay }) {
  const { salutation, paragraphs, signOff, closingNote, embeddedPhotos } = birthdayData.letter;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 relative z-10 paper-texture">
      <div className="max-w-3xl mx-auto">
        
        {/* Top Header Stamp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8 text-xs font-semibold uppercase tracking-widest text-[#9E4768]"
        >
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[#E8D5CE] shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Birthday Letter</span>
          </div>

          <div className="bg-white/80 px-4 py-2 rounded-full border border-[#E8D5CE] shadow-sm">
            <span>Special Edition • {birthdayData.name}</span>
          </div>
        </motion.div>

        {/* Paper Letter Container */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="paper-card rounded-3xl p-8 sm:p-14 border border-[#E2D2CC] relative overflow-hidden shadow-2xl space-y-8"
        >
          {/* Subtle Corner Paper Fold Decor */}
          <div className="absolute top-0 right-0 border-t-[40px] border-r-[40px] border-t-white border-r-[#FAF4F0] shadow-md" />

          {/* Salutation */}
          <div className="space-y-2">
            <h1 className="font-heading text-3xl sm:text-5xl font-light text-[#2C2224] tracking-tight">
              {salutation}
            </h1>
            <div className="w-16 h-0.5 bg-[#9E4768]/40 rounded-full" />
          </div>

          {/* First Paragraph */}
          <p className="font-sans text-base sm:text-lg text-[#3D3035] leading-relaxed">
            {paragraphs[0]}
          </p>

          {/* First Embedded Polaroid Photo */}
          {embeddedPhotos[0] && (
            <div className="my-8 flex justify-center sm:justify-start">
              <div className={`polaroid-frame max-w-xs transform ${embeddedPhotos[0].rotation} hover:rotate-0 transition-transform duration-500`}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#F0E6EA]">
                  <img
                    src={embeddedPhotos[0].src}
                    alt={embeddedPhotos[0].caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
                <p className="font-handwritten text-xl text-[#5A3542] text-center pt-2">
                  {embeddedPhotos[0].caption}
                </p>
              </div>
            </div>
          )}

          {/* Middle Paragraphs */}
          <div className="space-y-6 font-sans text-base sm:text-lg text-[#3D3035] leading-relaxed">
            <p>{paragraphs[1]}</p>
            <p>{paragraphs[2]}</p>
          </div>

          {/* Second Embedded Polaroid Photo */}
          {embeddedPhotos[1] && (
            <div className="my-8 flex justify-center sm:justify-end">
              <div className={`polaroid-frame max-w-xs transform ${embeddedPhotos[1].rotation} hover:rotate-0 transition-transform duration-500`}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#F0E6EA]">
                  <img
                    src={embeddedPhotos[1].src}
                    alt={embeddedPhotos[1].caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </div>
                <p className="font-handwritten text-xl text-[#5A3542] text-center pt-2">
                  {embeddedPhotos[1].caption}
                </p>
              </div>
            </div>
          )}

          {/* Final Paragraphs */}
          <div className="space-y-6 font-sans text-base sm:text-lg text-[#3D3035] leading-relaxed">
            <p>{paragraphs[3]}</p>
            <p>{paragraphs[4]}</p>
          </div>

          {/* Handwritten Sign-off */}
          <div className="pt-8 border-t border-[#E8D5CE] space-y-4">
            <div className="font-handwritten text-3xl sm:text-4xl text-[#9E4768] font-semibold">
              {signOff}
            </div>
            <div className="text-sm font-medium text-[#7A6770]">
              {closingNote}
            </div>
          </div>

          {/* Grand Ending Typography */}
          <div className="pt-10 text-center space-y-4 bg-gradient-to-b from-transparent to-[#FAF0F4] rounded-2xl p-6 sm:p-8">
            <h2 className="font-heading text-4xl sm:text-6xl font-light text-[#2C2224]">
              Happy Birthday, <span className="rose-gradient-text italic font-serif">{birthdayData.name}</span> ✨
            </h2>
            <p className="font-sans text-base text-[#66555C] max-w-md mx-auto">
              Here's to another year of laughter, adventures, memories and being wonderfully you.
            </p>
          </div>
        </motion.article>

        {/* Replay Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-[#E8D5CE] text-[#5C4D53] hover:text-[#9E4768] hover:border-[#9E4768] font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Replay the Birthday Experience ↻</span>
          </button>
        </div>

      </div>
    </div>
  );
}
