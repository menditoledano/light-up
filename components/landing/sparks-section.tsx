'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, ChevronLeft, Sparkles } from 'lucide-react';
import type { LightupSpark } from '@/lib/types';

interface SparksSectionProps {
  sparks: LightupSpark[];
}

const accentColors = [
  { from: '#D4AF37', to: '#E6C84D' },
  { from: '#B59129', to: '#D4AF37' },
  { from: '#C9A42F', to: '#E6C84D' },
];

function SparkCard({
  spark,
  index,
}: {
  spark: LightupSpark;
  index: number;
}) {
  const isHighlight = spark.is_highlight;
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 group cursor-pointer border bg-white ${
        isHighlight
          ? 'border-[#D4AF37]/30 shadow-[0_8px_24px_rgba(212,175,55,0.1)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.15)]'
          : 'border-slate-100 shadow-sm hover:border-[#D4AF37]/25 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]'
      }`}
    >
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
        }}
      />

      <div className="p-7">
        <div className="flex justify-between items-center mb-5">
          <span
            className={`text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full ${
              isHighlight
                ? 'bg-gradient-to-r from-[#D4AF37]/12 to-[#D4AF37]/6 text-[#B59129] border border-[#D4AF37]/15'
                : 'bg-slate-50 text-slate-500 border border-slate-100'
            }`}
          >
            {spark.category}
          </span>
          {isHighlight && (
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/8 flex items-center justify-center">
              <Sparkles className="text-[#D4AF37]" size={16} />
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 leading-snug group-hover:text-[#B59129] transition-colors duration-300">
          {spark.title}
        </h3>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400">
            <Clock size={14} className="text-slate-300" />
            {spark.read_time}
          </div>
          <div className="flex items-center gap-1 text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300">
            <span className="text-sm font-bold">קרא עוד</span>
            <ChevronLeft size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SparksSection({ sparks }: SparksSectionProps) {
  return (
    <section
      id="sparks"
      className="py-28 px-6 md:px-12 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37]/12 to-[#D4AF37]/4 flex items-center justify-center">
                <Zap size={20} className="text-[#B59129]" />
              </div>
              <span className="font-bold tracking-widest uppercase text-sm text-[#B59129]">
                תוכן מקצועי ואישי
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
              ניצוצות של השראה
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-lg font-sans leading-relaxed">
              מאמרי &lsquo;ספארק 10&rsquo; - קריאה קצרה של עד 2 דקות שנותנת ערך, ידע
              וכלים לשילוב בין זהות, ערכים וקריירה.
            </p>
          </motion.div>
          <motion.button
            whileHover={{ x: -4, boxShadow: '0 2px 12px rgba(212,175,55,0.15)' }}
            whileTap={{ scale: 0.97 }}
            className="text-[#B59129] font-bold flex items-center gap-2 bg-white px-6 py-3 rounded-full transition-all border border-[#D4AF37]/20 shadow-sm hover:border-[#D4AF37]/40"
          >
            לכל המאמרים <ChevronLeft size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sparks.map((spark, i) => (
            <SparkCard key={spark.id} spark={spark} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
