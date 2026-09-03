import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  // Generate a fixed set of subtle particles to ensure deterministic rendering
  const particles = useMemo(() => {
    const symbols = ['✨', '⭐', '🌸', '✨', '🦋', '✨'];
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: `${(i * 17 + 5) % 92}%`,
      top: `${(i * 23 + 8) % 90}%`,
      size: 12 + (i % 4) * 6,
      duration: 12 + (i % 5) * 4,
      delay: (i % 6) * 1.5,
      opacity: 0.25 + (i % 3) * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Ambient gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F8DBE5]/40 rounded-full blur-3xl animate-glow" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-[#E8D4F0]/30 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] bg-[#F5E6CC]/35 rounded-full blur-3xl animate-glow" style={{ animationDelay: '4s' }} />

      {/* Floating sparkles & icons */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 15, -15, 0],
            opacity: [p.opacity * 0.6, p.opacity * 1.2, p.opacity * 0.6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
}
