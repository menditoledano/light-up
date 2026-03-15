'use client';

import { motion } from 'framer-motion';
import { BookHeart, ChevronLeft } from 'lucide-react';

export default function TorahSection() {
  return (
    <section
      id="torah"
      className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0B0F1A] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.03] blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase mb-4">
            <BookHeart size={14} strokeWidth={1.5} />
            פרשת השבוע
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 mb-3 sm:mb-4">
            לחבר ערכים לעשייה
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-[14px] sm:text-[15px] leading-relaxed px-2 sm:px-0">
            בכל שבוע אנו משתפים תובנה קצרה מפרשת השבוע, המחברת בין חוכמת המקורות לאתגרים היומיומיים.
          </p>
          <div className="mt-6 flex items-center gap-3 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>
        </div>

        <div className="bg-[#111827]/80 border border-slate-800/60 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8 md:gap-10">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                <BookHeart size={28} className="text-[#D4AF37] sm:w-9 sm:h-9" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-right">
              <p className="text-[#D4AF37] text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase mb-2 sm:mb-3">
                השראה שבועית
              </p>
              <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8">
                בכל שבוע אנו משתפים תובנה קצרה מפרשת השבוע, המחברת בין חוכמת המקורות
                והערכים היהודיים לאתגרים היומיומיים שלנו בסביבת העבודה, פיתוח מנהיגות,
                וצמיחה אישית מתוך דיאלוג פתוח.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0B0F1A] px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-[13px] sm:text-[14px] hover:bg-[#F0D060] transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)]">
                לקריאת פרשת השבוע <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
