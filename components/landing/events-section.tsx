'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft } from 'lucide-react';
import type { LightupEvent } from '@/lib/types';

interface EventsSectionProps {
  events: LightupEvent[];
}

function EventCard({ event, index }: { event: LightupEvent; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group flex gap-3 sm:gap-5 items-center p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
        event.is_special
          ? 'bg-[#D4AF37]/[0.03] border-[#D4AF37]/15 hover:border-[#D4AF37]/30'
          : 'bg-[#111827]/60 border-slate-800/60 hover:border-[#D4AF37]/20'
      }`}
    >
      <div
        className={`p-2 sm:p-3 rounded-xl text-center min-w-[60px] sm:min-w-[72px] ${
          event.is_special
            ? 'bg-[#D4AF37]/10'
            : 'bg-slate-800/40 group-hover:bg-[#D4AF37]/10'
        } transition-colors`}
      >
        <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-0.5">
          {event.event_month}
        </span>
        <span className="block text-xl sm:text-2xl font-extrabold text-slate-100 leading-none">
          {event.event_day}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-100 mb-1 sm:mb-1.5 group-hover:text-[#D4AF37] transition-colors truncate">
          {event.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] sm:text-[13px]">
          <span className="flex items-center gap-1 text-slate-500">
            <MapPin size={11} className="sm:w-3 sm:h-3" />
            {event.location}
          </span>
          <span className="text-[#D4AF37] font-medium text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 bg-[#D4AF37]/10 rounded">
            {event.event_type}
          </span>
        </div>
      </div>

      <button className="hidden sm:flex items-center gap-1 px-4 py-2 bg-[#D4AF37] text-[#0B0F1A] font-bold rounded-lg text-[13px] hover:bg-[#F0D060] transition-colors">
        RSVP <ChevronLeft size={12} />
      </button>
    </motion.div>
  );
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section id="events" className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase mb-4">
            <Calendar size={14} />
            לוח אירועים
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 mb-3 sm:mb-4">
            מאירים ביחד
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-[14px] sm:text-[15px] leading-relaxed px-2 sm:px-0">
            המפגשים הפיזיים והווירטואליים שיוצרים את הקהילה שלנו.
          </p>
          <div className="mt-6 flex items-center gap-3 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]/60" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
