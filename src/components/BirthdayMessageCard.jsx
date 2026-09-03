import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, HeartHandshake } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function BirthdayMessageCard() {
  const { badge, title, content } = birthdayData.messageCard;

  return (
    <section className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass-card rounded-3xl p-8 sm:p-12 border border-white/90 shadow-2xl overflow-hidden"
        >
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8DBE5]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 rounded-xl bg-[#FBE8F0] text-[#9E4768]">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9E4768]">
              {badge}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-light text-[#2C2224] leading-tight mb-8">
            {title}
          </h2>

          <div className="space-y-6 text-[#524349] font-sans text-base sm:text-lg leading-relaxed font-normal">
            {content.map((paragraph, index) => (
              <p key={index} className="relative pl-0 sm:pl-4 border-l-0 sm:border-l-2 border-[#E5C3D1]/60">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sincere Signature Highlight */}
          <div className="mt-8 pt-6 border-t border-[#F0E2EA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-medium text-[#7A6770]">
              <HeartHandshake className="w-4 h-4 text-[#9E4768]" />
              <span>Built with genuine appreciation</span>
            </div>

            <div className="font-handwritten text-2xl text-[#9E4768]">
              Always cheering for you ✨
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
