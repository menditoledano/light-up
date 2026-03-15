'use client';

import { motion } from 'framer-motion';
import { Camera, ChevronLeft, Eye } from 'lucide-react';
import type { LightupGalleryItem } from '@/lib/types';

interface GallerySectionProps {
  items: LightupGalleryItem[];
}

function GalleryCard({ item, index }: { item: LightupGalleryItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 cursor-pointer"
    >
      {item.image_url ? (
        <img
          src={item.image_url}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-14 h-14 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-3">
            <Camera size={24} className="text-neutral-400" strokeWidth={1.5} />
          </div>
          <span className="text-[13px] text-neutral-400">{item.placeholder_text}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <p className="text-white font-bold text-[15px] mb-0.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {item.title}
        </p>
        <p className="text-neutral-300 text-[13px] translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {item.date_label}
        </p>
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <Eye size={14} className="text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection({ items }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#B59129] text-[13px] font-semibold tracking-wide uppercase mb-3">
              הקהילה בפעולה
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">
              הצצה לפעילויות שלנו
            </h2>
            <p className="text-neutral-500 mt-3 max-w-md text-[15px] leading-relaxed">
              אירועים, חגים ומפגשים קהילתיים שמתקיימים בסניפי החברות השונות.
            </p>
          </motion.div>
          <button className="text-neutral-600 font-semibold flex items-center gap-1.5 text-[14px] border border-neutral-200 px-5 py-2.5 rounded-lg hover:border-neutral-300 hover:bg-neutral-50 transition-all">
            לגלריה המלאה <ChevronLeft size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
