'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'dark-a-to-b' | 'dark-b-to-a' | 'dark-to-footer';
}

export default function SectionDivider({ variant = 'dark-a-to-b' }: SectionDividerProps) {
  const bgFrom = variant === 'dark-b-to-a' ? 'from-[#0D1220]' : variant === 'dark-to-footer' ? 'from-[#0B0F1A]' : 'from-[#0B0F1A]';
  const bgTo = variant === 'dark-b-to-a' ? 'to-[#0B0F1A]' : variant === 'dark-to-footer' ? 'to-[#060911]' : 'to-[#0D1220]';

  return (
    <div className={`relative h-16 bg-gradient-to-b ${bgFrom} ${bgTo}`}>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-10px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent to-teal-500/15" />
          <motion.div
            className="w-1 h-1 rounded-full bg-teal-400/40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="w-16 sm:w-32 h-px bg-gradient-to-l from-transparent to-teal-500/15" />
        </motion.div>
      </div>
    </div>
  );
}
