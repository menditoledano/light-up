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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 cursor-pointer"
    >
      {item.image_url ? (
        <img
          src={item.image_url}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            className="w-14 h-14 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-3"
            whileHover={{ rotate: 12, scale: 1.1 }}
          >
            <Camera size={24} className="text-neutral-400" strokeWidth={1.5} />
          </motion.div>
          <span className="text-[13px] text-neutral-400">{item.placeholder_text}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
        <motion.p
          className="text-white font-bold text-[15px] mb-0.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-400"
        >
          {item.title}
        </motion.p>
        <p className="text-neutral-300 text-[13px] translate-y-4 group-hover:translate-y-0 transition-transform duration-400 delay-75">
          {item.date_label}
        </p>
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <Eye size={15} className="text-white" />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="text-[#B59129] text-[13px] font-semibold tracking-wide uppercase mb-3"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              הקהילה בפעולה
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-neutral-700"
              initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              הצצה לפעילויות שלנו
            </motion.h2>
            <motion.p
              className="text-neutral-500 mt-3 max-w-md text-[15px] leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              אירועים, חגים ומפגשים קהילתיים שמתקיימים בסניפי החברות השונות.
            </motion.p>
          </motion.div>
          <motion.button
            className="text-neutral-600 font-semibold flex items-center gap-1.5 text-[14px] border border-neutral-200 px-5 py-2.5 rounded-lg hover:border-neutral-300 hover:bg-neutral-50 transition-all"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            לגלריה המלאה <ChevronLeft size={16} />
          </motion.button>
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
