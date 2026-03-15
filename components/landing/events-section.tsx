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
      initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: event.is_special ? 0 : -4, boxShadow: '0 12px 35px rgba(45, 212, 191, 0.05)' }}
      className={`group flex gap-5 items-center p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
        event.is_special
          ? 'bg-[#D4AF37]/[0.03] border-[#D4AF37]/15 hover:border-[#D4AF37]/30'
          : 'bg-[#111827]/60 border-slate-800/60 hover:border-teal-500/20'
      }`}
    >
      <motion.div
        className={`p-3 rounded-xl text-center min-w-[72px] ${
          event.is_special
            ? 'bg-[#D4AF37]/10'
            : 'bg-slate-800/40 group-hover:bg-teal-500/10'
        } transition-colors`}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
      >
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-teal-400 mb-0.5">
          {event.event_month}
        </span>
        <span className="block text-2xl font-extrabold text-slate-100 leading-none">
          {event.event_day}
        </span>
      </motion.div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-bold text-slate-100 mb-1.5 group-hover:text-teal-400 transition-colors truncate">
          {event.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-[13px]">
          <span className="flex items-center gap-1 text-slate-500">
            <MapPin size={12} />
            {event.location}
          </span>
          <span className="text-teal-400 font-medium text-[11px] px-2 py-0.5 bg-teal-500/10 rounded">
            {event.event_type}
          </span>
        </div>
      </div>

      <motion.button
        className="hidden sm:flex items-center gap-1 px-4 py-2 bg-teal-500 text-[#0B0F1A] font-bold rounded-lg text-[13px] hover:bg-teal-400 transition-colors"
        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(45, 212, 191, 0.25)' }}
        whileTap={{ scale: 0.95 }}
      >
        RSVP <ChevronLeft size={12} />
      </motion.button>
    </motion.div>
  );
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section id="events" className="py-24 px-6 bg-[#0B0F1A] relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-teal-500/[0.03] blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-[12px] font-semibold tracking-wide uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 150 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Calendar size={14} />
            </motion.div>
            לוח אירועים
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-3"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            מאירים ביחד
          </motion.h2>
          <motion.p
            className="text-slate-500 max-w-lg mx-auto text-[15px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            המפגשים הפיזיים והווירטואליים שיוצרים את הקהילה שלנו.
          </motion.p>
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
