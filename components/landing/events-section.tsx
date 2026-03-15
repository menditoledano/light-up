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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative p-6 rounded-3xl flex gap-6 items-center border transition-all duration-500 cursor-pointer group bg-white overflow-hidden ${
        event.is_special
          ? 'border-[#D4AF37]/25 shadow-[0_4px_20px_rgba(212,175,55,0.08)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.12)]'
          : 'border-slate-100 hover:border-[#D4AF37]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]'
      }`}
    >
      <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-[#E6C84D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-full" />

      <div
        className={`relative p-4 rounded-2xl text-center min-w-[90px] transition-all duration-500 ${
          event.is_special
            ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/4 border border-[#D4AF37]/20'
            : 'bg-slate-50 border border-slate-100 group-hover:border-[#D4AF37]/20 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37]/8 group-hover:to-transparent'
        }`}
      >
        <span className="block text-[#B59129] text-[11px] font-bold uppercase tracking-wider mb-1">
          {event.event_month}
        </span>
        <span className="block text-3xl font-black text-[#1A1A1A] leading-none">
          {event.event_day}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#B59129] transition-colors duration-300 truncate">
          {event.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin size={14} className="text-[#D4AF37]/60" />
            <span>{event.location}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-[#B59129] font-medium text-xs px-2.5 py-0.5 bg-[#D4AF37]/8 rounded-full">
            {event.event_type}
          </span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A42F] text-white font-bold rounded-xl shadow-[0_2px_10px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)] transition-all text-sm"
      >
        RSVP <ChevronLeft size={14} />
      </motion.button>
    </motion.div>
  );
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section
      id="events"
      className="py-28 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      <div className="absolute -left-40 top-20 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -right-40 bottom-20 w-80 h-80 bg-[#B59129]/4 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#D4AF37]/8 border border-[#D4AF37]/15 text-[#B59129] text-xs font-bold tracking-widest uppercase mb-5">
            <Calendar size={16} />
            לוח אירועים
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            מאירים ביחד
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-sans">
            המפגשים הפיזיים והווירטואליים שיוצרים את הקהילה שלנו.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
