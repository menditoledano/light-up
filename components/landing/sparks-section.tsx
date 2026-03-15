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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group bg-[#111827]/80 border rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
        spark.is_highlight
          ? 'border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
          : 'border-slate-800/60 hover:border-[#D4AF37]/20'
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <span
          className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${
            spark.is_highlight
              ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
              : 'bg-slate-800/60 text-slate-400'
          }`}
        >
          {spark.category}
        </span>
        {spark.is_highlight && (
          <Sparkles className="text-[#D4AF37]" size={14} />
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
        <div className="flex items-center gap-1 text-[#D4AF37] text-[13px] font-semibold">
          <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            קרא עוד
          </span>
          <ChevronLeft size={14} className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 delay-75" />
        </div>
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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#D4AF37] text-[13px] font-semibold tracking-wide uppercase mb-3">
              תוכן מקצועי ואישי
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100">
              ניצוצות של השראה
            </h2>
            <p className="text-slate-500 mt-3 max-w-md text-[15px] leading-relaxed">
              מאמרי &lsquo;ספארק 10&rsquo; - קריאה קצרה של עד 2 דקות שנותנת ערך, ידע
              וכלים לשילוב בין זהות, ערכים וקריירה.
            </p>
          </motion.div>
          <button className="text-slate-300 font-semibold flex items-center gap-1.5 text-[14px] border border-slate-700 px-5 py-2.5 rounded-lg hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all">
            לכל המאמרים <ChevronLeft size={16} />
          </button>
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
