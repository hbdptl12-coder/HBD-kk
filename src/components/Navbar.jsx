import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, BookOpen, Image, Star, Menu, X } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function Navbar({ activePage, setActivePage, activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Story', page: 1 },
    { id: 'gallery', label: 'Memories', page: 1 },
    { id: 'appreciation', label: 'About Her', page: 1 },
    { id: 'letter', label: 'Personal Letter', page: 2 },

  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (item.page !== activePage) {
      setActivePage(item.page);
      if (item.page === 1) {
        setTimeout(() => {
          scrollToSection(item.id);
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (item.page === 1) {
        scrollToSection(item.id);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/75 backdrop-blur-md shadow-sm border-b border-[#F0E2EA]/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            setActivePage(1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F3C5D8] to-[#E5A9C0] flex items-center justify-center text-[#5A2338] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-heading font-semibold text-base sm:text-lg text-[#2C2224] tracking-tight block leading-none">
              {birthdayData.name}
            </span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-[#9E4768] font-medium">
              Birthday Edition ✨
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md border border-[#F0DDE6] rounded-full px-4 py-1.5 shadow-sm">
          {navItems.map((item) => {
            const isSelected =
              activePage === item.page && (item.page === 2 || activeSection === item.id);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#9E4768] text-white shadow-sm'
                    : 'text-[#5C4D53] hover:text-[#9E4768] hover:bg-[#FBE8F0]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Page Switcher Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => {
              const nextPage = activePage === 1 ? 2 : 1;
              setActivePage(nextPage);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#9E4768] to-[#BA5E80] text-white shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 transform active:scale-95"
          >
            {activePage === 1 ? (
              <>
                <BookOpen className="w-3.5 h-3.5" /> Read Letter
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" /> Her Story
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/80 border border-[#F0DDE6] text-[#5C4D53] hover:text-[#9E4768]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#F0DDE6] px-6 py-6 mt-3 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activePage === item.page && (item.page === 2 || activeSection === item.id)
                    ? 'bg-[#FBE8F0] text-[#9E4768] font-semibold'
                    : 'text-[#4A3E43] hover:bg-[#FAF4F7]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#F0E2EA]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActivePage(activePage === 1 ? 2 : 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[#9E4768] text-white shadow-md"
              >
                {activePage === 1 ? "Read Her Birthday Letter 💌" : "Back to Birthday Story ✨"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
