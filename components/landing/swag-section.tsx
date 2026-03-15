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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white border border-neutral-100 rounded-xl p-5 text-center hover:border-neutral-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-pointer"
    >
      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#D4AF37]/12 transition-colors">
        <Icon size={22} className="text-[#B59129]" strokeWidth={1.5} />
      </div>
      <h4 className="font-bold text-neutral-700 text-[14px] mb-1 group-hover:text-[#9A7B1A] transition-colors">
        {name}
      </h4>
      <p className="text-neutral-400 text-[13px]">{desc}</p>
    </motion.div>
  );
}

export default function SwagSection() {
  return (
    <section id="swag" className="py-24 px-6 bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white border border-neutral-100 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="lg:w-1/2 space-y-5 text-center lg:text-right">
              <div className="inline-flex p-3 bg-[#D4AF37]/8 rounded-xl">
                <ShoppingBag size={28} className="text-[#B59129]" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-700">
                חנות הקהילה
              </h2>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                ריכזנו עבורכם פלטפורמה אחת לציון חגי ישראל ואירועי שיא בארגון. כאן
                תוכלו להזמין במרוכז מארזי שי, פריטי אווירה לחלל המשרד, וכיבוד מותאם
                למפגשי גיבוש קהילתיים שפתוחים לכולם.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#B59129] text-white px-6 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-[#9A7B1A] transition-colors">
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
