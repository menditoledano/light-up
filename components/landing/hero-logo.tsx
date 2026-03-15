'use client';

import { motion } from 'framer-motion';

export default function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-4xl mx-auto mb-10"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <svg
            viewBox="0 0 48 48"
            className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
            fill="none"
          >
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              stroke="#D4AF37"
              strokeWidth="0.75"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.6, duration: 1.5, ease: 'easeInOut' }}
            />
            <motion.path
              d="M24 12C24 12 18 20 18 28C18 31.3 20.7 34 24 34C27.3 34 30 31.3 30 28C30 20 24 12 24 12Z"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="24"
              cy="27"
              r="2.5"
              fill="#D4AF37"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.4, type: 'spring' }}
            />
          </svg>

          <motion.span
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-slate-100">LIGHT</span>
            <span className="text-gold-gradient">UP</span>
          </motion.span>

          <motion.span
            className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] text-[#D4AF37]/50 font-medium mt-2 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Ignite Your Identity
          </motion.span>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/25" />
          <motion.div
            className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]/30"
            animate={{ rotate: [45, 225, 45] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/25" />
        </motion.div>
      </div>
    </motion.div>
  );
}
