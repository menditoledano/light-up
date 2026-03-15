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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group bg-white border rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-pointer ${
        spark.is_highlight
          ? 'border-[#D4AF37]/20 hover:border-[#D4AF37]/30'
          : 'border-neutral-100 hover:border-neutral-200'
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <span
          className={`text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${
            spark.is_highlight
              ? 'bg-[#D4AF37]/8 text-[#9A7B1A]'
              : 'bg-neutral-50 text-neutral-500'
          }`}
        >
          {spark.category}
        </span>
        {spark.is_highlight && (
          <Sparkles className="text-[#D4AF37]" size={14} />
        )}
      </div>

      <h3 className="text-lg font-bold text-neutral-900 mb-4 leading-snug group-hover:text-[#9A7B1A] transition-colors">
        {spark.title}
      </h3>

      <div className="flex justify-between items-center pt-4 border-t border-neutral-50">
        <div className="flex items-center gap-1.5 text-[13px] text-neutral-400">
          <Clock size={13} />
          {spark.read_time}
        </div>
        <div className="flex items-center gap-1 text-[#B59129] text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          קרא עוד <ChevronLeft size={14} />
        </div>
      </div>
    </motion.div>
  );
}

export default function SparksSection({ sparks }: SparksSectionProps) {
  return (
    <section id="sparks" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#B59129] text-[13px] font-semibold tracking-wide uppercase mb-3">
              תוכן מקצועי ואישי
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
              ניצוצות של השראה
            </h2>
            <p className="text-neutral-500 mt-3 max-w-md text-[15px] leading-relaxed">
              מאמרי &lsquo;ספארק 10&rsquo; - קריאה קצרה של עד 2 דקות שנותנת ערך, ידע
              וכלים לשילוב בין זהות, ערכים וקריירה.
            </p>
          </motion.div>
          <button className="text-neutral-600 font-semibold flex items-center gap-1.5 text-[14px] border border-neutral-200 px-5 py-2.5 rounded-lg hover:border-neutral-300 hover:bg-neutral-50 transition-all">
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
