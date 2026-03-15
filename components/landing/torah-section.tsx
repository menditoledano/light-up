'use client';

import { motion } from 'framer-motion';
import { BookHeart, ChevronLeft } from 'lucide-react';

export default function TorahSection() {
  return (
    <section
      id="torah"
      className="py-24 px-6 bg-neutral-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white border border-neutral-100 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-[#D4AF37]/8 flex items-center justify-center">
                <BookHeart size={36} className="text-[#B59129]" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-right">
              <p className="text-[#B59129] text-[13px] font-semibold tracking-wide uppercase mb-3">
                השראה שבועית
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4">
                לחבר ערכים לעשייה
              </h2>
              <p className="text-neutral-500 text-[15px] leading-relaxed mb-8">
                בכל שבוע אנו משתפים תובנה קצרה מפרשת השבוע, המחברת בין חוכמת המקורות
                והערכים היהודיים לאתגרים היומיומיים שלנו בסביבת העבודה, פיתוח מנהיגות,
                וצמיחה אישית מתוך דיאלוג פתוח.
              </p>
              <button className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-neutral-800 transition-colors">
                לקריאת פרשת השבוע <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
