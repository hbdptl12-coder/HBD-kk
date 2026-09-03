import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import AudioPlayer from './components/AudioPlayer';
import CinematicIntro from './components/CinematicIntro';
import HeroSection from './components/HeroSection';
import BirthdayMessageCard from './components/BirthdayMessageCard';
import PhotoGallery from './components/PhotoGallery';

import AppreciationSection from './components/AppreciationSection';
import InteractiveSurpriseModal from './components/InteractiveSurpriseModal';
import PageTransitionCTA from './components/PageTransitionCTA';
import PersonalLetterView from './components/PersonalLetterView';

import { birthdayData } from './config/birthdayData';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activePage, setActivePage] = useState(1); // 1 = Birthday Story, 2 = Letter
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position to update active nav section
  useEffect(() => {
    if (activePage !== 1 || showIntro) return;

    const sections = ['hero', 'gallery', 'appreciation', 'letter'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage, showIntro]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-[#FAF7F5] text-[#2C2224] selection:bg-[#F3C5D8] selection:text-[#4A1D2F]">
      {/* Background Particles & Ambient Glow */}
      <ParticleBackground />

      {/* Desktop Cursor Highlight */}
      <CursorGlow />

      {/* Cinematic Intro Screen overlay */}
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Website View (shown after intro or immediately accessible) */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Navigation Bar */}
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          {/* Page Views Transition */}
          <AnimatePresence mode="wait">
            {activePage === 1 ? (
              <motion.main
                key="page1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* SECTION 2: HERO PHOTO COVER */}
                <HeroSection scrollToGallery={() => scrollToSection('gallery')} />

                {/* SECTION 3: BIRTHDAY MESSAGE CARD */}
                <BirthdayMessageCard />

                {/* SECTION 4: PHOTO MEMORY GALLERY */}
                <PhotoGallery />



                {/* SECTION 6: THINGS I APPRECIATE ABOUT YOU */}
                <AppreciationSection />

                {/* SECTION 7: INTERACTIVE SURPRISE MODAL */}
                <InteractiveSurpriseModal
                  onReadLetter={() => {
                    setActivePage(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                {/* SECTION 8: FINAL CTA TO PAGE 2 */}
                <PageTransitionCTA
                  onGoToLetter={() => {
                    setActivePage(2);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </motion.main>
            ) : (
              <motion.main
                key="page2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* PAGE 2: THE PERSONAL DIGITAL LETTER */}
                <PersonalLetterView
                  onReplay={() => {
                    setActivePage(1);
                    setShowIntro(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </motion.main>
            )}
          </AnimatePresence>

          {/* Floating Audio Player Widget */}
          <AudioPlayer />

          {/* Footer */}
          <footer className="relative z-10 py-8 border-t border-[#F0E2EA]/60 text-center text-xs text-[#8C7A82] bg-white/40 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p>
                Crafted especially for <span className="font-semibold text-[#9E4768]">{birthdayData.name}'s Birthday</span> ✨
              </p>
              <p className="font-handwritten text-lg text-[#9E4768]">
                Best-Friendship Edition • Forever & Always 🤍
              </p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
