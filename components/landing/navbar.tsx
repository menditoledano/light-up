'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F1A]/95 backdrop-blur-md border-b border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          {LOGO_URL ? (
            <img
              src={LOGO_URL}
              alt="Lightup Logo"
              className="h-9 w-auto object-contain"
            />
          ) : (
            <span className="text-xl font-extrabold tracking-tight text-white">
              LIGHT<span className="text-[#D4AF37]">UP</span>
            </span>
          )}
        </div>

        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-slate-500 hover:text-[#D4AF37] transition-colors px-3.5 py-2 text-[13px] font-medium rounded-lg hover:bg-white/[0.03]"
            >
              {item.label}
            </button>
          ))}
          <div className="w-px h-5 bg-slate-800 mx-3" />
          <button
            onClick={() => handleNavClick('hero')}
            className="bg-[#D4AF37] text-[#0B0F1A] px-5 py-2 rounded-lg font-bold text-[13px] hover:bg-[#F0D060] transition-colors"
          >
            הצטרפו לקהילה
          </button>
        </div>

        <button
          className="md:hidden w-9 h-9 rounded-lg bg-slate-800/60 flex items-center justify-center text-slate-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0D1220]/98 backdrop-blur-lg border-b border-slate-800/60 py-3 px-6 flex flex-col gap-0.5 overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => handleNavClick(item.id)}
                className="text-right text-[15px] text-slate-400 hover:text-[#D4AF37] transition-colors py-2.5 px-3 rounded-lg font-medium hover:bg-white/[0.03]"
              >
                {item.label}
              </motion.button>
            ))}
            <div className="mt-2 pt-3 border-t border-slate-800/60">
              <button
                onClick={() => handleNavClick('hero')}
                className="w-full bg-[#D4AF37] text-[#0B0F1A] py-2.5 rounded-lg font-bold text-center text-[14px]"
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
