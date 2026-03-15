'use client';

import { motion } from 'framer-motion';
import { Clock, ChevronLeft, Sparkles } from 'lucide-react';
import type { LightupSpark } from '@/lib/types';

interface SparksSectionProps {
  sparks: LightupSpark[];
}

function SparkCard({ spark, index }: { spark: LightupSpark; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.08)' }}
      className={`group bg-[#111827]/80 border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
        spark.is_highlight
          ? 'border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
          : 'border-slate-800/60 hover:border-[#D4AF37]/20'
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <motion.span
          className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${
            spark.is_highlight
              ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
              : 'bg-slate-800/60 text-slate-400'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
        >
          {spark.category}
        </motion.span>
        {spark.is_highlight && (
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="text-[#D4AF37]" size={14} />
          </motion.div>
        )}
      </div>

      <h3 className="text-lg font-bold text-slate-100 mb-4 leading-snug group-hover:text-[#D4AF37] transition-colors">
        {spark.title}
      </h3>

      <div className="flex justify-between items-center pt-4 border-t border-slate-800/40">
        <div className="flex items-center gap-1.5 text-[13px] text-slate-500">
          <Clock size={13} />
          {spark.read_time}
        </div>
        <motion.div
          className="flex items-center gap-1 text-[#D4AF37] text-[13px] font-semibold"
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ x: -3 }}
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 0 }}
        >
          <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            קרא עוד
          </span>
          <ChevronLeft size={14} className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 delay-75" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SparksSection({ sparks }: SparksSectionProps) {
  return (
    <section id="sparks" className="py-14 px-6 bg-[#0D1220] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="text-[#D4AF37] text-[13px] font-semibold tracking-wide uppercase mb-3"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              תוכן מקצועי ואישי
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-slate-100"
              initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              ניצוצות של השראה
            </motion.h2>
            <motion.p
              className="text-slate-500 mt-3 max-w-md text-[15px] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              מאמרי &lsquo;ספארק 10&rsquo; - קריאה קצרה של עד 2 דקות שנותנת ערך, ידע
              וכלים לשילוב בין זהות, ערכים וקריירה.
            </motion.p>
          </motion.div>
          <motion.button
            className="text-slate-300 font-semibold flex items-center gap-1.5 text-[14px] border border-slate-700 px-5 py-2.5 rounded-lg hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            לכל המאמרים <ChevronLeft size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sparks.map((spark, i) => (
            <SparkCard key={spark.id} spark={spark} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
