'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Users, Globe } from 'lucide-react';
import type { ReactNode } from 'react';

interface PillarProps {
  icon: ReactNode;
  title: string;
  desc: string;
  index: number;
}

function PillarCard({ icon, title, desc, index }: PillarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#111827]/80 border border-slate-800/60 rounded-2xl p-5 sm:p-8 hover:border-[#D4AF37]/20 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4 sm:mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-colors">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2 sm:mb-3 group-hover:text-[#D4AF37] transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed">{desc}</p>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-[60%] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rounded-full transition-all duration-500" />
    </motion.div>
  );
}

const pillars = [
  {
    icon: <HeartHandshake size={22} strokeWidth={1.8} />,
    title: 'חיבור לזהות',
    desc: 'מרחב בו כל אחד יכול לבטא את החיבור לזהותו ולמורשת היהודית באותנטיות, תוך כבוד הדדי וקבלת מרחב בטוח למסורת בסביבת העבודה.',
  },
  {
    icon: <Users size={22} strokeWidth={1.8} />,
    title: 'ערכים משותפים וחגים',
    desc: 'רשת תמיכה פנים-ארגונית שחוגגת יחד את מועדי ישראל, ויוצרת רגעי גיבוש משמעותיים סביב לוח השנה העברי והמורשת שלנו.',
  },
  {
    icon: <Globe size={22} strokeWidth={1.8} />,
    title: 'גשרים של תקשורת',
    desc: 'יצירת שיח פתוח ומקרב בתוך הארגון. אנו מאמינים שערכי המורשת שלנו הם הבסיס לתקשורת סובלנית, הבנה הדדית וחיבור בין כולם.',
  },
];

export default function VisionSection() {
  return (
    <section id="vision" className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0D1220] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase mb-4">
            מי אנחנו
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 mb-3 sm:mb-4">
            השאיפות שלנו
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-[14px] sm:text-[15px] leading-relaxed px-2 sm:px-0">
            בנינו את Lightup על בסיס שלושה עמודי תווך שנועדו להעצים כל עובד ועובדת.
          </p>
          <div className="mt-6 flex items-center gap-3 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              desc={pillar.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
