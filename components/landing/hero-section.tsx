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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-white to-white pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/15 text-[#9A7B1A] text-[13px] font-semibold mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          קהילה חדשה. מרחב בטוח.
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-[1.08] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="block"
          >
            מאירים את הדרך
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="block text-gold-gradient"
          >
            בזהות וערכים משותפים
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-neutral-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          קהילת Lightup היא הבית שלכם לחיבור לזהות היהודית ולמורשת המשותפת שלנו
          בארגון. מרחב המקדם שיח פתוח, ציון חגי ישראל, ובניית גשרים של תקשורת והבנה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('vision')}
            className="w-full sm:w-auto px-7 py-3 bg-neutral-900 text-white font-semibold rounded-lg text-[15px] hover:bg-neutral-800 transition-colors"
          >
            גלו את הקהילה
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="w-full sm:w-auto px-7 py-3 bg-white border border-neutral-200 text-neutral-700 font-semibold rounded-lg text-[15px] hover:border-neutral-300 hover:bg-neutral-50 transition-all"
          >
            לאירועים הקרובים
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 cursor-pointer text-neutral-300 hover:text-neutral-500 transition-colors"
        onClick={() => scrollToSection('vision')}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
