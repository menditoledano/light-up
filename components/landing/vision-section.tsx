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
      className="group relative bg-[#111827]/80 border border-slate-800/60 rounded-2xl p-8 hover:border-[#D4AF37]/20 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-colors">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-[#D4AF37] transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-[15px] leading-relaxed">{desc}</p>

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
    <section id="vision" className="py-14 px-6 bg-[#0D1220] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-[13px] font-semibold tracking-wide uppercase mb-3">
            מי אנחנו
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4">
            השאיפות שלנו
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-[15px] leading-relaxed">
            בנינו את Lightup על בסיס שלושה עמודי תווך שנועדו להעצים כל עובד ועובדת.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
