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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          className="bg-white border border-neutral-100 rounded-2xl p-8 md:p-12"
          whileHover={{ boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 120 }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-[#D4AF37]/8 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <BookHeart size={36} className="text-[#B59129]" strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            <div className="flex-1 text-center md:text-right">
              <motion.p
                className="text-[#B59129] text-[13px] font-semibold tracking-wide uppercase mb-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                השראה שבועית
              </motion.p>
              <motion.h2
                className="text-2xl md:text-3xl font-extrabold text-neutral-700 mb-4"
                initial={{ opacity: 0, x: 20, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                לחבר ערכים לעשייה
              </motion.h2>
              <motion.p
                className="text-neutral-500 text-[15px] leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                בכל שבוע אנו משתפים תובנה קצרה מפרשת השבוע, המחברת בין חוכמת המקורות
                והערכים היהודיים לאתגרים היומיומיים שלנו בסביבת העבודה, פיתוח מנהיגות,
                וצמיחה אישית מתוך דיאלוג פתוח.
              </motion.p>
              <motion.button
                className="inline-flex items-center gap-2 bg-[#B59129] text-white px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-[#9A7B1A] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(181, 145, 41, 0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                לקריאת פרשת השבוע <ChevronLeft size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
