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
    <footer className="bg-[#060911] pt-10 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5 sm:space-y-6"
        >
          <div className="flex justify-center">
            <LightupLogo size={38} />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
            מוכנים להאיר את הדרך?
          </h2>
          <p className="text-slate-500 text-[14px] sm:text-[15px] max-w-md mx-auto leading-relaxed px-2 sm:px-0">
            האור חזק יותר כשמאירים ביחד. בואו להיות חלק מהסיפור.
          </p>

          <a
            href="https://forms.gle/Ru6tAp49hKuwQbc27"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-7 py-2.5 sm:py-3 bg-[#D4AF37] text-[#0B0F1A] font-bold rounded-lg text-[14px] sm:text-[15px] hover:bg-[#F0D060] transition-all hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] inline-flex items-center gap-2"
          >
            הגש בקשת הצטרפות <ChevronLeft size={16} />
          </a>
        </motion.div>

        <div className="mt-10 sm:mt-16 pt-5 sm:pt-6 border-t border-slate-800/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-600 hover:text-[#D4AF37] transition-colors text-[12px] sm:text-[13px] font-medium hover:-translate-y-0.5"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <p className="text-slate-700 text-[12px] sm:text-[13px]">
              &copy; {new Date().getFullYear()} Lightup Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
