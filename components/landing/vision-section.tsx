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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white border border-neutral-100 rounded-2xl p-8 hover:border-neutral-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/8 flex items-center justify-center mb-6 text-[#B59129] group-hover:bg-[#D4AF37]/12 transition-colors">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-neutral-700 mb-3 group-hover:text-[#9A7B1A] transition-colors">
        {title}
      </h3>
      <p className="text-neutral-500 text-[15px] leading-relaxed">{desc}</p>
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
    <section id="vision" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#B59129] text-[13px] font-semibold tracking-wide uppercase mb-3">
            מי אנחנו
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-700 mb-4">
            השאיפות שלנו
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-[15px] leading-relaxed">
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
