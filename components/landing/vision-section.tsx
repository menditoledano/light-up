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
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
      className="group relative bg-white border border-neutral-100 rounded-2xl p-8 hover:border-neutral-200 transition-all duration-300"
    >
      <motion.div
        className="w-11 h-11 rounded-xl bg-[#D4AF37]/8 flex items-center justify-center mb-6 text-[#B59129] group-hover:bg-[#D4AF37]/12 transition-colors"
        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-bold text-neutral-700 mb-3 group-hover:text-[#9A7B1A] transition-colors">
        {title}
      </h3>
      <p className="text-neutral-500 text-[15px] leading-relaxed">{desc}</p>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: '60%' }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
      />
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-[#B59129] text-[13px] font-semibold tracking-wide uppercase mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            מי אנחנו
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-neutral-700 mb-4"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            השאיפות שלנו
          </motion.h2>
          <motion.p
            className="text-neutral-500 max-w-lg mx-auto text-[15px] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            בנינו את Lightup על בסיס שלושה עמודי תווך שנועדו להעצים כל עובד ועובדת.
          </motion.p>
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
