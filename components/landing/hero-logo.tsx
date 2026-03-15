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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      <div className="relative flex items-center justify-center gap-5 sm:gap-8">
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.div
          className="flex-1 max-w-[60px] sm:max-w-[80px] flex items-center justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
            <path
              d="M20 4L23.5 14.5H34L25.5 21L29 32L20 25L11 32L14.5 21L6 14.5H16.5L20 4Z"
              stroke="#D4AF37"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        <div className="flex flex-col items-center shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <svg
              viewBox="0 0 48 48"
              className="w-10 h-10 sm:w-14 sm:h-14"
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
                d="M24 10V26M24 26L18 20M24 26L30 20"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="24"
                cy="34"
                r="2"
                fill="#D4AF37"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.4, type: 'spring' }}
              />
              <motion.path
                d="M16 34C16 34 20 38 24 38C28 38 32 34 32 34"
                stroke="#D4AF37"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeInOut' }}
              />
            </svg>

            <div className="flex flex-col items-start">
              <motion.span
                className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-slate-100">LIGHT</span>
                <span className="text-gold-gradient">UP</span>
              </motion.span>
              <motion.span
                className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] text-[#D4AF37]/50 font-medium mt-1 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Ignite Your Identity
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 mt-3 sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/25" />
            <motion.div
              className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]/30"
              animate={{ rotate: [45, 225, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/25" />
          </motion.div>
        </div>

        <motion.div
          className="flex-1 max-w-[60px] sm:max-w-[80px] flex items-center justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
            <path
              d="M20 4L23.5 14.5H34L25.5 21L29 32L20 25L11 32L14.5 21L6 14.5H16.5L20 4Z"
              stroke="#D4AF37"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        <motion.div
          className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'right' }}
        />
      </div>
    </motion.div>
  );
}
