import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Smile, Zap, HeartHandshake, Compass } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

const iconMap = {
  Sparkles: Sparkles,
  MessageCircle: MessageCircle,
  Smile: Smile,
  Zap: Zap,
  HeartHandshake: HeartHandshake,
  Compass: Compass,
};

export default function TimelineSection() {
  const timelineItems = birthdayData.timeline;

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 relative z-10 bg-gradient-to-b from-transparent via-[#F7EFF3]/50 to-transparent">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE8F0] border border-[#F0CBD8] text-[#9E4768] text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            Our Journey
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-light text-[#2C2224] tracking-tight">
            Moments That Matter ✨
          </h2>
          <p className="font-sans text-base text-[#66555C]">
            A timeline of key chapters in our friendship story.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F3C5D8] via-[#D9779B] to-[#F3C5D8] sm:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {timelineItems.map((item, index) => {
              const IconComp = iconMap[item.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#9E4768] text-[#9E4768] shadow-md flex items-center justify-center z-10">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-card rounded-2xl p-6 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#9E4768]">
                          CHAPTER {item.phase} • {item.date}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-semibold text-[#2C2224] mb-2">
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm text-[#5E4E54] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Timeline Image Preview if provided */}
                      {item.image && (
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-inner bg-[#F0E6EA]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80";
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
