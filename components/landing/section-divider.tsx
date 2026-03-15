'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'light-to-muted' | 'muted-to-light' | 'light-to-dark' | 'muted-to-dark';
}

export default function SectionDivider({ variant = 'light-to-muted' }: SectionDividerProps) {
  const bgFrom = variant.startsWith('muted') ? 'from-[#FAFAF9]' : 'from-white';
  const bgTo = variant.endsWith('muted') ? 'to-[#FAFAF9]' : variant.endsWith('dark') ? 'to-neutral-800' : 'to-white';

  return (
    <div className={`relative h-20 bg-gradient-to-b ${bgFrom} ${bgTo}`}>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/20" />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/20" />
        </motion.div>
      </div>
    </div>
  );
}
