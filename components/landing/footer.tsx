'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { LightupLogo } from './navbar';

const footerLinks = [
  { label: 'החזון שלנו', id: 'vision' },
  { label: 'פרשת השבוע', id: 'torah' },
  { label: 'הגלריה', id: 'gallery' },
  { label: 'חנות הקהילה', id: 'swag' },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#060911] pt-14 pb-10 px-6 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <LightupLogo size={44} />
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            מוכנים להאיר את הדרך?
          </motion.h2>
          <motion.p
            className="text-slate-500 text-[15px] max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            האור חזק יותר כשמאירים ביחד. בואו להיות חלק מהסיפור.
          </motion.p>

          <motion.button
            className="px-7 py-3 bg-[#D4AF37] text-[#0B0F1A] font-bold rounded-lg text-[15px] hover:bg-[#F0D060] transition-colors inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            הגש בקשת הצטרפות <ChevronLeft size={16} />
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 pt-6 border-t border-slate-800/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-5">
              {footerLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-600 hover:text-[#D4AF37] transition-colors text-[13px] font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <p className="text-slate-700 text-[13px]">
              &copy; {new Date().getFullYear()} Lightup Community
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
