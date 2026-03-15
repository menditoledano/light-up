'use client';

import { motion } from 'framer-motion';
import { Camera, ChevronLeft, Eye } from 'lucide-react';
import type { LightupGalleryItem } from '@/lib/types';

interface GallerySectionProps {
  items: LightupGalleryItem[];
}

const placeholderGradients = [
  'from-[#D4AF37]/15 via-[#E6C84D]/8 to-[#FDFCF8]',
  'from-[#B59129]/12 via-[#D4AF37]/6 to-[#FAF8F2]',
  'from-[#C9A42F]/10 via-[#E6C84D]/5 to-[#FEFDFB]',
];

function GalleryCard({ item, index }: { item: LightupGalleryItem; index: number }) {
  const gradient = placeholderGradients[index % placeholderGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white border border-slate-100 shadow-sm hover:shadow-[0_16px_40px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/20 transition-all duration-500 cursor-pointer"
    >
      {item.image_url ? (
        <img
          src={item.image_url}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#D4AF37]/15 flex items-center justify-center mb-4 shadow-sm">
              <Camera size={28} className="text-[#B59129]" strokeWidth={1.5} />
            </div>
            <span className="font-medium text-sm text-[#B59129]/70">{item.placeholder_text}</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-6">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-white font-bold text-lg mb-1">{item.title}</p>
          <p className="text-[#D4AF37] text-sm font-medium">{item.date_label}</p>
        </div>
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Eye size={18} className="text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection({ items }: GallerySectionProps) {
  return (
    <section
      id="gallery"
      className="py-28 px-6 md:px-12 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
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
                <Camera size={20} className="text-[#B59129]" />
              </div>
              <span className="font-bold tracking-widest uppercase text-sm text-[#B59129]">
                הקהילה בפעולה
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
              הצצה לפעילויות שלנו
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-lg font-sans leading-relaxed">
              אירועים, חגים ומפגשים קהילתיים שמתקיימים בסניפי החברות השונות. ככה נראית
              קהילה שמאירה את הארגון.
            </p>
          </motion.div>
          <motion.button
            whileHover={{ x: -4, boxShadow: '0 2px 12px rgba(212,175,55,0.15)' }}
            whileTap={{ scale: 0.97 }}
            className="text-[#B59129] font-bold flex items-center gap-2 bg-white px-6 py-3 rounded-full transition-all border border-[#D4AF37]/20 shadow-sm hover:border-[#D4AF37]/40"
          >
            לגלריה המלאה <ChevronLeft size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
