'use client';

import { motion } from 'framer-motion';
import { BookHeart, ChevronLeft } from 'lucide-react';

export default function TorahSection() {
  return (
    <section
      id="torah"
      className="py-14 px-6 bg-[#0B0F1A] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.03] blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="bg-[#111827]/80 border border-slate-800/60 rounded-2xl p-8 md:p-12 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                <BookHeart size={36} className="text-[#D4AF37]" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-right">
              <p className="text-[#D4AF37] text-[13px] font-semibold tracking-wide uppercase mb-3">
                השראה שבועית
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 mb-4">
                לחבר ערכים לעשייה
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
                בכל שבוע אנו משתפים תובנה קצרה מפרשת השבוע, המחברת בין חוכמת המקורות
                והערכים היהודיים לאתגרים היומיומיים שלנו בסביבת העבודה, פיתוח מנהיגות,
                וצמיחה אישית מתוך דיאלוג פתוח.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0B0F1A] px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-[#F0D060] transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)]">
                לקריאת פרשת השבוע <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
