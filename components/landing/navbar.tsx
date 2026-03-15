'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Menu, X } from 'lucide-react';

export const LOGO_URL = 'https://iili.io/qGHjtQ1.jpg';

const navItems = [
  { id: 'vision', label: 'החזון שלנו' },
  { id: 'torah', label: 'פרשת השבוע' },
  { id: 'sparks', label: 'ניצוצות' },
  { id: 'gallery', label: 'הגלריה' },
  { id: 'swag', label: 'חנות הקהילה' },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#D4AF37]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.04)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('hero')}
          whileTap={{ scale: 0.97 }}
        >
          {LOGO_URL ? (
            <img
              src={LOGO_URL}
              alt="Lightup Logo"
              className="h-10 w-auto object-contain"
            />
          ) : (
            <>
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 rounded-full animate-pulse" />
                <Sun className="text-[#B59129] relative z-10" size={32} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tight text-[#1A1A1A]">
                LIGHT<span className="text-[#B59129]">UP</span>
              </span>
            </>
          )}
        </motion.div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-slate-600 hover:text-[#B59129] transition-colors px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D4AF37]/6"
            >
              {item.label}
            </button>
          ))}
          <div className="w-px h-6 bg-slate-200 mx-2" />
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 4px 16px rgba(212,175,55,0.25)' }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-[#D4AF37] to-[#C9A42F] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_2px_10px_rgba(212,175,55,0.2)] transition-all"
          >
            הצטרפו לקהילה
          </motion.button>
        </div>

        <button
          className="md:hidden relative w-10 h-10 rounded-xl bg-[#D4AF37]/8 flex items-center justify-center text-[#B59129]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#D4AF37]/15 py-4 px-6 flex flex-col gap-1 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(item.id)}
                className="text-right text-base text-slate-600 hover:text-[#B59129] hover:bg-[#D4AF37]/6 transition-all py-3 px-4 rounded-xl font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            <div className="mt-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => handleNavClick('hero')}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C9A42F] text-white py-3 rounded-xl font-bold text-center shadow-sm"
              >
                הצטרפו לקהילה
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
