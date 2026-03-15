'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Gift, PartyPopper, Shirt, UtensilsCrossed } from 'lucide-react';

const swagCategories = [
  { icon: Gift, name: 'מארזי חג ומועדים', desc: 'מתנות מרגשות לכל חג' },
  { icon: PartyPopper, name: 'אווירת חג במשרד', desc: 'עיטורים ופריטי אווירה' },
  { icon: Shirt, name: 'סוואג קהילתי', desc: 'ביגוד ופריטים ממותגים' },
  { icon: UtensilsCrossed, name: 'כיבוד ואירוח כשר', desc: 'מגוון אפשרויות לאירוח' },
];

function SwagItem({ icon: Icon, name, desc, index }: { icon: typeof Gift; name: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(212, 175, 55, 0.06)' }}
      className="group bg-[#0B0F1A]/60 border border-slate-800/40 rounded-xl p-5 text-center hover:border-[#D4AF37]/20 transition-all duration-300 cursor-pointer"
    >
      <motion.div
        className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#D4AF37]/15 transition-colors"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
        transition={{ duration: 0.4 }}
      >
        <Icon size={22} className="text-[#D4AF37]" strokeWidth={1.5} />
      </motion.div>
      <h4 className="font-bold text-slate-100 text-[14px] mb-1 group-hover:text-[#D4AF37] transition-colors">
        {name}
      </h4>
      <p className="text-slate-500 text-[13px]">{desc}</p>
    </motion.div>
  );
}

export default function SwagSection() {
  return (
    <section id="swag" className="py-24 px-6 bg-[#0B0F1A] relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          className="bg-[#111827]/80 border border-slate-800/60 rounded-2xl p-8 md:p-12"
          whileHover={{ boxShadow: '0 20px 50px rgba(212, 175, 55, 0.04)' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="lg:w-1/2 space-y-5 text-center lg:text-right">
              <motion.div
                className="inline-flex p-3 bg-[#D4AF37]/10 rounded-xl"
                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <ShoppingBag size={28} className="text-[#D4AF37]" strokeWidth={1.5} />
              </motion.div>
              <motion.h2
                className="text-2xl md:text-3xl font-extrabold text-slate-100"
                initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                חנות הקהילה
              </motion.h2>
              <motion.p
                className="text-slate-400 text-[15px] leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                ריכזנו עבורכם פלטפורמה אחת לציון חגי ישראל ואירועי שיא בארגון. כאן
                תוכלו להזמין במרוכז מארזי שי, פריטי אווירה לחלל המשרד, וכיבוד מותאם
                למפגשי גיבוש קהילתיים שפתוחים לכולם.
              </motion.p>
              <motion.button
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0B0F1A] px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-[#F0D060] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(212, 175, 55, 0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                למעבר לחנות המרכזית <ExternalLink size={15} />
              </motion.button>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-3 w-full">
              {swagCategories.map((item, i) => (
                <SwagItem key={item.name} icon={item.icon} name={item.name} desc={item.desc} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
