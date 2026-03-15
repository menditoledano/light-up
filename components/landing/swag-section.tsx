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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: 0.05 + index * 0.08 }}
      className="group bg-[#0B0F1A]/60 border border-slate-800/40 rounded-xl p-5 text-center hover:border-[#D4AF37]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#D4AF37]/15 transition-colors">
        <Icon size={22} className="text-[#D4AF37]" strokeWidth={1.5} />
      </div>
      <h4 className="font-bold text-slate-100 text-[14px] mb-1 group-hover:text-[#D4AF37] transition-colors">
        {name}
      </h4>
      <p className="text-slate-500 text-[13px]">{desc}</p>
    </motion.div>
  );
}

export default function SwagSection() {
  return (
    <section id="swag" className="py-14 px-6 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="bg-[#111827]/80 border border-slate-800/60 rounded-2xl p-8 md:p-12 hover:shadow-[0_20px_50px_rgba(212,175,55,0.04)] transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="lg:w-1/2 space-y-5 text-center lg:text-right">
              <div className="inline-flex p-3 bg-[#D4AF37]/10 rounded-xl">
                <ShoppingBag size={28} className="text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
                חנות הקהילה
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                ריכזנו עבורכם פלטפורמה אחת לציון חגי ישראל ואירועי שיא בארגון. כאן
                תוכלו להזמין במרוכז מארזי שי, פריטי אווירה לחלל המשרד, וכיבוד מותאם
                למפגשי גיבוש קהילתיים שפתוחים לכולם.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0B0F1A] px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-[#F0D060] transition-all hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)]">
                למעבר לחנות המרכזית <ExternalLink size={15} />
              </button>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-3 w-full">
              {swagCategories.map((item, i) => (
                <SwagItem key={item.name} icon={item.icon} name={item.name} desc={item.desc} index={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
