'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-gradient-to-b from-[#FEFDFB] via-[#FAFAFA] to-white"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="absolute top-10 right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[#D4AF37]/8 to-[#E6C84D]/4 blur-[140px] rounded-full pointer-events-none -translate-y-1/3" />
      <div className="absolute bottom-10 left-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#B59129]/6 to-[#D4AF37]/3 blur-[120px] rounded-full pointer-events-none translate-y-1/4" />

      <motion.div
        className="absolute top-32 right-[15%] w-16 h-16 border border-[#D4AF37]/12 rounded-2xl rotate-12 pointer-events-none hidden md:block"
        animate={{ y: [-8, 8, -8], rotate: [12, 15, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-44 left-[12%] w-10 h-10 border border-[#D4AF37]/10 rounded-full pointer-events-none hidden md:block"
        animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-48 left-[22%] w-3 h-3 bg-[#D4AF37]/20 rounded-full pointer-events-none hidden md:block"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-56 right-[20%] w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none hidden md:block"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1.2, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/20 text-[#B59129] text-sm font-bold shadow-[0_2px_12px_rgba(212,175,55,0.08)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
          </span>
          מרחב בטוח. קהילה תומכת.
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.2rem] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="block"
          >
            מאירים את הדרך
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B59129] via-[#D4AF37] to-[#E6C84D]"
          >
            בזהות וערכים משותפים.
          </motion.span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          קהילת Lightup היא הבית שלכם לחיבור לזהות היהודית ולמורשת המשותפת שלנו
          בארגון. מרחב המקדם שיח פתוח, ציון חגי ישראל, ובניית גשרים של תקשורת והבנה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 8px 30px rgba(212,175,55,0.35)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('vision')}
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A42F] text-white font-bold rounded-full text-lg shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all font-sans"
          >
            גלו את הקהילה
          </motion.button>
          <motion.button
            whileHover={{ y: -2, borderColor: '#D4AF37' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('events')}
            className="w-full sm:w-auto px-9 py-4 bg-white/80 backdrop-blur-sm border border-[#D4AF37]/35 text-[#B59129] font-bold rounded-full text-lg hover:bg-white transition-all shadow-sm font-sans"
          >
            לאירועים הקרובים
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 cursor-pointer text-[#D4AF37]/35 hover:text-[#B59129] transition-colors"
        onClick={() => scrollToSection('vision')}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
