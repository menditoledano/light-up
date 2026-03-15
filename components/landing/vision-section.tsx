'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Users, Globe } from 'lucide-react';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  step: string;
  delay: number;
}

function FeatureCard({ icon, title, desc, step, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white border border-[#D4AF37]/8 p-8 pt-10 rounded-3xl shadow-sm hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] hover:border-[#D4AF37]/25 transition-all duration-500 group overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

      <span className="absolute top-5 left-6 text-7xl font-black text-[#D4AF37]/[0.04] leading-none font-serif pointer-events-none select-none">
        {step}
      </span>

      <div className="relative z-10">
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/12 to-[#D4AF37]/4 flex items-center justify-center mb-7 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.12)] transition-all duration-500">
          <div className="text-[#B59129]">{icon}</div>
        </div>

        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#B59129] transition-colors duration-300 font-sans">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed font-sans text-[15px]">{desc}</p>
      </div>
    </motion.div>
  );
}

const pillars = [
  {
    icon: <HeartHandshake size={30} strokeWidth={1.5} />,
    title: 'חיבור לזהות',
    desc: 'מרחב בו כל אחד יכול לבטא את החיבור לזהותו ולמורשת היהודית באותנטיות, תוך כבוד הדדי וקבלת מרחב בטוח למסורת בסביבת העבודה.',
    step: '01',
  },
  {
    icon: <Users size={30} strokeWidth={1.5} />,
    title: 'ערכים משותפים וחגים',
    desc: 'רשת תמיכה פנים-ארגונית שחוגגת יחד את מועדי ישראל, ויוצרת רגעי גיבוש משמעותיים סביב לוח השנה העברי והמורשת שלנו.',
    step: '02',
  },
  {
    icon: <Globe size={30} strokeWidth={1.5} />,
    title: 'גשרים של תקשורת',
    desc: 'יצירת שיח פתוח ומקרב בתוך הארגון. אנו מאמינים שערכי המורשת שלנו הם הבסיס לתקשורת סובלנית, הבנה הדדית וחיבור בין כולם.',
    step: '03',
  },
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="py-28 px-6 md:px-12 bg-white relative section-divider"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-12 h-[2px] bg-[#D4AF37] mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-5">
            השאיפות שלנו
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-sans">
            בנינו את Lightup על בסיס שלושה עמודי תווך שנועדו להעצים כל עובד ועובדת.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <FeatureCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              desc={pillar.desc}
              step={pillar.step}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
