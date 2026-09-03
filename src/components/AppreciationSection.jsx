import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, Laugh, ShieldCheck, Sparkle, Compass, Star } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

const iconMap = {
  Sun: Sun,
  Heart: Heart,
  Laugh: Laugh,
  ShieldCheck: ShieldCheck,
  Sparkle: Sparkle,
  Compass: Compass,
  Star: Star,
};

export default function AppreciationSection() {
  const items = birthdayData.appreciation;

  return (
    <section id="appreciation" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE8F0] border border-[#F0CBD8] text-[#9E4768] text-xs font-semibold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5" />
            Appreciation Notes
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-light text-[#2C2224] tracking-tight">
            Things I Appreciate About You ✨
          </h2>
          <p className="font-sans text-base text-[#66555C]">
            Just a few reasons why you are such an awesome friend.
          </p>
        </div>

        {/* Appreciation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkle;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass-card rounded-2xl p-7 border border-white/80 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent top glow bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F3C5D8] via-[#9E4768] to-[#E8D4F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FBE8F0] text-[#9E4768] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#9E4768] group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[#2C2224] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#5C4D53] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0E2EA]/60 flex items-center justify-between text-xs text-[#8C7A82]">
                  <span>#BestFriendQualities</span>
                  <span className="font-handwritten text-base text-[#9E4768]">Core Quality</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
