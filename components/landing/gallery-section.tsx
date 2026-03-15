'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, Eye } from 'lucide-react';

const galleryItems = [
  { id: '1', title: 'הדלקת נרות חנוכה', date_label: 'מרץ 2024', image_url: '/IMG_0732.jpg' },
  { id: '2', title: 'חלוקת חנוכיות לעובדים', date_label: 'דצמבר 2023', image_url: '/IMG_6087.jpg' },
  { id: '3', title: 'חלוקת מצה שמורה לעובדים', date_label: 'ינואר 2024', image_url: '/IMG_9164.JPG' },
  { id: '4', title: 'ערכה לראש השנה', date_label: 'אפריל 2024', image_url: '/e104249c-8acc-4919-950f-aac3e4a01ce7.jpg' },
];

type GalleryItem = typeof galleryItems[number];

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 cursor-pointer border border-slate-800/40 hover:border-[#D4AF37]/20 transition-colors"
    >
      <img
        src={item.image_url}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/90 via-[#0B0F1A]/30 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4 sm:p-5">
        <motion.p
          className="text-white font-bold text-[14px] sm:text-[15px] mb-0.5 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-400"
        >
          {item.title}
        </motion.p>
        <p className="text-slate-400 text-[12px] sm:text-[13px] sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-400 delay-75">
          {item.date_label}
        </p>
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 hidden sm:block">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#D4AF37]/20 backdrop-blur-sm flex items-center justify-center">
            <Eye size={14} className="text-[#D4AF37] sm:w-[15px] sm:h-[15px]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0D1220] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase mb-4">
            <Eye size={14} />
            הקהילה בפעולה
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 mb-3 sm:mb-4">
            הצצה לפעילויות שלנו
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-[14px] sm:text-[15px] leading-relaxed px-2 sm:px-0">
            אירועים, חגים ומפגשים קהילתיים שמתקיימים בסניפי החברות השונות.
          </p>
          <div className="mt-6 flex items-center gap-3 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>
        </motion.div>

        <div className="flex justify-center mb-8">
          <motion.button
            className="text-slate-300 font-semibold flex items-center gap-1.5 text-[13px] sm:text-[14px] border border-slate-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            לגלריה המלאה <ChevronLeft size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
