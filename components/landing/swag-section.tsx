'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Sun, Gift, PartyPopper, Shirt, UtensilsCrossed } from 'lucide-react';

const swagCategories = [
  { icon: Gift, name: 'מארזי חג ומועדים', desc: 'מתנות מרגשות לכל חג' },
  { icon: PartyPopper, name: 'אווירת חג במשרד', desc: 'עיטורים ופריטי אווירה' },
  { icon: Shirt, name: 'סוואג קהילתי', desc: 'ביגוד ופריטים ממותגים' },
  { icon: UtensilsCrossed, name: 'כיבוד ואירוח כשר', desc: 'מגוון אפשרויות לאירוח' },
];

function SwagItem({ icon: Icon, name, desc, index }: { icon: typeof Gift; name: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:shadow-[0_12px_30px_rgba(212,175,55,0.1)] hover:border-[#D4AF37]/30 transition-all duration-500 cursor-pointer group"
    >
      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/12 to-[#D4AF37]/4 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500">
        <Icon size={28} className="text-[#B59129]" strokeWidth={1.5} />
      </div>
      <h4 className="font-bold text-[#1A1A1A] mb-1 group-hover:text-[#B59129] transition-colors">{name}</h4>
      <p className="text-slate-400 text-sm font-sans">{desc}</p>
    </motion.div>
  );
}

export default function SwagSection() {
  return (
    <section id="swag" className="py-28 px-6 md:px-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto bg-gradient-to-br from-[#FDFCF8] to-[#FAF8F2] border border-[#D4AF37]/15 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-[0_10px_40px_rgba(212,175,55,0.05)]"
      >
        <div className="absolute -top-24 -right-24 text-[#D4AF37]/[0.06] pointer-events-none">
          <Sun size={300} strokeWidth={1} />
        </div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#D4AF37]/4 blur-[80px] rounded-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-right">
            <div className="inline-flex p-4 bg-white border border-[#D4AF37]/15 rounded-2xl shadow-sm">
              <ShoppingBag size={36} className="text-[#B59129]" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
              חנות הקהילה
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-sans">
              ריכזנו עבורכם פלטפורמה אחת לציון חגי ישראל ואירועי שיא בארגון. כאן
              תוכלו להזמין במרוכז מארזי שי, פריטי אווירה לחלל המשרד, וכיבוד מותאם
              למפגשי גיבוש קהילתיים שפתוחים לכולם.
            </p>
            <motion.button
              whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(212,175,55,0.3)' }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A42F] text-white px-8 py-4 rounded-full font-bold text-lg transition-all mt-2 shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
            >
              למעבר לחנות המרכזית <ExternalLink size={18} />
            </motion.button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            {swagCategories.map((item, i) => (
              <SwagItem key={item.name} icon={item.icon} name={item.name} desc={item.desc} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
