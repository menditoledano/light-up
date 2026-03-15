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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-20 overflow-hidden bg-[#0B0F1A]"
    >
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-transparent to-[#0B0F1A] pointer-events-none" />

      <motion.div
        className="absolute top-32 right-[15%] w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none"
        animate={{ y: [0, 15, 0], scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/[0.02] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 150 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[13px] font-semibold mb-8"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          הזהות שלנו. הכוח שלנו.
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block text-slate-100"
          >
            מאירים את הדרך
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gold-gradient"
          >
            בזהות וערכים משותפים
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          כשעובדים מתחברים לשורשים שלהם, הם מביאים את המיטב. Lightup היא המקום
          שבו זהות, ערכים ועשייה נפגשים -- ויוצרים משהו שגדול מכולנו.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('vision')}
            className="w-full sm:w-auto px-7 py-3 bg-[#D4AF37] text-[#0B0F1A] font-bold rounded-lg text-[15px] hover:bg-[#F0D060] transition-colors"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            גלו את הקהילה
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('events')}
            className="w-full sm:w-auto px-7 py-3 bg-transparent border border-slate-700 text-slate-300 font-semibold rounded-lg text-[15px] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            לאירועים הקרובים
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 cursor-pointer text-slate-600 hover:text-[#D4AF37] transition-colors"
        onClick={() => scrollToSection('vision')}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
