'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { LOGO_URL } from './navbar';

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
    <footer className="bg-neutral-900 pt-20 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {LOGO_URL ? (
            <img
              src={LOGO_URL}
              alt="Lightup Logo"
              className="h-12 w-auto mx-auto object-contain brightness-0 invert opacity-80"
            />
          ) : (
            <span className="text-2xl font-extrabold text-white">
              LIGHT<span className="text-[#D4AF37]">UP</span>
            </span>
          )}

          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            מוכנים להאיר את הדרך?
          </h2>
          <p className="text-neutral-400 text-[15px] max-w-md mx-auto leading-relaxed">
            הצטרפו לעובדים שכבר מצאו את המקום שלהם בקהילה שלנו בתוך הארגון.
          </p>

          <button className="px-7 py-3 bg-white text-neutral-900 font-semibold rounded-lg text-[15px] hover:bg-neutral-100 transition-colors inline-flex items-center gap-2">
            הגש בקשת הצטרפות <ChevronLeft size={16} />
          </button>
        </motion.div>

        <div className="mt-16 pt-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-5">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-neutral-500 hover:text-neutral-300 transition-colors text-[13px] font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <p className="text-neutral-600 text-[13px]">
              &copy; {new Date().getFullYear()} Lightup Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
