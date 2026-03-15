'use client';

import { motion } from 'framer-motion';
import { Sun, ChevronLeft } from 'lucide-react';
import { LOGO_URL } from './navbar';

const footerLinks = [
  { label: 'החזון שלנו', id: 'vision' },
  { label: 'פרשת השבוע', id: 'torah' },
  { label: 'הגלריה', id: 'gallery' },
  { label: 'חנות הקהילה', id: 'swag' },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] pt-24 pb-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/3 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-8"
        >
          {LOGO_URL ? (
            <img
              src={LOGO_URL}
              alt="Lightup Logo"
              className="h-16 w-auto mx-auto object-contain brightness-0 invert opacity-90"
            />
          ) : (
            <Sun className="text-[#D4AF37] mx-auto" size={52} strokeWidth={1.5} />
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            מוכנים להאיר את הדרך?
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto font-sans leading-relaxed">
            הצטרפו למאות עובדים שכבר מצאו את המקום שלהם בתוך הארגון.
          </p>

          <motion.button
            whileHover={{ y: -3, boxShadow: '0 0 35px rgba(212,175,55,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A42F] text-white font-bold rounded-full text-lg shadow-[0_4px_25px_rgba(212,175,55,0.3)] transition-all inline-flex items-center gap-2"
          >
            הגש בקשת הצטרפות <ChevronLeft size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-white/[0.06]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-500 hover:text-[#D4AF37] transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} Lightup Community Platform
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
