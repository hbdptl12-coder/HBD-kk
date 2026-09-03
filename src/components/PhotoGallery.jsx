import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, Camera } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import LightboxModal from './LightboxModal';

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const photos = birthdayData.gallery;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextPhoto = () => setLightboxIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);

  // Rotation variations for polaroids
  const rotations = ['-rotate-2', 'rotate-2', '-rotate-3', 'rotate-1', '-rotate-1', 'rotate-3'];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBE8F0] border border-[#F0CBD8] text-[#9E4768] text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            Scrapbook & Memories
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-light text-[#2C2224] tracking-tight">
            Moments Captured in Time ✨
          </h2>
          <p className="font-sans text-base text-[#66555C] font-normal">
            Click any picture to open full screen. A few favorite memories we've shared along the way.
          </p>
        </div>

        {/* Gallery Grid / Polaroid Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-start">
          {photos.map((photo, index) => {
            const rotClass = rotations[index % rotations.length];
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
                className={`group cursor-pointer polaroid-frame rounded-2xl transform ${rotClass} hover:rotate-0 hover:scale-[1.03] transition-all duration-500`}
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-xl"
                  style={{ backgroundColor: photo.bg || '#F0E6EA' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className={`w-full h-full transition-transform duration-700 ease-out ${
                      photo.objectFit === 'contain'
                        ? 'object-contain'
                        : 'object-cover group-hover:scale-110'
                    }`}
                    onError={(e) => {
                      // High quality fallback
                      e.target.onerror = null;
                      e.target.src = `https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80`;
                    }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1923]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FCE4ED]">
                      {photo.tag}
                    </span>
                    <p className="font-heading text-sm font-medium leading-snug">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-[#5A2338] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Polaroid Bottom Caption */}
                <div className="pt-3 text-center">
                  <p className="font-handwritten text-xl text-[#5A3542] leading-tight font-medium">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        activeImageIndex={lightboxIndex}
        photos={photos}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />
    </section>
  );
}
