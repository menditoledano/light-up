'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const floatingOrb = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.5, 0.3],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-white to-white pointer-events-none" />

      <motion.div
        className="absolute top-32 right-[15%] w-72 h-72 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none"
        animate={floatingOrb.animate}
        transition={floatingOrb.transition}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-56 h-56 rounded-full bg-amber-200/10 blur-3xl pointer-events-none"
        animate={{ y: [0, 15, 0], scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/15 text-[#9A7B1A] text-[13px] font-semibold mb-8"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          קהילה חדשה. מרחב בטוח.
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-700 leading-[1.08] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block"
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
          className="text-neutral-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          קהילת Lightup היא הבית שלכם לחיבור לזהות היהודית ולמורשת המשותפת שלנו
          בארגון. מרחב המקדם שיח פתוח, ציון חגי ישראל, ובניית גשרים של תקשורת והבנה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('vision')}
            className="w-full sm:w-auto px-7 py-3 bg-[#B59129] text-white font-semibold rounded-lg text-[15px] hover:bg-[#9A7B1A] transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(181, 145, 41, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">גלו את הקהילה</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B59129] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('events')}
            className="w-full sm:w-auto px-7 py-3 bg-white border border-neutral-200 text-neutral-500 font-semibold rounded-lg text-[15px] hover:border-neutral-300 hover:bg-neutral-50 transition-all"
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
        className="absolute bottom-8 cursor-pointer text-neutral-300 hover:text-neutral-500 transition-colors"
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
