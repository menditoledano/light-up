'use client';

import { motion } from 'framer-motion';
import { BookHeart, ChevronLeft, Quote } from 'lucide-react';

export default function TorahSection() {
  return (
    <section
      id="torah"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#FDFCF8] to-[#FAF8F2] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#D4AF37]/4 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#B59129]/3 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm border border-[#D4AF37]/15 rounded-[2.5rem] p-8 md:p-14 relative z-10 shadow-[0_12px_50px_rgba(212,175,55,0.06)]"
      >
        <div className="absolute top-6 right-8 pointer-events-none">
          <Quote size={48} className="text-[#D4AF37]/8 rotate-180" strokeWidth={1} />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/8 blur-xl rounded-full scale-125" />
              <div className="relative bg-gradient-to-br from-[#FDFCF8] to-white border border-[#D4AF37]/20 p-7 rounded-full shadow-sm">
                <BookHeart size={56} className="text-[#B59129]" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-right">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#D4AF37]/8 to-[#D4AF37]/4 border border-[#D4AF37]/15 text-[#B59129] rounded-full text-xs font-bold tracking-widest uppercase mb-5 font-sans">
              השראה שבועית
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A]">
              לחבר ערכים לעשייה
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 font-sans">
              בכל שבוע אנו משתפים תובנה קצרה מפרשת השבוע, המחברת בין חוכמת המקורות
              והערכים היהודיים לאתגרים היומיומיים שלנו בסביבת העבודה, פיתוח מנהיגות,
              וצמיחה אישית מתוך דיאלוג פתוח.
            </p>
            <motion.button
              whileHover={{ x: -4, boxShadow: '0 4px 20px rgba(212,175,55,0.2)' }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#C9A42F] text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 mx-auto md:mx-0 shadow-[0_4px_15px_rgba(212,175,55,0.25)] font-sans"
            >
              לקריאת פרשת השבוע <ChevronLeft size={18} />
            </motion.button>
          </div>
        </div>

        <div className="absolute bottom-6 left-8 pointer-events-none">
          <Quote size={48} className="text-[#D4AF37]/8" strokeWidth={1} />
        </div>
      </motion.div>
    </section>
  );
}
